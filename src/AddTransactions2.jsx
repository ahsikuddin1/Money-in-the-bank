import React, { useState } from "react";
import axios from "axios";


const AddTransaction = (props) => {
  const [spending, setSpending] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const airtablePrevious = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Previous`
   
    const fields = {
      spending,
      amount
    };
    
   
    setTransactions((transactions) => [...transactions, { fields }]);
    console.log(typeof amount)
    
    
     await axios.post( airtablePrevious, { fields  },
      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          'Content-Type': 'application/json',
        },
       });
    
    props.setFetch((prevFetch) => !prevFetch);
    setSpending("")
    setAmount("")
    
    
  };

  
  return (
    <div>
      <h3 className='newTransaction'>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
         <div className='transactions'> 
          <label htmlFor="spending">Transaction name</label>
          <input
            type="text"
            value={spending}
            onChange={(e) => setSpending(e.target.value)}
          />
         </div> 
         <div className='amounts'> 
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            name='amount'
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          /> <h4>Newest transaction</h4>
            <ul id="transaction-list"> 
            {transactions.map((transaction, index) => ( 
              <div key={index}>
                {transaction.fields.spending}
                 <br></br>
                {transaction.fields.amount}
              </div>
             ))}  
           </ul>   
        </div> 
        <button type="submit" className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;