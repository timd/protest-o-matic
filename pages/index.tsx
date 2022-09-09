import { useState } from "react"
import Slug from "../components/Slug"
import { CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react"

import { IDemonstration, getProtests } from "../lib/apiFetcher"

const Home = ({ protests }: { protests: [IDemonstration] }) => {
    const [fullHeight, setFullHeight] = useState(false)

    return (
        <>
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
                                            🌐 no address provided
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
                                            🕖 no time provided
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
