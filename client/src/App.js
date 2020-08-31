import React from 'react'
import { GlobalStyle } from './global/global.styled'
import Router from './router/Router'
import './global/globals.css'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}
