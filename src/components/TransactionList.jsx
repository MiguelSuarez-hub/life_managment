"use client";

import { UseGlobalContext } from "@/context/GlobalState";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions, deleteTransaction } = UseGlobalContext();

  const incomeTransactions = transactions.filter(
    (transaction) => transaction.amount > 0
  );

  const expenseTransactions = transactions.filter(
    (transaction) => transaction.amount < 0
  );

  return (
    <section className="w-full flex flex-col gap-2">
      <ul>
        <li className="font-bold text-xl text-green-500">Ingresos</li>
        {incomeTransactions.map((transaction) => {
          return (
            <TransactionItem key={transaction.id} transaction={transaction} />
          );
        })}
      </ul>
      <ul>
        <li className="font-bold text-xl text-red-700">Egresos</li>
        {expenseTransactions.map((transaction) => {
          return (
            <TransactionItem key={transaction.id} transaction={transaction} />
          );
        })}
      </ul>
    </section>
  );
};

export default TransactionList;
