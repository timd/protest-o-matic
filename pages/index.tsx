import { CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react"
import Slug from "../components/Slug"

import { IDemonstration, getProtests } from "../lib/apiFetcher"

const Home = ({ protests }: { protests: [IDemonstration] }) => {
    return (
        <>
            <main>
                {protests &&
                    protests.map((protest, index) => (
                        <div className="" key={index}>
                            <CCard>
                                <CCardBody>
                                    <CCardTitle>
                                        <Slug
                                            contents={protest.thema}
                                            limit={55}
                                        />
                                    </CCardTitle>
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
