import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/routes/Home/Home";
import Portifolio from "./components/routes/Portifolio/Portifolio";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Portifolio />
      </Layout>
    </>
  );
}

export default App;
