import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RestaurantesView from './views/RestaurantesView'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RestaurantesView />
  </StrictMode>,
)
