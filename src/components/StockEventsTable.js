import React from 'react'

function StockEventsTable(props) {
    const { products, stockEvents } = props

    return (
        <div className="StockEventTable">
            {products.map(product => {
                const { id } = product

                const releventStockEvents = stockEvents.filter(se => se.product.id === product.id)
                return (
                    <div className="StockEventTable__ProductsContainer">
                        <h2>Product: {product.name}</h2>
                        {releventStockEvents.map(event => (
                            <div className="StockEventTable__Card">
                                <p>Id: {event.id}</p>
                                <p>Type: {event.type}</p>
                                <p>Quantity: {event.qty}</p>
                                <p>Product Name: {event.product.name}</p>
                            </div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default StockEventsTable;