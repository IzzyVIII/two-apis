// 1. Wire up your input (button, select, ...) with addEventListener
// 2. In the handler:
//    - show a 'loading' message in #status
//    - fetch API #1
//    - take something from the response and use it to fetch API #2
//    - render the combined result into #result
//    - clear #status when done
// 3. Wrap the fetches in try/catch and show an error message in #status if either fails

const statusEl = document.querySelector("#status");
const resultEl = document.querySelector("#result");
const actionEl = document.querySelector("#action");
