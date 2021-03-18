import React from 'react'
import styles from '../styles/AboutSection.module.scss'
import parser from 'html-react-parser'

export default function AboutSection(props) {
  const {introduction, profilePic, programmingLanguage, libraries} = props.aboutMe
  return (
    <div className={styles.root}>
      <h1>About me</h1>
      <div className={styles.mainContent}>
        <img
          className={styles.img}
          src={profilePic.url}
        />
        {parser(introduction.html)}
        <div className={styles.programmingLangContainer}>
          {programmingLanguage?.map(val => <div className={styles.programmingLang} key={val}>{val}</div>)}
          {libraries?.map(val => <div className={styles.libraries} key={val}>{val}</div>)}
        </div>
      </div>
    </div>
  )
}
