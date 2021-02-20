import React from 'react'
import styles from '../styles/AboutSection.module.scss'

export default function AboutSection() {
  return (
    <div className={styles.root}>
      <h1>About me</h1>
      <div className={styles.mainContent}>
        <img
          className={styles.img}
          src="/picture/profilePic.jpg"
        />
        <p>Hello there, I am a Final Year Student at HKUST majoring in BEng of Computer Science, and minoring in Big Data Technology.</p>
        <p>I enjoy exploring technologies and would like to get involved in various fields of Computer Science.</p>
      </div>
    </div>
  )
}
