import type { NextPage } from "next";
import Head from "next/head";
import { TokenView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
      </style>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <TokenView />
    </div>
  );
};

export default Home;
