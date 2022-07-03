import Head from "next/head"
import { getProtests } from "../lib/apiFetcher"

export default function Heading() {
    return (
        <>
            <Head>
                <title>protest-o-matic</title>
                <meta
                    name="Berlin protests"
                    content="list of demonstrations happening today"
                />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <header>
                <p>Protest-o-Matic</p>
            </header>
        </>
    )
}
