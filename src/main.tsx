import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '../src/assets/css/_overwrite.css';
import { StyleProvider } from '@ant-design/cssinjs';
if (!import.meta.env.DEV) {
  console.log = () => {};
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <StyleProvider hashPriority="high">
      <App />
    </StyleProvider>
  // </React.StrictMode>,
)
