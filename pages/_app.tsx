import "../styles/globals.css";
import { Footer, Navbar } from "../components";
import { GlobalContextProvider } from "../context/GlobalContext";

function MyApp({ Component, pageProps }) {
    return (
        <GlobalContextProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </GlobalContextProvider>
    );
}

export default MyApp;
