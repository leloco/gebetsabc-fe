import React from "react"
import Layout from "@/components/Layout"
import SidebarDesktop from "@/components/SidebarDesktop"
import { useRouter } from "next/router"
type Props = {}

function Categories({}: Props) {
  const router = useRouter()
  const { slug } = router.query
  return (
    <Layout>
      <SidebarDesktop />
      <h1>{slug}</h1>
    </Layout>
  )
}

export default Categories
