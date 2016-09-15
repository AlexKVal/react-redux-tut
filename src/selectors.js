import { createSelector, createStructuredSelector } from 'reselect'

let exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', price: 1.20 },
      { name: 'orange', price: 0.95 },
    ]
  }
}

const shopItemsSelector = store => store.shop.items
const taxPercentSelector = store => store.shop.taxPercent

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, item) => acc + item.price, 0)
)

const taxSelector = createSelector(
  [subtotalSelector, taxPercentSelector],
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)

const totalSelector = createSelector(
  [subtotalSelector, taxSelector],
  (subtotal, tax) => subtotal + tax
)

const structuredSelector = createStructuredSelector({
  subtotal: subtotalSelector,
  tax: taxSelector,
  total: totalSelector,
})

console.log('subtotal', subtotalSelector(exampleState));
console.log('tax', taxSelector(exampleState));
console.log('total', totalSelector(exampleState));

console.log('\nstructured', structuredSelector(exampleState));
