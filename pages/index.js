import Head from "next/head";
import Blog from "../components/Home/Blog/Blog";
import Header from "../components/Home/Header/Header";
import Specialty from "../components/Home/Specialty/Specialty";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import Footer from "../components/shared/Footer/Footer";
import Journey from "../components/shared/Journey/Journey";
import Project from "../components/shared/Project/Project";
import Services from "../components/shared/Services/Services";
import TouchWithMe from "../components/shared/TouchWithMe/TouchWithMe";
import heroData from "../data/heroData";

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
        <Header heroData={heroData} />
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
