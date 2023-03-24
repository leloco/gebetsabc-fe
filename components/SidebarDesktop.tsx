import React from "react"
import SidebarDesktopMenu from "./SidebarDesktopMenu"
import SidebarDesktopTags from "./SidebarDesktopTags"

type Props = {}

function SidebarDesktop({}: Props) {
  return (
    <div id="sidebar" className="fixed top-[70px] w-[200px] h-[80%] mt-4 flex flex-col justify-between items-between">
      <SidebarDesktopMenu />
      <SidebarDesktopTags />
    </div>
  )
}

export default SidebarDesktop
