import Link from 'next/Link';

const NavItem = ({title, href, active}) => {
  return (
    <Link href={href}>
      {title}
    </Link>
  )
}

export default NavItem;