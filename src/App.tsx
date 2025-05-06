import React from "react";
import { StockChart } from "./components/StockChart";

const App: React.FC = () => {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: "1rem" }}>📈 Stock Price Chart</h1>
      <StockChart />
    </main>
  );
};

export default App;
