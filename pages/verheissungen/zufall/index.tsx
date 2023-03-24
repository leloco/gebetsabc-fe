import React from "react"
import Layout from "@/components/Layout"
import SidebarDesktop from "@/components/SidebarDesktop"
type Props = {}

function Random({}: Props) {
  return (
    <Layout>
      <SidebarDesktop />
      <h1>Random</h1>
    </Layout>
  )
}

export default Random
