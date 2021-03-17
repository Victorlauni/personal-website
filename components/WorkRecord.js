import React from 'react'
import styles from '../styles/WorkRecord.module.scss'

export default function WorkRecord(props) {
  const {startDate, endDate, position, company, description, nature, current, displayMonth} = props
  return (
    <div className={styles.root}>
      <div className={styles.dateDisplay}>
        <p>{current ? "Present" : endDate}</p>
        <p>{startDate}</p>
      </div>
      <div className={styles.textContainer}>
        <h1>{position} <span className={styles.nature}>{nature}</span></h1>
        <h2>{company}</h2>
        {description?.split("\n").map(val => {
          if (val.substring(0,2) === "- "){
            return <p>▷ {val.substring(2)}</p>
          }
          else return <p>{val}</p>
        })}
      </div>
    </div>
  )
}
