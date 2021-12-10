import type { NextPage } from "next";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Garcia Tuñon</title>
      </Head>
      <div className="container">
        <h1 className="title">Estamos en mantenimiento</h1>
        <h2 className="subtitle">Pronto volveremos</h2>
      </div>
    </>
  );
};

export default Home;
