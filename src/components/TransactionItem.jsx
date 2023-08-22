"use client";

import { UseGlobalContext } from "@/context/GlobalState";

const TransactionItem = ({transaction}) => {
  const { deleteTransaction } = UseGlobalContext();

  return (
    <li key={transaction.id} className="p-2 mt-1 flex gap-2 justify-center rounded-md bg-slate-700 items-center text-sm">
      <p className="w-2/5">{transaction.description}</p>
      <span className="w-2/5">$ {transaction.amount > 0 ? transaction.amount : transaction.amount * -1}</span>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
        className="w-1/5"
      >
        X
      </button>
    </li>
  );
}

export default TransactionItem;