# The Wild Oasis Admin

The Wild Oasis is a hotel management dashboard for staff. It provides the operational side of the Wild Oasis product: monitoring bookings, managing cabins and settings, and handling guest check-in and check-out.

## Features

- Dashboard overview with recent bookings, occupancy stats, sales trends, and stay duration analytics
- Booking management with list views, detail pages, filters, sorting, and quick actions
- Guest check-in and check-out flows, including breakfast extras and payment confirmation
- Cabin inventory management for creating, editing, and removing cabin records
- Hotel settings management for business rules and pricing controls
- User authentication and account updates with a protected app experience
- Responsive layout with dark mode

## Relationship to the website

The companion `the-wild-oasis-website` project is the guest-facing booking website. This app is the private staff dashboard. They are separate front ends that use the same Supabase project and data model, so reservations made on the website can be managed here. Neither app imports code from the other or serves as the other's API.

## Tech stack

- React 18 for component-driven UI
- Vite for fast frontend development and builds
- React Router for navigation and protected routes
- React Query for server state management and caching
- Supabase for authentication and database access
- Styled Components for component styling and design system patterns
- React Hook Form, Recharts, date-fns, React Hot Toast, and React Icons

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env.local` from `.env.example` and provide the Supabase URL and key.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Create a production build when needed:

   ```bash
   npm run build
   ```

The app uses Vite environment variables named `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY`. Do not commit local environment files or credentials.
