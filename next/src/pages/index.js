import React, { useState, useEffect } from "react"
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity'

import SEO from "../components/seo"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import RichText from "../components/RichText"
import Button from "../components/Button"
import Accordion from '../components/Accordion'
import Portfolio from "../components/Portfolio"
import Social from "../components/Social"
import Form from "../components/Form"
import Journey from '../components/Journey'

const projectDetails = `
  *[_type == 'project']|order(publishDate desc)[$start..$end]{
    ..., logo {..., asset->{...}}, image {..., asset->{ ... }}, tag->{...}
  }
`

const query = groq`{
  'global': *[_type == 'siteSettings'][0]{ ... },
  'page': *[_type == 'homepage'][0]{ ... },
  'experience': *[_type == 'role']|order(start desc),
  'projects': ${projectDetails},
  'totalProjects': count(*[_type == 'project'])
}`

const projectQuery = groq`${projectDetails}`

export async function getStaticProps({ params, preview = false }) {
  const data = await getClient.fetch(query, {start: 0, end: 5})

  return {
    props: { data },
  }
}

const IndexPage = ({ data }) => {
  const { global, page, experience, projects, totalProjects} = data
  const [items, setItems] = useState(projects)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(totalProjects / itemsPerPage)

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(async () => {
    if (currentPage > 1) {
      const start = itemsPerPage * (currentPage - 1)
      const end = start + itemsPerPage - 1
      const projects = await getClient.fetch(projectQuery, {start, end})

      setItems([...items, ...projects])
    }
  }, [currentPage])
  
  return (
    <Layout homepage>
      <SEO title="Homepage" global={global} />
      <Hero/>
      <div style={{ position: `relative` }}>
        <Journey />
        <Section sectionTitle="About me." sectionId="about" alignment="left">
          <RichText blocks={page.about} />
          {/* <Button to="/colettewilsonwyatt_cv.pdf" label="Download my resume" newTab noFollow /> */}
        </Section>
        <Section sectionTitle="Experience." sectionId="experience" alignment="right">
          <Accordion experience={experience} />
        </Section>
      </div>
      <Section sectionTitle="Portfolio." sectionId="portfolio">
        <Portfolio projects={items} />
        {totalPages > currentPage && <Button type="button" label="Load more" onClick={handleLoadMore} />}
      </Section>
      <Section sectionTitle="Contact me." sectionId="contact">
        <Social social={global.socialMedia} />
        <Form />
      </Section>
    </Layout>
  )
}

export default IndexPage
