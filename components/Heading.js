import Head from "next/head"
import Link from "next/link"

export default function Heading() {
    const today = new Date()
    const month = today.toLocaleString("default", { month: "long" })

    return (
        <>
            <Head>
                <title>protest-o-matic</title>
                <meta
                    name="Berlin protests"
                    content="list of demonstrations happening today"
                />
                <link rel="icon" href="./sparkspeech.ico" />
            </Head>
            <header>
                <h1>Protest-o-Matic</h1>
                <p>
                    Want to protest about something? <br />
                    These are the demonstrations taking place today in Berlin
                </p>
                <p className="date">
                    {today.getDate()} {month}
                </p>
                <p className="small">
                    data provided by{" "}
                    <Link
                        className="link"
                        href="https://www.berlin.de/polizei/"
                    >
                        Polizei Berlin
                    </Link>
                </p>
            </header>
        </>
    )
}
