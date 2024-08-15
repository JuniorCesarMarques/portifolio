import styles from './MainButton.module.css';

const MainButton = ({children}) => {
  return (
    <div className={styles.container}>
        <button>
            {children}
        </button>
    </div>
  )
}

export default MainButton;