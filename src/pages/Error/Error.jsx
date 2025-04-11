import React from 'react'
import styles from './Error.module.css'

const Error = () => {
  return (
    <main className={styles.errorContainer}>
      <h2 className={styles.error__header}>404 Not Found</h2>
    </main>
  )
}

export default Error