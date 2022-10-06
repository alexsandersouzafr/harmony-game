import type { NextPage } from "next";
import GameScene from "../packages/components/GameScene";
import Layout from "../packages/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <GameScene />
    </Layout>
  );
};

export default Home;
