import React, { useEffect, useState } from 'react';
import axios from "axios";
import Expense1 from "./Expense1"
import Expense2 from "./Expense2"
import './App.css';
import UserTransaction from './AddTransactions';
import BudgetLinks from './BudgetingLinks';


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

  const [links, setLinks] = useState([])
  useEffect(() => {
    const apiCall = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Links`;
       const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setLinks(response.data.records);
    }
    apiCall();

  }, []);

  return (
    <div>
      <h1 className='money'>Money in the bank</h1>
      <div >
       
        <h1 className='title'>Expenses Tracker</h1>
        <div >
        <h2 className='currentMonth' >Current Month</h2>
         <p className='currentmonthexpense' >{expenses.map(expense => 
          <Expense1 
          key={expenses.id}
            expense={expense}
          />
          )}
         </p>
       
        
        
    <br></br>
        <div className='previousMonth'>
       {previouses.map(previous =>
          <Expense2
          key={previouses.id}
          previous={previous}
        /> 
            )}

<div className='budgetinglinks'>
       {links.map(link =>
          <BudgetLinks
          key={links.id}
          link={link}
        /> 
            )}


        <UserTransaction />
</div>
      </div>
      </div>
      </div>
      </div>
  );
}

export default App;
