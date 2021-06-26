import React from "react"
import Link from "next/link"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

const NotFoundPage = () => (
  <Layout>
    <Hero title="Oh 💩! Page not found" alt>
      <p>Looks like you landed on a page that doesn't exist. You'll probably find what you're looking for on the <Link href="/"><a>homepage</a></Link>, if not you can always <Link href="/#contact"><a>contact me</a></Link>.</p>
    </Hero>
  </Layout>
)

export default NotFoundPage
