import React from 'react'

class StockDetail extends React.Component {

    render() {
        const { name, total, stockEvents } = this.props
        return (
            <div className="StockDetail">
                <h2>Product: {name} | Total: {total} </h2>
                {stockEvents.map(event => (
                    <div className="StockEventTable__Card">
                        <p>Id: {event.id}</p>
                        <p>Type: {event.type}</p>
                        <p>Quantity: {event.qty}</p>
                        <p>Product Name: {event.product.name}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default StockDetail