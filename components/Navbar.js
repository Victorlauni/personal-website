import React, { useEffect, useState } from 'react'
import style from '../styles/Navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [isSticky, setSticky] = useState(false)
  const router = useRouter();
  const [active, setActive] = useState(false)

  useEffect(() => {
    document.onscroll = (ev) => {
      if (window.pageYOffset > 60) {
        setSticky(true)
      }
      else setSticky(false)
    }
  }, [])
  

  return (
    <div className={`${style.root} ${isSticky ? style.stickyRoot : ""}`}>
      <div className={`${style.stickyBG} ${isSticky? style["stickyBG_active"]: ""}`}/>
      <Link href="/">
        <a className={router.asPath == '/' ? style.link_active : undefined}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.asPath == '/about' ? style.link_active : undefined}>About</a>
      </Link>
      <Link href="/project">
        <a className={router.asPath == '/project' ? style.link_active : undefined}>Project</a>
      </Link>
    </div>
  )
}
