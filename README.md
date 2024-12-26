# Next.js 15 Runtime Error: Unexpected token u in JSON at position 0

This repository demonstrates a runtime error in Next.js 15 that occurs when accessing local storage data in a page component before the data is available.  The error, "Unexpected token u in JSON at position 0," arises because the `JSON.parse()` function attempts to parse an undefined or null value.

## Problem

The `about.js` component attempts to immediately parse data from `window.localStorage.getItem('user')` on mount. If the user navigates directly to the `/about` route without first visiting the `/` route (which might set the data),  `localStorage.getItem('user')` returns `null`, causing the parsing error.

## Solution

The `aboutSolution.js` component provides a solution by checking if the localStorage data exists before attempting to parse it, using optional chaining (?.) and nullish coalescing (??).
