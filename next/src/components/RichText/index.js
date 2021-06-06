import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"

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
  }
}

const RichText = ({ blocks }) => <div className={styles.richText}><BaseBlockContent blocks={blocks} serializers={serializers} /></div>

export default RichText
