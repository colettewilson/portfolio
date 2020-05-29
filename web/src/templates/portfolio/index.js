import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Section from "../../components/section"
import Portfolio from "../../components/portfolio"
import Pagination from "../../components/pagination"

export const query = graphql`
  query ($skip: Int, $limit: Int) {
    allSanityProject(limit: $limit, skip: $skip) {
      edges {
        node {
          title
          slug { current }
          excerpt
          _rawImage(resolveReferences: {maxDepth: 10})
        }
      }
    }
  }
`

const PortfolioIndex = (props) => {
  const { currentPage, projectPages } = props.pageContext
  const projects = props.data.allSanityProject.edges.map(({node}) => node)
  return (
    <Layout>
      <Hero title="Frontend portfolio" />
      <Section>
        <Portfolio projects={projects} alt />
        {projectPages > 1 && <Pagination base="portfolio/" currentPage={currentPage} totalPages={projectPages} />}
      </Section>
    </Layout>
  )
}

export default PortfolioIndex
