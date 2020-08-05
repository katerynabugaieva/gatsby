import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
      <Header headerText="It's pretty cool" />
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
    </Layout>
  )
}
