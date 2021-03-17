import styles from '../styles/Home.module.scss'
import {FaLinkedin, FaGithubSquare, FaEnvelope} from 'react-icons/fa'
import client from '../util/graphqlClient'
import { useEffect } from 'react'
import { gql } from "@apollo/client"

export default function Home(props) {
  const {email, githubUrl, linkedUrl, greetingText, positionText, resume} = props
  const openNewTab = (url) => () => {
    window.open(url, "_black")
  }
  const emailEvent = () => {
    window.location.href = `mailto:${email}`
  }
  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <h1>{greetingText}</h1>
        <h2>{positionText.split("|")[0]}<span>|</span>{positionText.split("|")[1]}</h2>
        <div className={styles.separateLine}/>
        <div className={styles.iconContainer}>
          <FaLinkedin onClick={openNewTab(linkedUrl)}/>
          <FaGithubSquare onClick={openNewTab(githubUrl)}/>
          <FaEnvelope onClick={emailEvent}/>
        </div>
      </div>
      <div className={styles.resumeButton} onClick={openNewTab(resume.url)}>
        My Resume
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const res = await client.query({
    query: gql`
      query {
        aboutMe(where: {display: true}) {
          email
          githubUrl
          greetingText
          linkedinUrl
          positionText
          resume {
            url
          }
        }
      }
    `
  }).then(res => res.data)
  return {
    props: res.aboutMe
  }
}
