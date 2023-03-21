import React from "react"
import NewOff from "../public/newOff.svg"
import NewOn from "../public/new-on.svg"
import PopularOff from "../public/popular-off.svg"
import PopularOn from "../public/popular-on.svg"
import RandomOff from "../public/random-off.svg"
import RandomOn from "../public/random-on.svg"
import BookOff from "../public/book-off.svg"
import BookOn from "../public/book-on.svg"
import Link from "next/link"

type Props = {}

function SidebarDesktopMenu({}: Props) {
  return (
    <>
      <ul className="flex flex-col w-full justify-center">
        <Link href="/neu">
          <li className="bg-decent-gray/30 rounded-xl py-2 pl-6">
            <div className="flex justify-start items-center gap-3">
              <NewOn className="w-[25px] h-[25px]" />
              <span>Neu</span>
            </div>
          </li>
        </Link>
        <Link href="verheissungen/beliebt">
          <li className="bg-transparent rounded-xl py-2 pl-6">
            <div className="flex justify-start items-center gap-3">
              <PopularOff className="w-[25px] h-[25px]" />
              <span>Beliebt</span>
            </div>
          </li>
        </Link>
        <Link href="verheissungen/zufall">
          <li className="bg-transparent rounded-xl py-2 pl-6">
            <div className="flex justify-start items-center gap-3">
              <RandomOff className="w-[25px] h-[25px]" />
              <span>Zufall</span>
            </div>
          </li>
        </Link>
        <Link href="verheissungen/sammlung">
          <li className="bg-transparent rounded-xl py-2 pl-6">
            <div className="flex justify-start items-center gap-3">
              <BookOff className="w-[25px] h-[25px]" />
              <span>Sammlung</span>
            </div>
          </li>
        </Link>
      </ul>
      <div className="border-b-gray-100 border-b-2 w-[70%] ml-6"></div>
    </>
  )
}

export default SidebarDesktopMenu
