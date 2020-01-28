import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { client } from "../components/client"
import { Todos } from "../components/todos"

const IndexPage = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <SEO title="Home" />
        <Todos></Todos>
      </Layout>
    </ApolloProvider>
  )
}

export default IndexPage
