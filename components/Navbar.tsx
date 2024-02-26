import styles from './Navbar.module.scss'
import ratepunkLogo from './../public/logo.svg'

const Navbar = () => {
  console.log(ratepunkLogo);
  return (
    <header className={styles.header}>
      <nav>
        <img src={ratepunkLogo.src} alt="ratepunkLogo" />
        <ul>
          <li><a href="#">Chrome Extension</a></li>
          <li><a href="#">Price Comparison</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar