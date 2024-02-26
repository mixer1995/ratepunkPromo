import React from 'react'
import styles from './Footer.module.scss'
import DownloadBtn from "./DownloadBtn";
import SocialLink from './SocialLink';
import googleLogo from './../public/chrome.svg'
import appleLogo from './../public/apple.svg'
import ratepunkLogo from './../public/logo.svg'
import mailLogo from './../public/email-footer.svg'
import instaLogo from './../public/instagram.svg'
import fbLogo from './../public/facebook.svg'
import linkedLogo from './../public/linkedin.svg'
import twitLogo from './../public/twitter.svg'
import tickLogo from './../public/tiktok.svg'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerA}>
        <div className={styles.align}>
          <DownloadBtn picSrc={googleLogo.src} link="https://chromewebstore.google.com/detail/ratepunk-hotel-booking-an/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk" text="chrome web store" />
          <DownloadBtn picSrc={appleLogo.src} link="https://apps.apple.com/app/ratepunk/id1607823726" text="apple app store" />
          <span className={styles.stars}>{"★".repeat(5)}</span>
          <span>Chrome Store reviews</span>

        </div>
      </div>
      <div className={styles.footerB}>
        <div className={styles.align}>
          <div>
            <img src={ratepunkLogo.src} alt="ratepunkLogo" />
            <p>Ratepunk compares hotel room prices across the major online travel <br /> agencies. When you search for a room, Ratepunk extension scans the <br /> top booking sites and runs a price comparison, so you can be confident <br /> in knowing you’re getting the best deal!</p>
            <span>© 2021 Ratepunk. All Rights Reserved.</span>
          </div>
          <div className={styles.qLinks}>
            <span>QUICK LINKS</span>
            <ul>
              <li><a href="#">Price Comparison</a></li>
              <li><a href="#">Chrome Extension</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Ratepunk Blog</a></li>
              <li><a href="#">Ratepunk Blog</a></li>
            </ul>
          </div>
          <div>
            <span>CONTACT</span>
            <div>
              <img src={mailLogo.src} alt="mailLogo" />
              <a href="mailto:recipient@example.com">hi@ratepunk.com</a>
            </div>
            <div className={styles.social}>
              <span>SOCIAL</span>
              <div>
                <SocialLink picSrc={instaLogo.src} short="insta" />
                <SocialLink picSrc={instaLogo.src} short="fb" />
                <SocialLink picSrc={instaLogo.src} short="linked" />
                <SocialLink picSrc={instaLogo.src} short="twit" />
                <SocialLink picSrc={instaLogo.src} short="tick" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer