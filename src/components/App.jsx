import './App.css'

import Item from '../components/Item'
import { observer } from 'mobx-react'
import { useRef } from 'react'

function App(props) {
  let nameInput = useRef()
  let quantityInput = useRef()
  let priceInput = useRef()

  const { invoice } = props
  return (
    <div className="App">
      <h1>{invoice.status()}</h1>
      {!invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button>}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          // console.log(nameInput.current.value)
          invoice.itemList.add({
            name: nameInput.current.value,
            quantity: parseInt(quantityInput.current.value),
            price: parseFloat(priceInput.current.value),
          })
          e.target.reset()
          nameInput.current.focus()
        }}
      >
        <label htmlFor="name">
          Name
          <input type="text" ref={nameInput} id="quantity" />
        </label>
        <label htmlFor="quantity">
          Quantity
          <input type="number" ref={quantityInput} id="name" />
        </label>
        <label htmlFor="price">
          Price
          <input type="number" ref={priceInput} id="price" />
        </label>
        <button type="submit">Add</button>
      </form>

      <h2>Total: ${invoice.itemList.total().toFixed(2)}</h2>
      <ul>
        {invoice.itemList.items.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </ul>
    </div>
  )
}

export default observer(App)
