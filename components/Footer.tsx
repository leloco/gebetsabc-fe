import React from "react"

type Props = {}

function Footer({}: Props) {
  return (
    <footer id="footer" className="bg-yellow-400">
      &copy; {new Date().getFullYear()} Gebets ABC. Alle Rechte vorbehalten.
    </footer>
  )
}

export default Footer
