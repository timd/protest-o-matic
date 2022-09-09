import { useState } from "react"
import Slug from "../components/Slug"
import Heading from "../components/Heading.js"
import { IDemonstration, getProtests } from "../lib/apiFetcher"
import { CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react"

const Home = ({ protests }: { protests: [IDemonstration] }) => {
    const [fullHeight, setFullHeight] = useState(false)
    const [language, setLanguage] = useState("En")

    function toggleLanguage() {
        if (language === "En") {
            setLanguage("De")
        } else {
            setLanguage("En")
        }
    }

    return (
        <>
            <div className="language">
                <button type="button" onClick={() => toggleLanguage()}>
                    {language === "En" ? `🇩🇪` : `🇬🇧`}
                </button>
            </div>
            <Heading language={language} />
            <main>
                {protests &&
                    protests.map((protest, index) => (
                        <div className="" key={index}>
                            <CCard>
                                <CCardBody
                                    className={fullHeight ? `full` : `not-full`}
                                >
                                    <CCardTitle>
                                        <Slug
                                            contents={protest.thema}
                                            limit={45}
                                            setFullHeight={setFullHeight}
                                        />
                                    </CCardTitle>
                                    {protest.strasse_nr ? (
                                        <CCardText>
                                            <a
                                                className="card-text"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={`https://www.google.com/maps/search/?api=1&query=${protest.strasse_nr}+${protest.plz}`}
                                            >
                                                🌐 {protest.strasse_nr}
                                                {", "}
                                                {protest.plz}
                                            </a>
                                        </CCardText>
                                    ) : (
                                        <CCardText className="no-hover">
                                            {language === "En" ? (
                                                <span>
                                                    🌐 no address provided
                                                </span>
                                            ) : (
                                                <span>
                                                    🌐 keine Adresse angegeben
                                                </span>
                                            )}
                                        </CCardText>
                                    )}
                                    {protest.von !== "00:00" ? (
                                        <CCardText className="time ">
                                            🕖 {protest.von}
                                            {" - "}
                                            {protest.bis}
                                        </CCardText>
                                    ) : (
                                        <CCardText className="time ">
                                            {language === "En" ? (
                                                <span>🕖 no time provided</span>
                                            ) : (
                                                <span>
                                                    🕖 keine Uhrzeit angegeben
                                                </span>
                                            )}
                                        </CCardText>
                                    )}
                                </CCardBody>
                            </CCard>
                        </div>
                    ))}
            </main>
        </>
    )
}

export default Home

export async function getServerSideProps() {
    let protests = await getProtests()
    protests = JSON.parse(JSON.stringify(protests))

    return {
        props: { protests },
    }
}
