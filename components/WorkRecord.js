import React from 'react'
import styles from '../styles/WorkRecord.module.scss'

export default function WorkRecord(props) {
  const {startDate, endDate, position, company, children} = props
  return (
    <div className={styles.root}>
      <div className={styles.dateDisplay}>
        <p>{startDate}</p>
        <p>{endDate}</p>
      </div>
      <div className={styles.textContainer}>
        <h1>{position}</h1>
        <h2>{company}</h2>
        {children}
      </div>
    </div>
  )
}
