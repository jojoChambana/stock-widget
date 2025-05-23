---
title: StockChart Widget Documentation
description: Interactive stock chart built with React, TypeScript, and Visx
---

[![Deploy to GitHub Pages](https://github.com/jojoChambana/stock-widget/actions/workflows/deploy.yml/badge.svg)](https://github.com/jojoChambana/stock-widget/actions/workflows/deploy.yml)
[![View Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=flat-square&logo=github)](https://jojoChambana.github.io/stock-widget/)

# 📈 StockChart Component

The `StockChart` component renders a line chart of daily stock prices. It uses real-time data from the [Alpha Vantage API](https://www.alphavantage.co/) and shows a tooltip with crosshairs when you hover over the chart.

## 🚀 Features

- Line chart of daily closing stock prices
- Hover tooltips with date + price
- Responsive SVG with crosshair lines
- Alpha Vantage API integration
- Written in TypeScript using React + Visx
- Supports use as both an iframe embed and React component

## 🧪 Example Usage

```tsx
import { StockChart } from "./components/StockChart";

function App() {
  return (
    <div>
      <h1>Stock Chart</h1>
      <StockChart />
    </div>
  );
}
```

## ⚙️ Project Setup

You need to use **Vite** with a **React + TypeScript** template.

```bash
npm create vite@latest stock-widget --template react-ts
cd stock-widget
npm install
npm install --save @visx/visx --legacy-peer-deps
```

> If you prefer more control, you can also install individual Visx modules:
>
> ```bash
> npm install @visx/scale @visx/shape @visx/tooltip @visx/axis @visx/group @visx/event d3-array
> ```

## 🔐 Environment Variables

Create a `.env.local` file at the root of your project:

```env
VITE_ALPHA_VANTAGE_KEY=your_api_key_here
VITE_STOCK_SYMBOL=AAPL
```

These values are injected into your app using Vite's `import.meta.env` API:

```ts
const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;
const SYMBOL = import.meta.env.VITE_STOCK_SYMBOL;
```

## 🧾 Type Definitions

```ts
interface StockDataPoint {
  date: Date;
  price: number;
}

interface TimeSeriesValues {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}
```

## 👨‍💻 Technologies

- React 19 (or React 18)
- Vite (lightning-fast dev/build)
- Visx for chart rendering
- TypeScript for type safety
- Alpha Vantage for stock data

---

## 🌐 Dual Usage Options

This project supports both embedding via `<iframe>` **and** importing as a React component. Choose the mode that best fits your application.

### 1️⃣ Embed via `<iframe>`

You can use the hosted GitHub Pages version anywhere:

```html
<iframe
  src="https://jojochambana.github.io/stock-widget/"
  width="820"
  height="420"
  style="border: none;"
  title="Stock Widget"
></iframe>
```

> ✅ Best for: static sites, CMS embeds, or quick integrations

---

### 2️⃣ Import as a React Component

Install locally via Git or npm:

```bash
npm install jojoChambana/stock-widget
```

Then use it in your app:

```tsx
import { StockChart } from "stock-widget";

function App() {
  return <StockChart />;
}
```

> ✅ Best for: full React apps, design systems, or dashboards

---

### 📦 Exports

This package includes:

- `main`: UMD build (`stock-widget.umd.js`) for `<script>` usage
- `module`: ESM build (`stock-widget.es.js`) for modern bundlers
- `types`: TypeScript declarations (`index.d.ts`)

---

Fork this project, add your own API key in `.env.local`, and run `npm run dev` to get started.
`
