import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Section from "../../components/section"
import RichText from "../../components/richText"
import FormattedList from "../../components/formattedList"
import Button from "../../components/button"

export const query = graphql`
  query ($slug: String) {
    sanityProject(slug: {current: {eq: $slug}}) {
      title
      _rawBody
      _rawStack(resolveReferences: {maxDepth: 10})
      website
    }
  }
`

const PortfolioTemplate = (props) => {
  const project = props.data.sanityProject
  return (
    <Layout>
      <Hero title={project.title} />
      <div className="grid" style={{marginTop: `32px`}}>
        <div className="gridItem large-10 large-offset-1">
          <Link to="/portfolio">Return to portfolio</Link>
        </div>
      </div>
      <Section sectionTitle="About the project">
        {project._rawBody && <RichText blocks={project._rawBody} />}
        {project._rawStack && <>
          <h3>The Stack</h3>
          <FormattedList>
            {project._rawStack.map(tool =>
              <li>{tool.name}</li>
            )}
          </FormattedList>
        </>}
        {project.website && <Button to={project.website} label="View the site" newTab noFollow />}
      </Section>
      <Section sectionTitle="The gallery"></Section>
    </Layout>
  )
}

export default PortfolioTemplate
