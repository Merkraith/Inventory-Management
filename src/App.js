import React from 'react';
import './App.css';
import StockEventsTable from './components/StockEventsTable';

// 2 Data Types


// Products
const fetchedProducts = [
  { id: 1, name: "Product M" },
  { id: 2, name: "Product C" }
  
]


// stockEvents

const fetchedStockEvents = [
  { id: 1, type: 'add', qty: 100, product: fetchedProducts[0] }, // type: 'add' || 'remove'
  { id: 2, type: 'remove', qty: -20, product: fetchedProducts[0] }, // type: 'add' || 'remove'
  { id: 3, type: 'add', qty: 10, product: fetchedProducts[0] }, // type: 'add' || 'remove'
  
  { id: 4, type: 'remove', qty: -200, product: fetchedProducts[1] }, // type: 'add' || 'remove'
  { id: 5, type: 'remove', qty: -100, product: fetchedProducts[1] } // type: 'add' || 'remove'

]

// We are going to fetch all of the stock events

// We are going to seperate them by the different products

// We are going to display them



function App() {
  return (
    <div className="App">
      <h1>The Stock App</h1>

      <StockEventsTable
        products={fetchedProducts}
        stockEvents={fetchedStockEvents}
      />

    </div>
  );
}

export default App;
