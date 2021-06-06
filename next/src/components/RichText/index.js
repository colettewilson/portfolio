import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"
import Link from "next/link"

import { LinkTest } from "../../helpers/link"

import styles from "./richText.module.scss"

const serializers = {
  types: {
    undefined: () => null,
    block(props) {
      switch (props.node.style) {
        default:
          return BaseBlockContent.defaultSerializers.types.block(props)
      }
    }
  },
  marks: {
    link: ({children, mark}) => {
      const linkType = LinkTest(mark.link)
      const target = mark.newTab ? {target: "_blank"} : null
      const rel = mark.noFollow ? {rel: "nofollow noopener noreferrer"} : null
      
      return linkType === "internal" ? (
        <Link href={mark.link}><a>{children}</a></Link>
      ) : (
        <a href={mark.link} {...target} {...rel}>{children}</a>
      )
    }
  }
}

const RichText = ({ blocks }) => <div className={styles.richText}><BaseBlockContent blocks={blocks} serializers={serializers} /></div>

export default RichText
