import React from 'react'
import ProjectRecord from './ProjectRecord';
import styles from '../styles/ProjectSection.module.scss'

export default function ProjectSection(props) {
  const {projects} = props;
  return (
    <div className={styles.root}>
      <h1>Project</h1>
      {projects.map(val => <ProjectRecord key={val.id} project={val}/>)}
    </div>
  )
}
