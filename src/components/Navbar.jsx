import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-5 pt-3 border-b-2 border-slate-400 flex justify-between items-center mb-5">
      <h3 className="text-2xl font-bold">Life managment</h3>
      <ul className="flex gap-3 items-center">
        <li>
          <Link href='/'>Economy</Link>
        </li>
        <li>
          <Link href='/'>To Do</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;