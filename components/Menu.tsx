import React, { useRef } from "react"
import { useOnClickOutside } from "usehooks-ts"
import NavLink from "@/components/NavLink"

type Props = {
  setShowMenu: Function
}

function Menu(props: Props) {
  const ref = useRef(null)

  function handleClickOutSide() {
    props.setShowMenu(false)
  }

  useOnClickOutside(ref, handleClickOutSide)

  return (
    <div ref={ref} className="absolute top-[45px] left-0 bg-white p-4 w-full h-min shadow-xl rounded-lg z-[20] text-gray-600">
      <ul className="flex flex-col">
        <NavLink href="/info" activeClassName="active">
          <li className="py-2 pl-4 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Über das Projekt</li>
        </NavLink>
        <NavLink href="/support" activeClassName="active">
          <li className="py-2 pl-4 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Support</li>
        </NavLink>
        <NavLink href="/impressum" activeClassName="active">
          <li className="py-2 pl-4 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Impressum</li>
        </NavLink>
        <NavLink href="/datenschutz" activeClassName="active">
          <li className="py-2 pl-4 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Datenschutz</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Menu
