import React from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useRouter } from 'next/router'
import style from '../styles/Layout.module.scss'
import Navbar from './Navbar'

export default function Layout(props) {
  const router = useRouter();
  const {children} = props;
  return (
    <div className={style.root}>
      <Navbar/>
      <SwitchTransition>
        <CSSTransition
          key={router.asPath}
          classNames="fade"
          timeout={300}
          appear={true}
          in={true}
        >
          {children}
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}
