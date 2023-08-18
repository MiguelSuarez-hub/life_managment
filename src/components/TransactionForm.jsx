"use client";

import { UseGlobalContext } from "@/context/GlobalState";
import { useState } from "react";

const TransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = UseGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({id:window.crypto.randomUUID(),description, amount: +amount});
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa una descripción"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Ingresa un valor"
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button>Añadir</button>
      </form>
    </div>
  );
};

export default TransactionForm;
