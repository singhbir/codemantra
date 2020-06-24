import React from "react"
import Layout from "../components/layout"
import Contact from "../components/Reusable/Contact"

const contact = () => {
  return (
    <Layout>
      <h1
        className="text-center  pt-5 mb-3 text-danger"
        style={{ fontSize: "60px" }}
      >
        Contact Us
      </h1>
      <Contact />
    </Layout>
  )
}
export default contact
