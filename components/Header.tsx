import React, { useState, useRef } from "react"
import Link from "next/link"
import SearchBar from "./SearchBar"
import SelectedCategory from "./SelectedCategory"
import SelectedCategoryContainer from "./SelectedCategoryContainer"
import DotsOff from "../public/dots-off.svg"
import DotsOn from "../public/dots-on.svg"
import Menu from "@/components/Menu"
import { useOnClickOutside } from "usehooks-ts"
type Props = {}

function Header({}: Props) {
  const [showSearch, setShowSearch] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  function handleClickOutSide() {
    setShowMenu(false)
  }

  return (
    <header id="header" className="fixed top-0 left-auto w-full max-w-[1500px] gap-6 flex justify-between items-center p-4 border-b-slate-200 border-b-[1px] bg-white z-[2]">
      <div className="flex relative justify-center items-center gap-4">
        <div>
          <Link className="font-roboto text-3xl text-[#EA5455] font-bold" href="/">
            gebets<span className="text-[#002B5B]">abc</span>
          </Link>
        </div>
        <div
          onClick={() => {
            setShowMenu(prevState => !prevState)
          }}
          className="flex justify-center items-center cursor-pointer"
        >
          {showMenu && <DotsOn className="w-[30px] h-[30px]" />}
          {!showMenu && <DotsOff className="w-[30px] h-[30px]" />}
        </div>
        {showMenu && <Menu setShowMenu={setShowMenu} />}
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
