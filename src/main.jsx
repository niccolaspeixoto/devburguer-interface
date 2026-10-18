import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles.js'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks/index.jsx'
import { Elements } from '@stripe/react-stripe-js'
import stripePromisse from './config/stripeConfig.js'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/themes/standard.js'
import { Router } from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromisse}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={1700} theme='dark' />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
