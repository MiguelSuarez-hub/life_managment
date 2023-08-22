"use client";

import { UseGlobalContext } from "@/context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = UseGlobalContext();

  return (
    <li
      key={transaction.id}
      className="p-2 mt-1 flex gap-2 justify-center rounded-md bg-slate-700 items-center text-sm"
    >
      <p className="w-2/5">{transaction.description}</p>
      <span className="w-2/5">
        ${" "}
        {transaction.amount > 0 ? transaction.amount : transaction.amount * -1}
      </span>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
        className="w-1/5 p-1 flex justify-end"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-red-500"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M17 4h5v2h-2v15a1 1 0 01-1 1H5a1 1 0 01-1-1V6H2V4h5V2h10v2zM9 9v8h2V9H9zm4 0v8h2V9h-2z" />
        </svg>
      </button>
    </li>
  );
};

export default TransactionItem;
