import type { NextPage } from "next"
import { CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react"
import { getProtests } from "../lib/apiFetcher"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const Home: NextPage = ({ protests }) => {
    console.log(protests[0])
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
