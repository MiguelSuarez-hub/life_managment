"use client";

import { UseGlobalContext } from "@/context/GlobalState";

const TransactionList = () => {
  const { transactions, deleteTransaction } = UseGlobalContext();
  return (
    <div>
      <ul>
        {transactions.map((transaction) => {
          return (
            <li key={transaction.id} className="flex gap-2">
              <p>{transaction.description}</p>
              <span>{transaction.amount}</span>
              <button onClick={()=>{deleteTransaction(transaction.id)}}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
