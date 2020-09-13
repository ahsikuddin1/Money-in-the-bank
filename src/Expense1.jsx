import React from "react";

const Expense1 = ({ expense }) => {
  return (
    <div>
      <h2 className="firstmonthamount"> {expense.fields.spending}</h2>

      <h3 className="firstmonthspending"> ${expense.fields.amount}</h3>
    </div>
  );
};

export default Expense1;
