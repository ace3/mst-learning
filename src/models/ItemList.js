import Item from './Item'
import { types } from 'mobx-state-tree'

const ItemList = types
  .model('ItemList', {
    items: types.array(Item),
  })
  .actions((self) => ({
    add(item) {
      self.items.push(item)
    },
    remove(item) {
      self.items.splice(self.items.indexOf(item), 1)
    },
  }))
  .views((self) => ({
    total() {
      return this.items.reduce((sum, item) => sum + item.total(), 0)
    },
  }))

export default ItemList
