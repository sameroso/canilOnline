import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../routes/home/Home'
import Detail from '../routes/detail/Detail'

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/detalhe/:id" component={Detail} />
    </BrowserRouter>
  )
}
