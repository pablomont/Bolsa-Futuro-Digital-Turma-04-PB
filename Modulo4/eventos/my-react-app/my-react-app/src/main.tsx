import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToolBar from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToolBar />
  </StrictMode>,
)
