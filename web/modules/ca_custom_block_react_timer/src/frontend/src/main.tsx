import React from 'react'
import ReactDOM from 'react-dom/client'
import Timer from "./Timer";
import './index.css'


ReactDOM.createRoot(document.getElementById('ca-react-timer') as HTMLElement).render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>,
)
