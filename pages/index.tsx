import type { NextPage } from "next"
import { CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react"
import { getProtests } from "../lib/apiFetcher"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const Home: NextPage = ({ protests }) => {
    console.log(protests[0])
    return (
        <main>
            <CCard style={{ width: "18rem ", height: "12rem" }}>
                <CCardBody>
                    <CCardTitle>{protests[0].thema}</CCardTitle>
                    <CCardText>
                        {protests[0].strasse_nr} {protests[0].plz}
                    </CCardText>
                </CCardBody>
            </CCard>
        </main>
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
