import React from 'react'
import styles from '../styles/404.module.scss'

export default function NotFound() {
  return (
    <div className={styles.root}>
      <h1>You entered the wrong page.</h1>
      <h2>404 Not Found</h2>
    </div>
  )
}
