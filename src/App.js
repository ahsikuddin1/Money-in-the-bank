import React, { useEffect, useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import BalanceExpense1 from "./BalanceExpense1"
import Expense1 from "./Expense1"
import Expense2 from "./Expense2"
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Expenses`;
       const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setExpenses(response.data.records);
    }
    apiCall();

  }, []);
  
  const [previouses, setPreviouses] = useState([])
  useEffect(() => {
    const apiCall = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Previous`;
       const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setPreviouses(response.data.records);
    }
    apiCall();

  }, []);


  return (
    <div className="App">
      <h1>Money in the bank</h1>
      <div >
       
        <h1>Expenses Tracker</h1>
        <h2 className='currenMonth'>Current Month</h2>
        <table>{expenses.map(expense => 
          <Expense1 
          key={expenses.id}
            expense={expense}
          />
          )}
        </table>
        
        
    <br></br>
        <center>
          <table>
       {previouses.map(previous =>
          <Expense2
          key={previouses.id}
          previous={previous}
        /> 
            )}
          </table>
        </center>
        

      </div>
    </div>
  );
}

export default App;
