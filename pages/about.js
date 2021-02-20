import React from 'react'
import AboutSection from '../components/AboutSection'
import WorkSection from '../components/WorkSection'
import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <div className={styles.root}>
      <AboutSection/>
      <WorkSection/>
    </div>
  )
}
