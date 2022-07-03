import { CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react"

import { IDemonstration, getProtests } from "../lib/apiFetcher"

const Home = ( { protests } : { protests: [IDemonstration] }) => {
    return (
        <>
            <main>
                {protests &&
                    protests.map((protest, index) => (
                        <div className="card" key={index}>
                            <CCard
                                style={{
                                    width: "25vw",
                                    height: "30vh",
                                    overflow: "scroll",
                                }}
                            >
                                <CCardBody>
                                    <CCardTitle>{protest.thema}</CCardTitle>
                                    <CCardText>
                                        {protest.strasse_nr} {protest.plz}
                                    </CCardText>
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
