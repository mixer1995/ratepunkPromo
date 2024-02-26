import React from 'react'
import styles from './DownloadBtn.module.scss'

const DownloadBtn = ({link, picSrc, text}: {link: string, picSrc: string, text: string}) => {
  return (
    <div className={styles.linkBtn} onClick={() => { window.open(link,'new_window');}}>
        <img src={picSrc} alt={text + " img"} />
        <div>
            <span className={styles.textA}>available in the</span>
            <span className={styles.textB}>{text}</span>
        </div>
    </div>
  )
}

export default DownloadBtn