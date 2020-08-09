import * as React from 'react'
import { PriceWidget, PriceOption } from './PriceWidget'

const doSomething = (result: PriceOption) => {
  alert(JSON.stringify(result))
}

const TestApp = () => (
  <PriceWidget
    onWidgetSubmit={doSomething}
    prices={[
      { value: '5000000000000000 г', price: '500 грн' },
      { value: '300000000000 г', price: '350 грн' },
      { value: '200 г', price: '290 грн' },
      { value: '100 г', price: '220 грн' },
    ]} />
)

export default TestApp
