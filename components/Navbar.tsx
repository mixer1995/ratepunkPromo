import styles from './Navbar.module.scss'
import ratepunkLogo from './../public/logo.svg'
import hamburgLogo from './../public/menu.svg'
import closeLogo from './../public/close.svg'
import { useState } from 'react';

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <header className={`${styles.header} ${opened && styles.opened}`}>
      <nav>
        <img src={ratepunkLogo.src} alt="ratepunkLogo" className={styles.rateLogo}/>
        <ul className={styles.desctopLi}>
          <li><a href="#">Chrome Extension</a></li>
          <li><a href="#">Price Comparison</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <img src={opened ? closeLogo.src : hamburgLogo.src} alt="hamburgCloseLogo" className={styles.hamburgCloseLogo} onClick={() => setOpened(!opened)} />
      </nav>
      <ul className={`${styles.mobileLi} ${opened && styles.openedLi}`}>
          <li><a href="#">Chrome Extension</a></li>
          <li><a href="#">Price Comparison</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
    </header>
  )
}

export default Navbar