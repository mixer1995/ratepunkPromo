import React from 'react'
import styles from './SocialLink.module.scss'

const SocialLink = ({picSrc, short} : {picSrc: string, short: string}) => {
  return (
    <div className={styles.link} onClick={() => { window.open("#",'new_window');}}>
      <img src={picSrc} alt="" />
    </div>
  )
}

export default SocialLink