import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { VscChromeClose } from "react-icons/vsc";

import { FiMenu } from "react-icons/fi";
import NavbarPc from "../navbarPc/NavbarPc";
import MenuButton from "../MenuButton/MenuButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
    if (width < 1025) {
      setIsOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <motion.header
      className={styles.container}
      initial={{ height: "90px" }}
      animate={{ height: isOpen ? "300px" : "90px" }}
      transition={{ duration: isOpen ? 0.2 : 0.8, ease: "easeInOut" }}
    >
      <div className={styles.logo_container}>
        <p>Logo</p>
        {width >= 1025 && (
          <>
            <NavbarPc />
            <MenuButton width="200px">Contratar</MenuButton>
          </>
        )}

        {width < 1025 && !isOpen && (
          <FiMenu onClick={() => setIsOpen(!isOpen)} />
        )}
        {width < 1025 && isOpen && (
          <VscChromeClose onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>
      <Navbar isOpen={isOpen} />
    </motion.header>
  );
};

export default Header;
