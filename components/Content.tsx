import React from 'react'
import styles from './Content.module.scss'
import GetReferal from './GetReferal'

const Content = () => {
  return (
    <div className={styles.main}>
      <div className={styles.align}>
        <div className={styles.refer}>
          <h1>REFER FRIENDS AND GET REWARDS</h1>
          <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>

          <GetReferal />

          <span className={styles.bottom}>Limits on max rewards apply.</span>
        </div>
        <div className={styles.instructions}>

        </div>
      </div>
    </div>
  )
}

export default Content