import { Level, PrismaClient } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import GameScene from "../packages/components/GameScene";
import Layout from "../packages/components/Layout";

interface Props {
  level: Level;
}

const Home: NextPage<Props> = ({ level }: Props) => {
  return (
    <Layout>
      <GameScene level={level} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();

  const level = await prisma.level.findUnique({
    where: {
      id: 1,
    },
  });

  return {
    props: { level },
  };
};
