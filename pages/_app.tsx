import "../styles/globals.css"
import "@coreui/coreui/dist/css/coreui.min.css"
import type { AppProps } from "next/app"
import Heading from "../components/Heading.js"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Heading />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
