'use client';

import { UseGlobalContext } from "@/context/GlobalState";

const Header = () => {
  const data = UseGlobalContext();
  return (
    <div>Header {JSON.stringify(data)} </div>
  )
}

export default Header