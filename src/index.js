import './index.css'

import App from './components/App'
import Invoice from './models/Invoice'
import React from 'react'
import ReactDOM from 'react-dom'
import makeInspectable from 'mobx-devtools-mst'
import { onPatch } from 'mobx-state-tree'
import reportWebVitals from './reportWebVitals'

const invoice = Invoice.create({ currency: 'CAD' })
onPatch(invoice, (patch) => {
  console.log(patch)
})
makeInspectable(invoice)
ReactDOM.render(
  <React.StrictMode>
    <App invoice={invoice} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
