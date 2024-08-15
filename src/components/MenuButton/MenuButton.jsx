import styles from './MenuButton.module.css';
import { FaArrowRight } from "react-icons/fa";

const MenuButton = ({ children, margin, width }) => {
  return (
    <button
     style={{margin: margin, width: width}}
     className={styles.container}>
        <p>{children} <FaArrowRight /></p>
    </button>
  )
}

export default MenuButton;