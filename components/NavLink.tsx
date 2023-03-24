import { useRouter } from "next/router"
import Link from "next/link"
import PropTypes from "prop-types"

export { NavLink }

type props = {
  href: string
  exact: boolean
  children: React.ReactNode
  activeClassName: string
}

NavLink.defaultProps = {
  exact: true
}

function NavLink(props: props) {
  const router = useRouter()
  const isActive = props.exact ? router.asPath === props.href : router.asPath.startsWith(props.href)
  console.log(router.asPath, props.href, router.asPath === props.href)
  return (
    <>
      {isActive && (
        <Link href={props.href}>
          <div className={props.activeClassName}>{props.children}</div>
        </Link>
      )}
      {!isActive && <Link href={props.href}>{props.children}</Link>}
    </>
  )
}
