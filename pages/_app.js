import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { wrapper } from "../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        bodyClassName="toastBody"
        progressClassName="toastProgress"
      />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
