import type { NextPage } from "next";
import GameScene from "../components/GameScene";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <GameScene />
    </Layout>
  );
};

export default Home;
