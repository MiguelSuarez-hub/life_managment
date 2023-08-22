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
    <section className="w-full flex flex-col gap-5">
      <h2 className="text-3xl font-bold my-3">Tu Balance</h2>
      <p className="text-xl w-full flex justify-between border-b-slate-200 border-b">Total: <span className="text-2xl">$ {total}</span></p>
      <p className="text-xl w-full flex justify-between border-b-slate-200 border-b">Ingresos: <span className="text-2xl text-green-500">$ {incomes}</span></p>
      <p className="text-xl w-full flex justify-between border-b-slate-200 border-b">Egresos: <span className="text-2xl text-red-700">$ {expenses}</span></p>
      
    </section>
  );
};

export default Balance;
