import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout";
// import Modal from "../components/Modal";
import LoginModal from "../components/modals/LoginModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Modal actionLabel="Submit" isOpen title="Modal test"    /> */}
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}