import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Expense1 from "./Expense1";
import Expense2 from "./Expense2";
import BalanceExpense1 from "./BalanceExpense1.jsx";
import BalanceExpense2 from "./BalanceExpense2";
import AddTransactions from "./AddTransactions";
import AddTransactions2 from "./AddTransactions";
import BudgetingLinks from "./BudgetingLinks";
import "./App.css";
// import "./AddTransactions.css";
// import "./BalanceExpense1.css";
// import "./Expense1.css"
function App() {
  const [expenses, setExpenses] = useState([]);
  const [previouses, setPreviouses] = useState([]);
  const [links, setLinks] = useState([]);
  const [fetch, setFetch] = useState(false)
  console.log(links);
  useEffect(() => {
    const getExpenses = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Expenses `;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setExpenses(response.data.records);
      console.log(response.data.records);
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
  }, [fetch]);
  return (
    <div>
      <div>
        <h1 className="money">Money in the bank</h1>
        
       
         
        <nav>  
          <Link to="/budgetinglinks"> <h3 className="budgetinglinks" > Budget Tips </h3> </Link>
        
        </nav>
        
        
        <Route exact path="/budgetinglinks">
        <p>These are some great resources for budgeting tips. </p>
          {links.map((link) => ( 
          <BudgetingLinks key={link.id} link={link} /> 
          ))} 
          
        </Route>
        <Route exact path = "/">
            <div>
           <h2 className="currentMonth">Current Month</h2>
            {" "}
                <BalanceExpense1
                  expenses={expenses} />{" "}
           
            <h3 className="currentmonthexpense">
              {expenses.map((expense) => (
                <Expense1 key={expense.id} expense={expense} />
              ))}
            </h3>
            <AddTransactions 
              setFetch={setFetch}
              fetch={fetch}
            /> 
          </div>
          <br></br>
          
          <div>
            <h2 className="previousMonth">Previous Month</h2>
            <h3>
              {" "}
              <BalanceExpense2 previouses={previouses} />{" "}
            </h3>
            <h3>
              {previouses.map((previous) => (
                <Expense2 key={previous.id} previous={previous} />
              ))}
            </h3>
            <AddTransactions2
              setFetch={setFetch}
              fetch={fetch}
            />
          </div>   
        </Route>   
        
          {/* <Route exact path="/balanceexpense1">
                  <BalanceExpense1 />
                </Route>
                <Route exact path="/expense1">
                  <Expense1 />
                </Route>
                <Route exact path="/balanceexpense2">
                  <BalanceExpense2 />
                </Route>
                <Route exact path="/expense2">
                  <Expense2 />
                </Route>
                <Route exact path="/addtransactions">
                  <AddTransactions />
          </Route>   */}
      </div>
    </div>
      
  );
}
export default App;
