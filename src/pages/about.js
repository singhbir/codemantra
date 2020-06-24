import React from "react"
import Layout from "../components/layout"
import Card from "../components/Reusable/Card"
const about = () => {
  return (
    <Layout>
      <div className="wholeabout">
        <h1 className="text-white devtext mb-5">
          <span className="text-warning">ABOUT</span> DEVELOPER
        </h1>
        <Card />
      </div>
    </Layout>
  )
}

export default about
