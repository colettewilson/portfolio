import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Section from "../../components/section"
import RichText from "../../components/richText"
import FormattedList from "../../components/formattedList"
import Button from "../../components/button"
import Gallery from "../../components/gallery"

export const query = graphql`
  query ($slug: String) {
    sanityProject(slug: {current: {eq: $slug}}) {
      title
      _rawBody
      _rawStack(resolveReferences: {maxDepth: 10})
      website
      _rawGallery(resolveReferences: {maxDepth: 10})
    }
  }
`

const PortfolioTemplate = (props) => {
  const project = props.data.sanityProject
  return (
    <Layout>
      <Hero title={project.title} />
      <Section sectionTitle="About the project">
        {project._rawBody && <RichText blocks={project._rawBody} />}
        {project._rawStack && <>
          <h3 style={{marginTop: `32px`}}>The Stack</h3>
          <FormattedList>
            {project._rawStack.map(tool =>
              <li key={tool._id}>{tool.name}</li>
            )}
          </FormattedList>
        </>}
        {project.website && <Button to={project.website} label="View the site" newTab noFollow />}
      </Section>
      {project._rawGallery && <Gallery images={project._rawGallery} />}
    </Layout>
  )
}

export default PortfolioTemplate
