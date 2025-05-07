import React, { useEffect, useState } from "react";
import { scaleTime, scaleLinear } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import { useTooltip } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { bisector } from "d3-array";

interface StockDataPoint {
  date: Date;
  price: number;
}

const width = 800;
const height = 400;
const margin = { top: 20, right: 30, bottom: 50, left: 60 };

export const StockChart: React.FC = () => {
  const [data, setData] = useState<StockDataPoint[]>([]);
  const [isMock, setIsMock] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [cooldown, setCooldown] = useState<number>(0);

  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<StockDataPoint>();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (cooldown === 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    try {
      const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;
      const SYMBOL = import.meta.env.VITE_STOCK_SYMBOL;

      if (!API_KEY || !SYMBOL) {
        throw new Error("Missing environment variables");
      }

      const res = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${SYMBOL}&apikey=${API_KEY}`
      );

      const json: Record<string, unknown> = await res.json();

      if (typeof json !== "object" || json === null) {
        throw new Error("Invalid API response");
      }

      if ("Error Message" in json) {
        throw new Error("Alpha Vantage API error: Invalid symbol or function.");
      }

      if ("Note" in json) {
        console.warn("API rate limit exceeded:", json["Note"]);
        throw new Error("Rate limit exceeded.");
      }

      if (!("Time Series (Daily)" in json)) {
        throw new Error("Missing time series data.");
      }

      interface TimeSeriesValues {
        "1. open": string;
        "2. high": string;
        "3. low": string;
        "4. close": string;
        "5. volume": string;
      }

      const raw = json["Time Series (Daily)"] as Record<
        string,
        TimeSeriesValues
      >;

      const parsed: StockDataPoint[] = Object.entries(raw)
        .map(([date, values]) => ({
          date: new Date(date),
          price: parseFloat(values["4. close"]),
        }))
        .sort((a, b) => a.date.getTime() - b.date.getTime());

      setData(parsed);
      setIsMock(false);
    } catch (err) {
      console.warn("Falling back to mock data due to error:", err);
      const mockData: StockDataPoint[] = Array.from({ length: 30 }).map(
        (_, i) => ({
          date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000),
          price: 100 + Math.sin(i / 2) * 10 + Math.random() * 5,
        })
      );
      setData(mockData);
      setIsMock(true);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    if (cooldown > 0 || loading) return;
    fetchData();
    setCooldown(60); // Set cooldown to 60 seconds
  };

  if (!data.length) return <p>Loading chart...</p>;

  const xScale = scaleTime({
    domain: [
      Math.min(...data.map((d) => d.date.getTime())),
      Math.max(...data.map((d) => d.date.getTime())),
    ],
    range: [margin.left, width - margin.right],
  });

  const yScale = scaleLinear({
    domain: [
      Math.min(...data.map((d) => d.price)) - 10,
      Math.max(...data.map((d) => d.price)) + 10,
    ],
    range: [height - margin.bottom, margin.top],
  });

  const bisectDate = bisector<StockDataPoint, Date>((d) => d.date).left;

  const handleMouseMove = (event: React.MouseEvent<SVGRectElement>) => {
    const { x } = localPoint(event) || { x: 0 };
    const x0 = xScale.invert(x);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    const d =
      x0.getTime() - d0.date.getTime() > d1.date.getTime() - x0.getTime()
        ? d1
        : d0;

    showTooltip({
      tooltipData: d,
      tooltipLeft: xScale(d.date),
      tooltipTop: yScale(d.price),
    });
  };

  return (
    <div>
      {isMock && (
        <div
          style={{
            padding: "8px",
            background: "#fff3cd",
            color: "#856404",
            fontSize: "14px",
            marginBottom: "1rem",
            border: "1px solid #ffeeba",
          }}
        >
          ⚠️ Using mock data – check your API key or network connection.
        </div>
      )}

      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={handleRefresh}
          disabled={cooldown > 0 || loading}
          style={{
            padding: "8px 16px",
            fontSize: "14px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: cooldown > 0 || loading ? "not-allowed" : "pointer",
            opacity: cooldown > 0 || loading ? 0.6 : 1,
          }}
        >
          {loading
            ? "Loading..."
            : cooldown > 0
            ? `Cooldown: ${cooldown}s`
            : "Refresh Data"}
        </button>
      </div>

      <svg width={width} height={height}>
        <Group>
          <LinePath
            data={data}
            x={(d) => xScale(d.date)}
            y={(d) => yScale(d.price)}
            stroke="#007bff"
            strokeWidth={2}
          />
          <AxisBottom top={height - margin.bottom} scale={xScale} />
          <AxisLeft left={margin.left} scale={yScale} />
          <rect
            x={margin.left}
            y={margin.top}
            width={width - margin.left - margin.right}
            height={height - margin.top - margin.bottom}
            fill="transparent"
            onMouseMove={handleMouseMove}
            onMouseLeave={hideTooltip}
          />
          {tooltipData && (
            <>
              <line
                x1={tooltipLeft}
                x2={tooltipLeft}
                y1={margin.top}
                y2={height - margin.bottom}
                stroke="gray"
                strokeDasharray="4"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                fill="#007bff"
                stroke="white"
              />
              <foreignObject
                x={tooltipLeft + 10}
                y={tooltipTop - 30}
                width={100}
                height={40}
                pointerEvents="none"
              >
                <div
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    fontSize: "12px",
                    fontFamily: "Arial, sans-serif",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  }}
                >
                  ${tooltipData.price.toFixed(2)}
                </div>
              </foreignObject>
            </>
          )}
        </Group>
      </svg>
    </div>
  );
};
