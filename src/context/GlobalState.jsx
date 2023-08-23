"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

export const Context = createContext();

export const UseGlobalContext = () => {
  const context = useContext(Context);
  return context;
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const localData = localStorage.getItem("transactions");
    const data = localData ? JSON.parse(localData).transactions : [];
    console.log(data);
    data.length > 0 &&
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: data,
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
