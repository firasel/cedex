import Head from "next/head";
import Home from "../components/Home/Home/Home";

export default function home() {
  return (
    <div>
      <Head>
        <title>Cedex - Personal portfolio</title>
        <meta
          name="description"
          content="Cedex | Personal portfolio React Next.JS template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  );
}
