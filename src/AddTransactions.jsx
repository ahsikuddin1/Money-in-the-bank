import React, { useState } from 'react'
import Expense1 from './Expense1'
import Expense2 from './Expense2'

const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState([])


  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      // id: Math.floor(Math.random() * 1000),
      text,
      amount: +amount

      
    }
   
    
    setTransactions(transactions => [...transactions, newTransaction])
    
  }
  return (
      <div>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="text">Transaction name</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div>
            <label htmlFor="amount"
            >Amount <br />
            </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <ul id="transaction-list">
            {transactions.map((transaction) => (
              <li>{transaction.id} </li>
            ))}
          </ul> 
          </div>
          <button className="btn">Add transaction</button>
        </form>
     </div>
    )
  
}

export default AddTransaction;