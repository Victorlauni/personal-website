import React from 'react'
import styles from '../styles/ProjectRecord.module.scss'
export default function ProjectRecord(props) {
  const {project} = props
  return (
    <div className={styles.root} onClick={() => window.open(project.url, "_blank")}>
      <img src={project.preview?.url}></img>
      <div className={styles.textContainer}>
        <h1>{project.title}</h1>
        {project.description?.split("\n").map(val => <p>{val}</p>)}
        <div className={styles.tagContainer}>{project.category?.map(val => <p>{val}</p>)}</div>
      </div>
      
    </div>
  )
}
