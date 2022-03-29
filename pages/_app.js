import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/shared/Loading/Loading";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loadingStart = () => setLoading(true);
  const loadingStop = () => setLoading(false);

  useEffect(() => {
    console.log("start process");
    router?.events?.on("routeChangeStart", loadingStart);
    router?.events?.on("routeChangeComplete", loadingStop);
    router?.events?.on("routeChangeError", loadingStop);
    return () => {
      router.events.off("routeChangeStart", loadingStart);
      router.events.off("routeChangeComplete", loadingStop);
      router.events.off("routeChangeError", loadingStop);
      console.log("end process");
    };
  }, [router.events]);

  return (
    <div>
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
        >
          <Loading />
        </motion.div>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

export default MyApp;
