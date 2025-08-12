import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="dev-tbez0kqql8pf4j5p.us.auth0.com"
    clientId="RDz7XTF1xaEjeVEgN2su7Npgey5GBrLZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </BrowserRouter>
  </StrictMode>,
)
