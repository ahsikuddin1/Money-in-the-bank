import React from "react";
const BudgetLinks = ({ link }) => {
  return (
    <div>
      <a href={link.fields.url}> {link.fields.name} </a>
    </div>
  );
};

export default BudgetLinks;
