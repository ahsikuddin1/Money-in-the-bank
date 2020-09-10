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
function App() {
  const [expenses, setExpenses] = useState([]);
  const [previouses, setPreviouses] = useState([]);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const getExpenses = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Expenses`;
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
            
            
            <h2 className="currentMonth"> Current Month</h2>
          <p className="currentmonthexpense">
            {expenses.map((expense) => (
              <Expense1 key={expenses.id} expense={expense} />
            ))}
            </p>
            <AddTransactions />
            {/* {transaction.map((transaction) => (<div>transaction.id</div>))} */}
          <br></br>
          <div className="previousMonth">
            {previouses.map((previous) => (
              <Expense2 key={previouses.id} previous={previous} />
            ))}
              <AddTransactions />
            <div className="budgetinglinks">
              {links.map((link) => (
                <BudgetingLinks key={links.id} link={link} />
              ))}
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
