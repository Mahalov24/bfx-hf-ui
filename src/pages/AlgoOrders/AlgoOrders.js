import React from 'react'
import AlgoOrderTable from '../../components/AlgoOrderTable'
import AlgoOrderForm from '../../components/AlgoOrderForm'
import CodeEditor from '../../components/CodeEditor'

const algoOrders = [
  [42, 'bfx-ping_pong', true, null, 'Default'],
  [42, 'bfx-iceberg', true, null, 'Default'],
  [42, 'bfx-twap', true, null, 'Default'],
  [42, 'bfx-accumulate_distribute', true, null, 'Default'],
]

export default class AlgoOrdersView extends React.Component {
  state = {}

  render() {
    const { algoOrders } = this.props

    return (
      <div className='hfui_view__wrapper'>
        <h1>Algo Orders</h1>
        <AlgoOrderTable
          algoOrders={algoOrders}
        />
        {/* <AlgoOrderForm /> */}
      </div>
    )
  }
}
