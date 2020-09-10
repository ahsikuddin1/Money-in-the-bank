import React from 'react'




const BudgetLinks = ({ link }) => {
 

return (
  <div>
    <h2> {link.fields.name} </h2>
     <p> {link.fields.url}</p>
    
  </div>
)

}


export default BudgetLinks;