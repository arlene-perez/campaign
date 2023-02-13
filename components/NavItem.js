import Link from "next/link";

const NavItem = ({title, href, active}) => {
  return (
    <Link href={href}>
      {title}
    </Link>
  )
}

export default NavItem;