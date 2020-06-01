import React from "react"
import Image from "gatsby-image/withIEPolyfill"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import { config } from "../helpers/clientConfig"

const Figure = (node) => {
  const imgObject = node.asset || node.image.asset
  const fit = node.fit ? node.fit : "contain"

  const fluidProps = getFluidGatsbyImage(
    imgObject,
    { maxWidth: 800 },
    config
  )
  return (
    <>
      {imgObject.extension === "gif" ? (
        <figure data-size={node.size ? node.size.toLowerCase() : 'large'}>
          <img src={imgObject.url} alt={node.alt} />
        </figure>
      ) : (
        <figure data-size={node.size ? node.size.toLowerCase() : 'large'}>
          <Image fluid={fluidProps} objectFit={fit} alt={node.alt} />
        </figure>
      )}
    </>
  )
}

export default Figure