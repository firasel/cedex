import Head from "next/head";
import Header from "../components/Home/Header/Header";

export default function Home() {
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
        <Header />
      </main>
    </div>
  );
}
