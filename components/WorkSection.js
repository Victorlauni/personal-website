import moment from 'moment';
import React from 'react'
import styles from '../styles/WorkSection.module.scss'
import WorkRecord from './WorkRecord'

export default function WorkSection(props) {
  const {workExperiences} = props;
  return (
    <div className={styles.root}>
      <h1>Work Experience</h1>
      <div className={styles.workContainer}>
      {
        workExperiences.slice()
        .sort((a, b) => {
          if (a.current) return -1
          if (b.current) return 1
          else return moment(b.endDate).unix() - moment(a.endDate).unix()
        })
        .map((val, ind) => <WorkRecord 
          key={val.id}
          startDate={moment(val.startDate).format(val.displayMonth? "MMM YYYY": "YYYY")}
          endDate={moment(val.endDate).format(val.displayMonth? "MMM YYYY": "YYYY")}
          position={val.position}
          company={val.company}
          nature={val.nature?.replace("_", "-")}
          description={val.description}
          current={val.current}
          details={val.details}
        />)
      }
      </div>
    </div>
  )
}
