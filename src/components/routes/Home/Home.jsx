import MainButton from "../../MainButton/MainButton";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h3>Destaque sua marca</h3>
      <h1>Inovação em cada clique</h1>
      <p>Designs modernos para empresas que desejam se destacar no mercado digital.</p>
      <MainButton>
        Contratar
      </MainButton>
    </div>
  );
};

export default Home;
