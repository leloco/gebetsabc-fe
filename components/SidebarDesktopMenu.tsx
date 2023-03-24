import React from "react"
import NewOff from "../public/new-off.svg"
import NewOn from "../public/new-on.svg"
import PopularOff from "../public/popular-off.svg"
import PopularOn from "../public/popular-on.svg"
import RandomOff from "../public/random-off.svg"
import RandomOn from "../public/random-on.svg"
import BookOff from "../public/book-off.svg"
import BookOn from "../public/book-on.svg"
import { NavLink } from "./NavLink"
import { useRouter } from "next/router"
type Props = {}

function SidebarDesktopMenu({}: Props) {
  const { pathname } = useRouter()
  return (
    <>
      <ul className="flex flex-col w-full justify-center">
        <NavLink href="/" activeClassName="active">
          <li className="bg-transparent rounded-xl py-2 pl-6 hover:bg-light-beige/70 transition-all duration-200 ease-in-out">
            <div className="flex justify-start items-center gap-3">
              {pathname === "/" && <NewOn className="w-[25px] h-[25px]" />}
              {pathname != "/" && <NewOff className="w-[25px] h-[25px]" />}
              <span>Neu</span>
            </div>
          </li>
        </NavLink>
        <NavLink href="/verheissungen/beliebt" activeClassName="active">
          <li className="bg-transparent rounded-xl py-2 pl-6 hover:bg-light-beige/70 transition-all duration-200 ease-in-out">
            <div className="flex justify-start items-center gap-3">
              {pathname === "/verheissungen/beliebt" && <PopularOn className="w-[25px] h-[25px]" />}
              {pathname != "/verheissungen/beliebt" && <PopularOff className="w-[25px] h-[25px]" />}
              <span>Beliebt</span>
            </div>
          </li>
        </NavLink>
        <NavLink href="/verheissungen/zufall" activeClassName="active">
          <li className="bg-transparent rounded-xl py-2 pl-6 hover:bg-light-beige/70 transition-all duration-200 ease-in-out">
            <div className="flex justify-start items-center gap-3">
              {pathname === "/verheissungen/zufall" && <RandomOn className="w-[25px] h-[25px]" />}
              {pathname != "/verheissungen/zufall" && <RandomOff className="w-[25px] h-[25px]" />}
              <span>Zufall</span>
            </div>
          </li>
        </NavLink>
        <NavLink href="/sammlung" activeClassName="active">
          <li className="bg-transparent rounded-xl py-2 pl-6 hover:bg-light-beige/70 transition-all duration-200 ease-in-out">
            <div className="flex justify-start items-center gap-3">
              {pathname === "/sammlung" && <BookOn className="w-[25px] h-[25px]" />}
              {pathname != "/sammlung" && <BookOff className="w-[25px] h-[25px]" />}
              <span>Sammlung</span>
            </div>
          </li>
        </NavLink>
      </ul>
      <div className="my-4 border-b-gray-100 border-b-2 w-[80%] ml-6"></div>
    </>
  )
}

export default SidebarDesktopMenu
