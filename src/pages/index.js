import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Coursecart from "../Cart/Coursecart"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Herosection
      title="Welcome To CodeMantra"
      subtitle="Always Remember why you started "
      heroclass="hero-bg"
    />
    <Infoblock heading="Why us" />
    <Coursecart courses={data.courses} id="courses" />
  </Layout>
)

export const query = graphql`
  {
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(height: 120, width: 250) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
