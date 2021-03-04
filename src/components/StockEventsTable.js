import React from 'react'
import StockDetail from './StockDetail'

function StockEventsTable(props) {
    const { products, stockEvents } = props

    return (
        <div className="StockEventTable">
            {products.map(product => {
                const {id} = product

                const releventStockEvents = stockEvents.filter(se => se.product.id === product.id)

                const stockTotal = releventStockEvents.reduce((accumalator, currentElement) => {
                    return accumalator + currentElement.qty
                }, 0)

                return (
                    <div className="StockEventTable__ProductsContainer">
                        <StockDetail
                            name={product.name}
                            total={stockTotal}
                            stockEvents={releventStockEvents}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default StockEventsTable;