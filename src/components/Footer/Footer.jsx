import styles from './Footer.module.css';

const Footer = () => {

  const year = new Date().getFullYear();


  return (
    <footer className={styles.container}>
      &copy; {year}
    </footer>
  )
}

export default Footer;