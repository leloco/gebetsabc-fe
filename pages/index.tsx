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
    <>
      {/* <Layout>
        <SidebarDesktop />
        <Promises />
      </Layout> */}
      <Layout>
        <Header />
        <div id="sidebar" className="fixed top-[70px] w-[200px] h-min mt-4 flex flex-col justify-between items-between">
          <SidebarDesktopMenu />
          <SidebarDesktopTags />
        </div>
        <div id="main" className="ml-[200px] mt-[70px] overflow-auto grid grid-cols-3 gap-3 p-4">
          <Promise font="font-roboto" likes={0} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
          <Promise font="font-federo" likes={23} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
          <Promise likes={453} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
          <Promise font="font-fast-hand" likes={11} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
          <Promise likes={23} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
          <Promise font="font-quicksand" likes={0} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
          <Promise font="font-sono" likes={22} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
          <Promise font="font-ubunut" likes={45} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
          <Promise font="font-gloock" likes={23} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
          <Promise font="font-courgette" likes={28} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
        </div>
        <div id="footer" className="bg-yellow-400">
          Footer
        </div>
      </Layout>
    </>
  )
}
