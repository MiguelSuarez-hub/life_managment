"use client";

import { UseGlobalContext } from "@/context/GlobalState";

const Balance = () => {
  const { transactions } = UseGlobalContext();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const incomes = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expenses =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div>
      <h2>Tu Balance</h2>
      <p>{total}</p>
      <p>{expenses}</p>
      <p>{incomes}</p>
    </div>
  );
};

export default Balance;
