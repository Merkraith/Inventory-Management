import React from 'react'

function StockEventsTable(props) {
    const { stockEvents } = props
    return (
        <div className="StockEventTable">
            {stockEvents.map(event => (
                <div>
                    <p>Id: {event.id}</p>
                    <p>Type: {event.type}</p>
                    <p>Quantity: {event.qty}</p>
                    <p>Product Name: {event.product.name}</p>
                </div>
            ))}
        </div>
    )
}

export default StockEventsTable;