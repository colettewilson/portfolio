/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO(props) {
  const site = useStaticQuery(
    graphql`
      {
        sanitySiteSettings {
          title
          titleSection
          description
          ogImage {
            asset {
              url
            }
          }
        }
      }
    `
  )

  const lang = site.sanitySiteSettings.lang
  const metaTitle = `${props.title} | ${site.sanitySiteSettings.titleSection} | ${site.sanitySiteSettings.title}`
  const metaDescription = props.description || site.sanitySiteSettings.description
  const metaImage = site.sanitySiteSettings.ogImage.asset.url

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage
        }
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
