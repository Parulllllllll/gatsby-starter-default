import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi peoplemyself parull </h1>
    <p>Welcome to your new Gatsby site of parul .</p>
    <p>Now go build something great okkk.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 1 2</Link> <br />
      <Link to="/using-typescript/">Go to 2 "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to  3"Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to 4 "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
