import React from "react";
const Expense2 = ({ previous }) => {
  return (
    <div>
      <h2 className="secondmonthamount">{previous.fields.spending}</h2>
      <h3 className="secondmonthspending"> ${previous.fields.amount}</h3>
    </div>
  );
};

export default Expense2;
