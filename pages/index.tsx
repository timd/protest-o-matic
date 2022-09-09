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
                                            limit={55}
                                            setFullHeight={setFullHeight}
                                        />
                                    </CCardTitle>
                                    {protest.strasse_nr ? (
                                        <CCardText>
                                            🌐 {protest.strasse_nr}
                                            {", "}
                                            {protest.plz}
                                        </CCardText>
                                    ) : (
                                        <CCardText>
                                            🌐 no address provided
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
