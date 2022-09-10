import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './config/web3'
import AppContextProvider from './context/AppContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AppContextProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </Web3ReactProvider>
      </AppContextProvider>
    </HashRouter>
  </React.StrictMode>
);