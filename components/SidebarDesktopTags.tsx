import React from "react"
import { NavLink } from "./NavLink"
type Props = {}

function SidebarDesktopTags({}: Props) {
  return (
    <ul className="m-4 w-full  pr-4 overflow-auto transition-all duration-500 ease-in-out">
      <NavLink href="/kategorien/landleben" activeClassName="active">
        <li className="py-2 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Landleben</li>
      </NavLink>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Familie</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Hoffnung</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Arbeit</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Trost</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Sieg über Sünde</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Vollkommenheit</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Finanzen</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Mut</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Durchhaltevermögen</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Schwachheit</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Gemeinschaft</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Weisheit</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Demut</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Partnerschaft</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Friede</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Gelingen</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Freude</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Freiheit</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Leben</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Freunde</li>
      <li className="py-3 px-2 text-sm hover:bg-light-beige/70 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">Lebensstil</li>
    </ul>
  )
}

export default SidebarDesktopTags
