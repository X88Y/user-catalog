# Deployed version

https://user-catalog-one.vercel.app/

# User Catalog

A simple React + TypeScript app for browsing and searching users from the DummyJSON API.

## Features

- User grid with cards for profile, contact, location, and company info
- Server-side pagination (12 users per page)
- Search on demand (Search button or Enter) with automatic page reset
- Loading skeletons, empty state, and error banner
- Responsive layout with CSS Modules

## Stack

- React 19
- TypeScript
- Vite 5
- ESLint

## Data Source

This project uses [DummyJSON Users API](https://dummyjson.com/users):

- List users: `GET /users?limit=<n>&skip=<n>`
- Search users: `GET /users/search?q=<query>&limit=<n>&skip=<n>`

Only required user fields are requested via the `select` query parameter for leaner responses.

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

- `npm run dev` - run the Vite dev server
- `npm run build` - type-check and create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Project Structure

```text
src/
  api.ts                     # API helpers for fetch and search
  types.ts                   # Shared TypeScript types
  hooks/
    useUsers.ts              # User loading, search, pagination state
  components/
    SearchBar/
    UserCard/
    Pagination/
    SkeletonCard/
  App.tsx
```
