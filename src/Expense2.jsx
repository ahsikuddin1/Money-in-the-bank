import React from 'react'
const Expense2 = ({ previous }) => {
return (
  <div>
    <h2 className='spending2'>{previous.fields.spending}</h2>
     <h3 className='amount2'> {previous.fields.amount}</h3>
    
  </div>
)

}


export default Expense2;