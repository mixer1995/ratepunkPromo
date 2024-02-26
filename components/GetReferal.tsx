import React, { useState } from 'react'
import styles from './GetReferal.module.scss'
import mailLogo from './../public/email.svg'


const GetReferal = () => {
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState("&nbsp;")


    return (
        <>
            {!submitted ? 
            
            <div className={styles.emailForm}>
                <label htmlFor="emailInput" dangerouslySetInnerHTML={{ __html: errorMsg }} className={styles.errMsgLa}></label>

                <div className={styles.customInput} onClick={() => document.getElementById("emailInput").focus()}>
                    <img src={mailLogo.src} alt="mailLogo" />
                    <input type="email" id="emailInput" placeholder='Enter your email address' />
                </div>

                <button type='button'>Get Referral Link</button>

               
            </div>
            
            : <div>true</div>}
        </>
    )
}

export default GetReferal