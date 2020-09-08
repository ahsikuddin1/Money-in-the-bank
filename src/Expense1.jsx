import React from 'react'
import { userParams } from 'react-router-dom';


const Expense1 = ({ expense }) => {
  

return (
  <div>
    <h2> {expense.fields.spending}</h2>
     <p> {expense.fields.amount}</p>
    
  </div>
)

}


export default Expense1;