import React from 'react'

import { PetInfoContextProvider } from './context/petInfo'
import Header from './components/Header'
import { GlobalStyle } from './global/global.styled'
import Router from './router/Router'
import './global/globals.css'

export default function App() {
  return (
    <>
      <PetInfoContextProvider>
        <Header />
        <GlobalStyle />
        <Router />
      </PetInfoContextProvider>
    </>
  )
}
