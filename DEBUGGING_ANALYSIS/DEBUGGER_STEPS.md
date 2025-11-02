# Debugging Analysis

## Breakpoint 1 — Create API URL

- Before: User types address and clicks search.
- After: Program stops at `encodeURI(apiUrl)`.
- URL builds correctly and includes user input.

---

## Breakpoint 2 — Fetch and Parse Data

- Before: API request sent, waiting for response.
- After: `data` shows as an array with permit info.
- Async fetch and JSON parsing work fine.

---

## Breakpoint 3 — Display Results

- Before: No data shown on page yet.
- After: First, second, and third results appear one by one.
- Loop and DOM update both work.

---

## Critical State

- Key: Breakpoint 2.
- Confirms data is received correctly before showing results on screen.
