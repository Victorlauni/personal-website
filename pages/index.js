import styles from '../styles/Home.module.scss'
import {FaLinkedin, FaGithubSquare, FaEnvelope} from 'react-icons/fa'
import { useEffect } from 'react'

export default function Home() {
  const openNewTab = (url) => () => {
    window.open(url, "_black")
  }
  const emailEvent = () => {
    window.location.href = "mailto:cclauaa.connect.ust.hk"
  }
  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <h1>Hello, <span>I'm Victor Lau</span></h1>
        <h2>A Computer Science Student at HKUST <span>|</span> Software Engineer</h2>
        <div className={styles.separateLine}/>
        <div className={styles.iconContainer}>
          <FaLinkedin onClick={openNewTab("https://www.linkedin.com/in/victor-lau-9619631ab/")}/>
          <FaGithubSquare onClick={openNewTab("https://github.com/Victorlauni")}/>
          <FaEnvelope onClick={emailEvent}/>
        </div>
      </div>
      
    </div>
  )
}
