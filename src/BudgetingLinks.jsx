import React from 'react'




const BudgetLinks = ({ link }) => {
 

return (
  <div>
    
     <a href = {link.fields.url}> <h2> {link.fields.name} </h2> </a>
    
  </div>
)

}


export default BudgetLinks;