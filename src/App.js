import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import axios from "axios";
import Expense1 from "./Expense1";
import Expense2 from "./Expense2";
import BalanceExpense1 from "./BalanceExpense1"
import BalanceExpense2 from "./BalanceExpense2"
import AddTransactions from "./AddTransactions";
import BudgetingLinks from "./BudgetingLinks";
import "./App.css";
import BudgetLinks from "./BudgetingLinks";
function App() {
  const [expenses, setExpenses] = useState([]);
  const [previouses, setPreviouses] = useState([]);
  const [links, setLinks] = useState([]);
  console.log(links) 
  useEffect(() => {
    const getExpenses = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Expenses `;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setExpenses(response.data.records);
    };
    const getPrevious = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Previous`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setPreviouses(response.data.records);
    };
    const getLinks = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Links`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setLinks(response.data.records);
    };
    getExpenses();
    getPrevious();
    getLinks();
  }, []);
  return (
    <Route path="/" exact >
    <div>
      <h1 className="money">Money in the bank</h1>
      <div>
        <h1 className="title">Expenses Tracker</h1>
        <div>
            <div className="budgetinglinks">
              {links.map((link) => (
                <a href={links.url}>{links.url}</a>
              
              ))}
            
            <h2 className="currentMonth"> Current Month</h2>
          <h3> <BalanceExpense1 /> </h3>
              <h3 className="currentmonthexpense">
            {expenses.map((expense) => (
              <Expense1 key={expense.id} expense={expense} />
            ))}
            </h3>
            <AddTransactions />
          <br></br>
              <div>
              <h2 className="previousMonth"> Previous Month</h2>
            <h3>{previouses.map((previous) => (
              <Expense2 key={previous.id} previous={previous} />
            ))}
                </h3>
              <AddTransactions />
            
             <Route path="/expense1">
                   <Expense1 />
                </Route>
                <Route path="/expense2">
                  <Expense2 />
                </Route>
                <Route path="/budgetinglinks">
                 <BudgetingLinks />
                </Route>
                <Route path="/addtransactions">
                  <AddTransactions />
                </Route>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Route>
  );
}
export default App;
