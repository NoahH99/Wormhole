import '../styles/globals.css';
import {AppProps} from "next/app"; // Path to your Tailwind CSS file

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
