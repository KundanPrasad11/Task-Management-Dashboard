# Task Management Dashboard

<p align="right"><a href="https://task-management-dashboard-sigma-five.vercel.app/">Live Demo</a></p>

A simple task management dashboard built with React, Vite, Tailwind CSS, and Redux Toolkit.

## Features

- View active and completed tasks
- Add new tasks with title, description, status, and due date
- Edit task details
- Delete tasks with confirmation
- Filter and sort tasks by status, search term, and due date
- Responsive layout for desktop and mobile

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- React Icons
- ESLint

## Project Structure

- `src/`
  - `pages/` — page components for active and completed task views
  - `components/` — reusable UI components and layout pieces
  - `features/task/` — Redux slice for task state management
  - `store/` — Redux store configuration
  - `assets/` — images and static assets

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deployment

This project can be deployed to Vercel, GitHub Pages, or any static host that serves the generated `dist/` folder.

For Vercel, use the project root containing `package.json` and `src/` as the root directory. The output directory is `dist`.

If you deploy as a single-page application, ensure client-side routing works by rewriting all paths to `index.html`.

## Notes

- The app uses client-side routing with `BrowserRouter`, so direct navigation to routes like `/completed` requires a server rewrite or SPA fallback on the host.
- The Redux slice stores tasks using `createdAt` timestamps as stable IDs for update/delete operations.
