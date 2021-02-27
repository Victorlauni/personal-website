import { gql } from '@apollo/client'
import React from 'react'
import AboutSection from '../components/AboutSection'
import WorkSection from '../components/WorkSection'
import styles from '../styles/About.module.scss'
import client from '../util/graphqlClient'

export default function About(props) {
  const {workExperiences} = props
  return (
    <div className={styles.root}>
      <AboutSection/>
      <WorkSection workExperiences={workExperiences}/>
    </div>
  )
}

export async function getStaticProps(){
  const res = await client.query({
    query: gql`
      query {
        workExperiences {
          id
          company
          startDate
          endDate
          position
          nature
          description
          companyLogo {
            url
          }
        }
      }
    `
  }).then(res => res.data)
  return {
    props: res
  }
}