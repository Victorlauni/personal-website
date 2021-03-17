import React from 'react'
import styles from '../styles/WorkRecord.module.scss'
import parse from 'html-react-parser'

export default function WorkRecord(props) {
  const {startDate, endDate, position, company, description, nature, current, details} = props
  return (
    <div className={styles.root}>
      <div className={styles.dateDisplay}>
        <p>{current ? "Present" : endDate}</p>
        <p>{startDate}</p>
      </div>
      <div className={styles.textContainer}>
        <h1>{position} <span className={styles.nature}>{nature}</span></h1>
        <h2>{company}</h2>
        {/* <ul className={styles.list}>
          {description?.split("\n").map(val => {
            if (val.substring(0,2) === "- "){
              return <li>{val.substring(2)}</li>
            }
            else return <p>{val}</p>
          })}
        </ul> */}
        <div className={styles.details}>
          {parse(details.html)}
        </div>
        
      </div>
    </div>
  )
}
