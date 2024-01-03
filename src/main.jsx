import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { App } from './App.jsx'

import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  

    <ThemeProvider theme={theme}>
      <GlobalStyles />  

        <AuthProvider>
          
          <App />

        </AuthProvider>
      
    </ThemeProvider>
  </React.StrictMode>
)
