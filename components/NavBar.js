// import Link from "next/link";
import { isBrowser } from "react-device-detect";
import { BsXSquare } from "react-icons/bs";

import Image from "next/image";
import styles from '../styles/page.module.css';
import { clsx } from 'clsx';

import NavItem from "./NavItem";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

const MENU_LIST = [
  {text: "Home", href: "/"},
  {text: "Our Story", href: "/our-story"},
  {text: "Wedding Party", href: "/wedding-party"},
  {text: "Schedule", href: "/schedule"},
  {text: "Travel", href: "/travel"},
  {text: "Q&A", href: "/faq"},
  {text: "Things To Do", href: "/things-to-do"},
  {text: "RSVP", href: "/rsvp"},
  {text: "Registry", href: "/registry"}
]

const NavBar = () => {
  const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => setDisplayHamburgerMenu(!displayHamburgerMenu)
  
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul
        className={clsx(
          `${styles.navLinks}`,
          {
          [styles.expand]: displayHamburgerMenu,
        })}
        >
        <div className={styles.exitIcon} onClick={toggleHamburgerMenu}>
            <BsXSquare />
        </div>
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
        <div 
        className={clsx(
          `${styles.HamburgerMenu}`,
          {
          [styles.hideHamburger]: displayHamburgerMenu,
        })}
        onClick={toggleHamburgerMenu}>
            <HamburgerMenu />
        </div>
      </nav>
    </header>
  )
}

export default NavBar;