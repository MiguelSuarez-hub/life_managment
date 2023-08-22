"use client";

import { UseGlobalContext } from "@/context/GlobalState";
import { VictoryPie, VictoryLabel } from "victory";

const Graphics = () => {
  const { transactions } = UseGlobalContext();

  const amounts = transactions.map((transaction) => transaction.amount);

  const incomes = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expenses =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  const expensesPercentage = Math.round(incomes === 0 ? 0 : (expenses / incomes) * 100);

  const incomesPercentage = incomes === 0 ? 0 : 100 - expensesPercentage;

  return (
    <section className="flex flex-col">
    <h2 className="font-bold text-xl">Grafica Ingresos vs Egresos</h2>
    <VictoryPie
      colorScale={["#229954", "#A93226"]}
      data={[
        { x: "Ingresos", y: incomesPercentage },
        { x: "Egresos", y: expensesPercentage },
      ]}
      animate={{ duration: 200 }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
    />
    </section>
    
  );
};

export default Graphics;
