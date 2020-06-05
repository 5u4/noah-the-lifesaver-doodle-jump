import { Layout } from "../components/Layout";
import { AppProps } from "next/app";

import "./style.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
