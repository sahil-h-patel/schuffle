import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { CalendarViewProvider } from '@context/CalendarViewContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css'
import App from './App.tsx'

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <CalendarViewProvider>
        <GoogleOAuthProvider clientId='693062243657-dhoc77b4ttc10ufc2c1737nd5sr3rord.apps.googleusercontent.com'>
          <App/>   
        </GoogleOAuthProvider>
      </CalendarViewProvider>
    </BrowserRouter>
  </StrictMode>,
)
