import React from "react"
import Layout from "../components/Layout"
import Landing from "../components/Landing"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <section>
        <Landing />
      </section>
    </Layout>
  )
}