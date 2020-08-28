import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../routes/home/Home'

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  )
}
