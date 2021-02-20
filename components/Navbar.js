import React, { useState } from 'react'
import style from '../styles/Navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter();
  const [active, setActive] = useState(false)
  return (
    <div className={style.root}>
      <Link href="/">
        <a className={router.asPath == '/' ? style.link_active : undefined}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.asPath == '/about' ? style.link_active : undefined}>About</a>
      </Link>
      {/* <Link href="/portfolio">
        <a className={router.asPath == '/portfolio' ? style.link_active : undefined}>Portfolio</a>
      </Link> */}
    </div>
  )
}
