import Link from "next/link";
import Image from "next/image";
import styles from '../pages/page.module.css';

import NavItem from "./NavItem";

const MENU_LIST = [
  {text: "Home", href: "/"},
  {text: "Our Story", href: "/our-story"},
  {text: "Wedding Party", href: "/wedding-party"},
  {text: "Travel Details", href: "/travel-details"},
  {text: "Q&A", href: "/faq"},
  {text: "RSVP", href: "/rsvp"},
  {text: "Honeymoon Fund", href: "/honeymoon-fund"}
]

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link href={"/"} className={styles.logo}>
        </Link>
        <ul className={styles.navlinks}>
          {MENU_LIST.map((item, index) => (
            <li className={styles.navitem} key={index}>
              <NavItem
                title={item.text}
                href={item.href}
              >
              </NavItem>
            </li> 
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;