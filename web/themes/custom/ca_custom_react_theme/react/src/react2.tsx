import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from "./components/counter";

ReactDOM.createRoot(document.getElementById('react-app-2') as HTMLElement).render(
  <React.StrictMode>
    <Counter incrementBy={2} />
  </React.StrictMode>,
)
