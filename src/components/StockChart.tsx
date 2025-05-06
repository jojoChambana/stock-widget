// src/components/StockChart.tsx
import React, { useEffect, useState } from "react";
import { scaleTime, scaleLinear } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import { Tooltip, useTooltip, defaultStyles } from "@visx/tooltip";
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

  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<StockDataPoint>();

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;
      const SYMBOL = import.meta.env.VITE_STOCK_SYMBOL;

      if (!API_KEY || !SYMBOL) {
        console.warn(
          "Missing environment variables for API_KEY or SYMBOL. Using mock data."
        );
        setIsMock(true);
        const mockData: StockDataPoint[] = Array.from({ length: 30 }).map(
          (_, i) => ({
            date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000),
            price: 100 + Math.sin(i / 2) * 10 + Math.random() * 5,
          })
        );
        setData(mockData);
        return;
      }

      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${SYMBOL}&apikey=${API_KEY}`
        );
        const json = await response.json();

        if (json["Error Message"]) {
          throw new Error(`Alpha Vantage API Error: ${json["Error Message"]}`);
        }

        const raw = json["Time Series (Daily)"];

        if (!raw || typeof raw !== "object") {
          throw new Error(
            "API response missing expected 'Time Series (Daily)' data."
          );
        }

        interface TimeSeriesValues {
          "1. open": string;
          "2. high": string;
          "3. low": string;
          "4. close": string;
          "5. volume": string;
        }

        const parsedData: StockDataPoint[] = Object.entries(
          raw as Record<string, TimeSeriesValues>
        )
          .map(([date, values]) => ({
            date: new Date(date),
            price: parseFloat(values["4. close"]),
          }))
          .sort((a, b) => a.date.getTime() - b.date.getTime());

        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

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
            </>
          )}
        </Group>
        {tooltipData && (
          <Tooltip
            top={tooltipTop - 10}
            left={tooltipLeft + 10}
            style={defaultStyles}
          >
            <div>
              <strong>{tooltipData.date.toDateString()}</strong>
            </div>
            <div>Price: ${tooltipData.price.toFixed(2)}</div>
          </Tooltip>
        )}
      </svg>
    </div>
  );
};
