"use client";

import { UseGlobalContext } from "@/context/GlobalState";
import { useState } from "react";

const TransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = UseGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setDescription("");
    setAmount("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-5 p-2 w-full flex flex-col gap-2 justify-center items-center"
    > 
      <label className="w-full">
        <span>Descripción</span>
        <input
        type="text"
        placeholder="Ingresa una descripción"
        onChange={(e) => setDescription(e.target.value)}
        className="p-1 w-full rounded-sm text-sm md:text-md text-slate-600"
        value={description}
        required
      ></input>
      </label>
      <label className="w-full">
        <span>Valor, para gasto colocar signo - previo al valor</span>
        <input
        type="number"
        placeholder="$ 0"
        onChange={(e) => setAmount(e.target.value)}
        className="p-1 w-full rounded-sm text-sm md:text-md text-slate-600"
        value={amount}
        required
      ></input>
      </label>
      
      
      <button className=" w-1/2 px-5 py-1 bg-slate-400 rounded-2xl hover:scale-110 hover:bg-slate-800">
        Añadir
      </button>
    </form>
  );
};

export default TransactionForm;
