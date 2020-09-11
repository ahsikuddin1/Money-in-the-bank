import React from "react";

export default function BalanceExpense1({ expenses }) {
  console.log(expenses);
  const balance = 10000;
  
  
  const amounts = expenses.map((expense) => {
    return expense !== undefined ? expense.fields.amount : 0;
  });
  console.log(amounts);
  const sum = amounts.reduce((acc, curr) => acc + curr, 0);
  const transaction = balance - sum
  return (
    <div className='balance1'>
      <h5>{`Starting Balance: $${balance}`}</h5>
      <h5>{`Expenses: $${sum}`}</h5>
      <h5>{`Current Balance: $${transaction}`}</h5>

    </div>
  );
}
