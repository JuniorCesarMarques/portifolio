import styles from './NavbarPc.module.css';

const NavbarPc = () => {
  return (
    <nav className={styles.container}>
        <ul>
        <li>
          <a href="">Início</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
        <li>
          <a href="">Sobre nós</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarPc;