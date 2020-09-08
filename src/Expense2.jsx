import React from 'react'
import { userParams } from 'react-router-dom';


const Expense2 = ({ previous }) => {
  

return (
  <div>
    <h2>{previous.fields.spending}</h2>
     <p> {previous.fields.amount}</p>
    
  </div>
)

}


export default Expense2;