import { Inter } from "next/font/google"
import Layout from "@/components/Layout"
import Promises from "@/components/Promises"
import SidebarDesktop from "@/components/SidebarDesktop"
import Header from "@/components/Header"
import SidebarDesktopMenu from "@/components/SidebarDesktopMenu"
import SidebarDesktopTags from "@/components/SidebarDesktopTags"
import Promise from "@/components/Promise"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout>
      <SidebarDesktop />
      <Promises />
    </Layout>
  )
}
