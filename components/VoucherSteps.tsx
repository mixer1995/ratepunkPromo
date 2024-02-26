import React from 'react'
import styles from './VoucherSteps.module.scss'

const VoucherSteps = ({ link, title, body, index }: { link: string, title: string, body: string, index: number}) => {
    return (
        <div className={styles.step}>
            <img src={link} alt={"step"+index+"Logo"} />
            <div>
                <span>STEP {++index}</span>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default VoucherSteps