import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import MenuButton from "../MenuButton/MenuButton";
import { motion } from "framer-motion";

const Navbar = ({ isOpen }) => {
  return (
    <motion.nav
      className={styles.container}
      initial={{ left: "100vw" }} // Começa fora da tela à direita
      animate={{ left: isOpen ? "0vw" : "100vw" }} // Move para o centro ou volta para fora da tela
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      
      {/* navbar para celular */}
      <ul className={styles.nav_mobile}>
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
      <MenuButton width='300px' margin="20px 0 0">Contratar</MenuButton>
    </motion.nav>
  );
};

export default Navbar;
