import { gql } from '@apollo/client'
import React from 'react'
import AboutSection from '../components/AboutSection'
import WorkSection from '../components/WorkSection'
import styles from '../styles/About.module.scss'
import client from '../util/graphqlClient'
import Head from 'next/head'

export default function About(props) {
  const {workExperiences, aboutMe} = props
  return (
    <div className={styles.root}>
      <Head>
        <title key="title">Victor Lau | About</title>
      </Head>
      <AboutSection aboutMe={aboutMe}/>
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
          details {
            html
          }
          companyLogo {
            url
          }
          current
          displayMonth
          display
        }
        aboutMe(where: {display: true}) {
          profilePic {
            url(transformation: {image: {resize: {height: 300, width: 300}}})
          }
          introduction {
            html
          }
          programmingLanguage
          libraries
        }
      }
    `
  }).then(res => res.data)
  return {
    props: res
  }
}