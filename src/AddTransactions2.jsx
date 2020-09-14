import React, { useState } from "react";
import axios from "axios";

const AddTransaction2 = (props) => {
  const [spending2, setSpending2] = useState("");
  const [amount2, setAmount2] = useState(0);
  const [transactions2, setTransactions2] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const airtablePrevious = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Previous`;

    const fields2 = {
      spending2,
      amount2,
    };

    setTransactions2((transactions2) => [...transactions2, { fields2 }]);
    console.log(typeof amount);

    await axios.post(
      airtablePrevious,
      { fields2 },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    props.setFetch((prevFetch) => !prevFetch);
    setSpending2("");
    setAmount2("");
  };

  return (
    <div>
      <h3 className="newtransaction">Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="transactions">
          <label htmlFor="spending">Transaction name</label>
          <input
            type="text"
            value={spending}
            onChange={(e) => setSpending(e.target.value)}
          />
        </div>
        <div className="amounts">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount2(parseInt(e.target.value))}
          />{" "}
          <h4>Newest transaction</h4>
          <ul className="transactionlist">
            {transactions2.map((transaction, index) => (
              <div key={index}>
                {transaction.fields.spending}
                <br></br>
                {transaction.fields.amount}
              </div>
            ))}
          </ul>
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction2;
