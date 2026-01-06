# Sales Analytics Dashboard

A modern sales analytics dashboard built with Next.js 15, TypeScript, Tailwind CSS, and Recharts. Visualize yearly sales data (2022-2024) with interactive charts and custom filtering capabilities.

## Features

- 📊 **Interactive Charts**: Toggle between Bar, Line, and Pie chart visualizations
- 🔍 **Custom Filtering**: Filter sales data by custom threshold values
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- ⚡ **Built with Next.js 15**: Leveraging the latest React and Next.js features
- 🎯 **Component Architecture**: Organized with functional component structure (ui/features/layouts)

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Charts**: Recharts 2.10.0
- **Package Manager**: npm

## Project Structure

```
basic_website/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Dashboard page (main feature)
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Landing/home page
│   │   └── globals.css            # Global styles
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Card.tsx
│   │   ├── features/              # Feature-specific components
│   │   │   ├── SalesChart.tsx
│   │   │   ├── ChartTypeToggle.tsx
│   │   │   └── SalesFilterInput.tsx
│   │   └── layouts/               # Layout components
│   │       └── DashboardLayout.tsx
│   ├── data/
│   │   └── salesData.ts           # Mock sales data
│   └── types/
│       └── index.ts               # TypeScript type definitions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <your-github-repo-url>
   cd basic_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## How to Use

1. **Home Page**: Start at the landing page and click "View Dashboard"
2. **Dashboard**: View sales data visualized in chart form
3. **Chart Types**: Click the chart type buttons (Bar/Line/Pie) to switch visualizations
4. **Filtering**: Enter a sales threshold (e.g., 500000) to filter years above that value
5. **Data**: Currently displays mock sales data for 2022 ($450k), 2023 ($620k), and 2024 ($780k)

## Component Architecture

This project follows a functional component organization pattern:

- **UI Components** (`src/components/ui/`): Reusable, generic components (Button, Input, Card)
- **Feature Components** (`src/components/features/`): Dashboard-specific components (Charts, Filters)
- **Layout Components** (`src/components/layouts/`): Page layout wrappers

This structure promotes:
- Code reusability
- Easy maintenance
- Clear separation of concerns
- Scalability for future features

## Data Source

The current implementation uses mock sales data (`src/data/salesData.ts`). The data structure is simple and extensible:

```typescript
interface SalesData {
  year: number;
  totalSales: number;
}
```

### Future Enhancements

- **API Integration**: Replace mock data with real API calls
- **More Data Points**: Add monthly or quarterly breakdowns
- **Additional Metrics**: Include profit margins, growth rates, etc.
- **Export Features**: Download charts as images or data as CSV
- **Date Range Filtering**: Select custom date ranges

## What Was Built

### Core Features Implemented:
1. ✅ Next.js 15+ project setup with TypeScript and Tailwind CSS
2. ✅ Dashboard page at `/dashboard` route
3. ✅ Interactive chart component with Recharts library
4. ✅ Three chart types: Bar, Line, and Pie
5. ✅ Custom sales threshold filter input
6. ✅ Component-based architecture (ui/features/layouts)
7. ✅ Mock sales data for 2022-2024
8. ✅ Responsive design for all screen sizes
9. ✅ Clean landing page with navigation
10. ✅ Comprehensive README documentation

### Technical Decisions:
- **Recharts over Chart.js**: Better React integration and TypeScript support
- **Functional component structure**: More practical than strict atomic design for this scale
- **Client components**: Used 'use client' for interactive dashboard components
- **Simple data structure**: Yearly totals only for clarity
- **Filter behavior**: Shows only years meeting threshold (hides non-matching data)

## Contributing

Feel free to submit issues or pull requests for improvements.

## License

MIT
