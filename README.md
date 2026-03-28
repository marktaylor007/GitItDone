# GitItDone

**GitItDone** is a rudimentary task-management application built with React 19 and Express.js demonstrating various React development techniques.

## Architecture Overview

**GitItDone** uses a modular architecture that cleanly separates UI components, shared services, and server‑side rendering concerns. The client-side application is built using standard React tooling, while the SSR layer is compiled with a dedicated Webpack configuration that outputs a Node‑compatible bundle used to render and hydrate the app on first load.

## Tech Stack

- [x] React 19
- [x] Express.js
- [x] Webpack 5
- [x] React Router
- [x] Node.js
- [x] Custom DI container
- [x] SSR hydration pipeline

## Features

- [x] State Management
- [x] Dependency Injection
- [x] Server-Side Rendering
- [x] HTTP Services
- [x] Fetch API
- [x] React Hooks (useCallback, useContext, useEffect, useRef, useState, useMemo)
- [x] Custom Hooks
- [x] React Router
- [x] Rendering Optimization (Memoization)
- [x] Code-Splitting
- [x] React Suspense & Lazy
- [x] Server-Rendered Hydration

\*\*\*The SSR build uses a custom Webpack configuration to generate a Node-compatible bundle.

## Available Scripts - Client-Side Rendering

### `npm run startapiserver`

Runs an Express server (on port 3001) exposing HTTP services consumed by the **GitItDone** frontend.

### `npm run start`

Runs **GitItDone** (client-side rendering) in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds **GitItDone** for production in the `build` folder.

The build is optimized for the best performance and is minified.

## Available Scripts - Server-Side Rendering

### `npm run startapiserver`

Runs an Express server (on port 3001) exposing HTTP services consumed by the **GitItDone** frontend.

### `npm run buildssr`

Builds the server-side rendering bundle in the `dist` folder.

### `npm run startssrserver`

Starts a server-side rendering server on port 3002 running the **GitItDone** SSR bundle.\
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

## Screenshots
