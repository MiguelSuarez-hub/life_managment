import Balance from '@/components/Balance'
import TransactionList from '@/components/TransactionList'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <TransactionList />
      <Balance />
    </>
  )
}
