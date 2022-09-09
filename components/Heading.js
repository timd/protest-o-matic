import Head from "next/head"
import Link from "next/link"

export default function Heading({ language }) {
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
                <div>
                    <h1>Protest-o-Matic</h1>
                    <p>
                        {language === "En" ? (
                            <>
                                <span> Want to protest about something?</span>
                                <br />
                                <span>
                                    These are the demonstrations taking place
                                    today in Berlin
                                </span>
                            </>
                        ) : (
                            <>
                                <span>Hast du Lust zu protestieren?</span>
                                <br />
                                <span>
                                    Hier sind die Demonstrationen, die heute in
                                    Berlin stattfinden
                                </span>
                            </>
                        )}
                    </p>

                    <p className="date">
                        {today.getDate()} {month}
                    </p>
                    <p className="small">
                        {language === "En" ? (
                            <span>data provided by</span>
                        ) : (
                            <span>daten der</span>
                        )}{" "}
                        <Link
                            className="link"
                            href="https://www.berlin.de/polizei/"
                        >
                            Polizei Berlin
                        </Link>
                    </p>
                </div>
            </header>
        </>
    )
}
