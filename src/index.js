import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'

import GlobalStyles from 'Darkpanda/styles/global'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement) 

root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
)