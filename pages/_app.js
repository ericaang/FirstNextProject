import App from "next/app";
import Navbar from "../components/navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx, example: "data" };
};
