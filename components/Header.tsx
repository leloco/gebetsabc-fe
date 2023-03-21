import React from "react"
import Link from "next/link"
type Props = {}

function Header({}: Props) {
  return (
    <header id="header" className="fixed top-0 left-auto w-full max-w-[1500px] flex justify-between items-center p-4 border-b-slate-200 border-b-[1px] bg-white z-[2]">
      <div>
        <Link className="font-ubuntu text-2xl text-solid-gray" href="/">
          Gebets ABC
        </Link>
      </div>
      <div className="flex-grow px-4">
        <input type="text" className="bg-white border border-gray-200 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-[10px] py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Suche Verheißungen" />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
