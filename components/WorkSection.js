import React from 'react'
import styles from '../styles/WorkSection.module.scss'
import WorkRecord from './WorkRecord'

export default function WorkSection() {
  return (
    <div className={styles.root}>
      <h1>Work Experience</h1>
      <WorkRecord startDate="Jul 2020" endDate="Sep 2020" position="Full-Stack Developer Intern" company="Yau Mea Gau Limited">
        <p>I am responsible to develop a web based multi-user online video chat system using WebRTC technology. </p>
      </WorkRecord>
    </div>
  )
}
