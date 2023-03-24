import React, { useState } from "react"
import Link from "next/link"
import SearchBar from "./SearchBar"
import SelectedCategory from "./SelectedCategory"
import SelectedCategoryContainer from "./SelectedCategoryContainer"
type Props = {}

function Header({}: Props) {
  const [showSearch, setShowSearch] = useState(false)
  return (
    <header id="header" className="fixed top-0 left-auto w-full max-w-[1500px] flex justify-between items-center p-4 border-b-slate-200 border-b-[1px] bg-white z-[2]">
      <div>
        <Link className="font-roboto text-3xl text-[#EA5455] font-bold mr-20" href="/">
          gebets<span className="text-[#002B5B]">abc</span>
        </Link>
      </div>
      <div className="relative flex-grow max-w-[1300px]">
        <div className="flex justify-between items-center bg-white border outline-none border-gray-200 text-gray-900 text-md rounded-full focus:ring-mint-green focus:border-mint-green w-full px-[12px] py-[6px]">
          <SelectedCategoryContainer />
          <input onBlur={() => setShowSearch(false)} onClick={() => setShowSearch(true)} type="text" className="pl-4 w-full outline-none" placeholder="Kategorie hinzufügen" />
        </div>
        {showSearch && <SearchBar />}
      </div>
    </header>
  )
}

export default Header
