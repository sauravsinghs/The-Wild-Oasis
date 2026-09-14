# The Wild Oasis

The Wild Oasis is a modern hotel management dashboard for boutique hospitality businesses. It gives staff a single place to manage bookings, check guests in and out, monitor daily activity, update cabin information, and keep hotel settings in sync.

The app is designed to feel like a real-world operational admin tool: fast, structured, and focused on day-to-day hotel workflows.

## What the app does

- Dashboard overview with recent bookings, occupancy stats, sales trends, and stay duration analytics
- Booking management with list views, detail pages, filters, sorting, and quick actions
- Guest check-in and check-out flows, including breakfast extras and payment confirmation
- Cabin inventory management for creating, editing, and removing cabin records
- Hotel settings management for business rules and pricing controls
- User authentication and account updates with a protected app experience
- Dark mode support and responsive, polished admin UI

## How it works

The app is built as a React front-end with a protected routing structure:

- Users log in with Supabase authentication before accessing the dashboard
- Protected routes guard the main hotel management screens
- React Query handles fetching, caching, and mutation state for bookings, cabins, settings, and user data
- Supabase provides the backend database and authentication layer for live app data
- Styled Components deliver the custom design system and layout styling
- Toast notifications and forms keep the interface responsive and user-friendly

The app is organized around real hotel operations:

- Dashboard for business monitoring
- Bookings screen for full reservation lifecycle management
- Cabins screen for inventory and sales configuration
- Settings screen for hotel operational values
- Account screen for updating profile details and password
- Users section for staff/admin management

## Tech stack

- React 18 for component-driven UI
- Vite for fast frontend development and builds
- React Router for navigation and protected routes
- React Query for server state management and caching
- Supabase for authentication and database access
- Styled Components for component styling and design system patterns
- React Hook Form for form handling and validation
- Recharts for dashboard visualizations
- date-fns for date manipulation and formatting
- React Hot Toast for notifications
- React Icons for iconography

## Project structure

- src/pages — main application screens
- src/features — domain-specific feature logic and UI
- src/ui — shared design system components and layouts
- src/services — API integrations and Supabase calls
- src/context — global app context such as dark mode
- src/styles — global styling and theme values

## Getting started

1. Install dependencies:

   npm install

2. Run the development server:

   npm run dev

3. Build for production:

   npm run build

## Production build

The project uses Vite and can be deployed as a static React app. It is configured for a front-end app backed by Supabase data and auth.

## About this repo

This repository is a complete hotel management admin app for a small luxury resort brand. It demonstrates production-style React patterns, real-world data flows, and a polished dashboard experience for managing day-to-day operations in hospitality.
