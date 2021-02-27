import moment from 'moment';
import React from 'react'
import styles from '../styles/WorkSection.module.scss'
import WorkRecord from './WorkRecord'

export default function WorkSection(props) {
  const {workExperiences} = props;
  return (
    <div className={styles.root}>
      <h1>Work Experience</h1>
      {
        workExperiences.map((val, ind) => <WorkRecord 
          key={val.id}
          startDate={moment(val.startDate).format("MMM YYYY")}
          endDate={moment(val.endDate).format("MMM YYYY")}
          position={val.position}
          company={val.company}
        >
          <p>{val.description}</p>
        </WorkRecord>)
      }
    </div>
  )
}
