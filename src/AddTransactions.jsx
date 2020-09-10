import React, { useState } from "react";
import axios from "axios";
import Expense2 from "./Expense2";

const AddTransaction = () => {
  const [spending, setSpending] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const airtableExpenses = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Expenses`
    const airtablePrevious = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Previous`
   
    const fields = {
      spending,
      amount
    };
    console.log({fields})
      setTransactions((transactions) => [...transactions, { fields }]);
    
    await axios.post(airtableExpenses, { fields },
      {
        headers: { 
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          'Content-Type': 'application/json',
        },
      });
    
     await axios.post( airtablePrevious, { fields },
      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          'Content-Type': 'application/json',
        },
      });
  };
  
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        {/* <div> */}
          <label htmlFor="spending">Transaction name</label>
          <input
            type="text"
            value={spending}
            onChange={(e) => setSpending(e.target.value)}
          />
        {/* </div> */}
        {/* <div> */}
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            name='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {/* <ul id="transaction-list"> */}
            {/* {transactions.map((transaction, index) => ( */}
              {/* <div key={index}>
                <li> {transaction.newTransaction.text}</li>
                <li> {transaction.newTransaction.amount}</li>
              </div>
            ))} */}
          {/* </ul> */}
        {/* </div> */}
        <button type="submit" className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
