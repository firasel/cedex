import Head from "next/head";
import Blog from "../components/Home/Blog/Blog";
import Header from "../components/Home/Header/Header";
import Journey from "../components/Home/Journey/Journey";
import Project from "../components/Home/Project/Project";
import Services from "../components/Home/Services/Services";
import Specialty from "../components/Home/Specialty/Specialty";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import TouchWithMe from "../components/Home/TouchWithMe/TouchWithMe";
import Footer from "../components/shared/Footer/Footer";

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
        <Header />
        <Specialty />
        <Project />
        <Journey />
        <TouchWithMe />
        <Services />
        <Testimonial />
        <Blog />
        <Footer />
      </main>
    </div>
  );
}
