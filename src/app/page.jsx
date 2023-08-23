import Balance from "@/components/Balance";
import Graphics from "@/components/Graphics";
import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold mb-3">Tu economia</h1>

      <section className="md:grid md:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <TransactionForm />
          <Balance />
        </div>
        <Graphics />
        <TransactionList />
      </section>
    </main>
  );
}
