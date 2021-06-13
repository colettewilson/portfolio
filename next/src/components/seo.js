import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"

import { urlFor } from '../lib/sanity'

const SEO = (props) => {
  const lang = props.global.lang || 'en'
  const metaTitle = `${props.title} | ${props.global.titleSection} | ${props.global.title}`
  const metaDescription = props.description || props.global.description
  const metaImage = props.global.ogImage

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" property="og:title" content={props.title} />
      <meta property="og:type" content="website" />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta property="og:site_name" content={props.global.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta
        name="twitter:description"
        content={metaDescription}
      />
      <meta name="twitter:site" content={metaTitle} />
      <meta property="og:image" content={urlFor(metaImage)} />
      <meta name="twitter:image" content={urlFor(metaImage)} />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
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
