import React, { useState } from 'react'
import styles from './GetReferal.module.scss'
import mailLogo from './../public/email.svg'
import successLogo from './../public/success.svg'
import axios from 'axios';

const GetReferal = () => {
    const [emailText, setEmailText] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState("&nbsp;")

    const focusInput = () => {
        const inputField = document.getElementById("emailInput");
        if (inputField !== null) {
            inputField.focus();
        }
    }

    const validateEmail = (emailText: string) => {
        // Regular expression for basic email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(emailText);
    };

    const submitEmail = async (mail: string) => {
        console.log(mail);
    }

    const checkMail = () => {
        if (!emailText) setErrorMsg("Email is required!")
        else if (!validateEmail(emailText)) setErrorMsg('Please enter a valid email!');
        else {
            //submitEmail(emailText);
            //     setErrorMsg('Failed to save email. Please try again!');
            setSubmitted(true);
        };
    }

    const copyClipboard = () => {
        var input = document.getElementById("copyLink") as HTMLInputElement;
        if (input !== null) {
            input.select();
            document.execCommand("copy");
        }
    }

    return (
        <>
            {!submitted ?

                <div className={styles.emailForm}>
                    <label htmlFor="emailInput" dangerouslySetInnerHTML={{ __html: errorMsg }} className={styles.errMsgLa}></label>

                    <div className={styles.customInput} onClick={() => focusInput()}>
                        <img src={mailLogo.src} alt="mailLogo" />
                        <input type="email" id="emailInput" placeholder='Enter your email address' value={emailText} onChange={(e) => setEmailText(e.target.value)} />
                    </div>

                    <button type='button' onClick={() => checkMail()}>Get Referral Link</button>
                </div>

                :

                <div className={styles.referalLink}>
                    <div className={styles.confLabel}>
                        <img src={successLogo.src} alt="successLogo" />
                        <span>Your email is confirmed!</span>
                    </div>
                    <div className={styles.copyInput}>
                        <input type="text" id="copyLink" value="https://ratepunk.com/referral" readOnly />
                        <button onClick={() => copyClipboard()}>Copy</button>
                    </div>
                </div>
            }
        </>
    )
}

export default GetReferal