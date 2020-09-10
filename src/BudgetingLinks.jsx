import React from 'react'




const BudgetLinks = ({ link }) => {
 

return (
  <div>
    <h2> {link.fields.name} </h2>
     <h3> {link.fields.url}</h3>
    
  </div>
)

}


export default BudgetLinks;