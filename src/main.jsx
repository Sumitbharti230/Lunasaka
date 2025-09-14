import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './Components/Context/CartProvider.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <CartProvider>

      <Auth0Provider
        domain="dev-vz6mvnrxs3yg0xyl.us.auth0.com"
        clientId="Beji1C6OFZjUeoSVclszle6uwlp9Fumq"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>,


    </CartProvider>
  </BrowserRouter>,
)
