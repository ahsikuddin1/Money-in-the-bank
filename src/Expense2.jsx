import React from 'react'


const Expense2 = ({ previous }) => {
  

return (
  <div>
    <h2 class='spending2'>{previous.fields.spending}</h2>
     <p class='amount2'> {previous.fields.amount}</p>
    
  </div>
)

}


export default Expense2;