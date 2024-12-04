# Unexpected Route Matching in React Router v6

This repository demonstrates an unexpected route matching behavior in React Router v6 when using nested routes in conjunction with a wildcard route (`/*`).  The wildcard route incorrectly matches paths that should be handled by nested routes.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to `/about` - this works as expected
5. Navigate to `/about/something` - this unexpectedly matches the `/*` route instead of the `/about` route. 

## Expected Behavior

The `/about/something` route should match the `/about` route and render the content of the `About` component. Instead, it renders the `NotFound` component. The solution should address this issue correctly. 

## Solution

The solution provided in `bugSolution.js` correctly handles the route matching with the use of an `Outlet` component in the parent route to render the nested routes. This addresses the issue while maintaing a clean and logical structure.