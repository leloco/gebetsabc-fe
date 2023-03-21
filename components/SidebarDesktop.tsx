import React from "react"
import SidebarDesktopMenu from "./SidebarDesktopMenu"
import SidebarDesktopTags from "./SidebarDesktopTags"

type Props = {}

function SidebarDesktop({}: Props) {
  return (
    <div id="sidebar" className="fixed w-full">
      <SidebarDesktopMenu />
      <SidebarDesktopTags />
    </div>
  )
}

export default SidebarDesktop
