import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import RichText from "../components/richText"
import Button from "../components/button"
import Portfolio from "../components/portfolio"
import Form from "../components/contactForm"

export const query = graphql`
  query {
    sanityHomepage {
      heroTitle
      _rawAbout
    }
    allSanityProject(sort: {fields: publishDate, order: DESC}, limit: 4) {
      edges {
        node {
          _id
          title
          slug { current }
          excerpt
          _rawImage(resolveReferences: {maxDepth: 10})
        }
      }
    }
  }
`

const IndexPage = (props) => {
  const page = props.data.sanityHomepage
  const projects = props.data.allSanityProject.edges.map(({node}) => node)
  return (
    <Layout homepage >
      <SEO title="Homepage" />
      <Hero title={page.heroTitle} extra />
      <Section sectionTitle="About me" sectionId="about">
        <RichText blocks={page._rawAbout} />
        <Button to="https://colette.dev/colettewilsonwyatt_cv.pdf" label="Download my resume" newTab noFollow />
      </Section>
      <Section sectionTitle="Portfolio" sectionId="portfolio">
        <Portfolio projects={projects} />
        <Button to="/portfolio" label="View full portfolio" />
      </Section>
      <Section sectionTitle="Contact me" sectionId="contact">
        <Form />
      </Section>
    </Layout>
  )
}

export default IndexPage
