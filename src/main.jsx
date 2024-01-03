import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { App } from './App.jsx'

import { MyContext } from './myContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  

    <ThemeProvider theme={theme}>
      <GlobalStyles />    
      <MyContext.Provider value={{ email: 'nikolas@gmail.com'}}>        
        <App />
      </MyContext.Provider>  
    </ThemeProvider>
  </React.StrictMode>
)
