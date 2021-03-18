import React from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useRouter } from 'next/router'
import style from '../styles/Layout.module.scss'
import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout(props) {
  const router = useRouter();
  const {children} = props;
  return (
    <div className={style.root}>
      <Head>
        <title key="title">Victor Lau | Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Personal website of a computer science student from HKUST."/>
        <link rel="canonical" href="personal-website-theta-peach.vercel.app"/>
        <link rel="canonical" href="personal-website-git-master-victorlauni.vercel.app"/>
      </Head>
      <Navbar/>
      <SwitchTransition>
        <CSSTransition
          key={router.asPath}
          classNames="fade"
          timeout={300}
          exit={false}
          appear={true}
          in={true}
        >
          {children}
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}
