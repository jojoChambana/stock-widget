// src/App.tsx
import { StockChart } from "./components/StockChart";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        background: "#f9f9f9",
      }}
    >
      <StockChart />
    </div>
  );
}
