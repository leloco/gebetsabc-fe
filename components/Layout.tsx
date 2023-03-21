import React from "react"
import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
type Props = {
  title: string
  keywords: string
  description: string
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

function Layout(props: Props) {
  return (
    <div className="max-w-[1500px] mx-auto custom-site-wrapper">
      <>
        <Head>
          <title>{props.title}</title>
          <meta name="description" content={props.description} />
          <meta name="keywords" content={props.keywords} />
        </Head>
        {props.children}
      </>
    </div>
  )
}

Layout.defaultProps = {
  title: "Gebets ABC | Beten mit Verheißungen",
  description: "Gebetsleben neu entdecken",
  keywords: "Gebet, Verheißung, Bibel, Glaube"
}

export default Layout
