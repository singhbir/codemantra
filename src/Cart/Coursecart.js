import React, { useState } from "react"
import Img from "gatsby-image"
import Heading from "../components/Reusable/Heading"

const Coursecart = ({ courses, id }) => {
  function getCate(items) {
    let holdItems = items.map(item => {
      return item.node.category
    })
    let categories = [...new Set(holdItems)]
    categories = ["all", ...categories]
    return categories
  }

  const [course, setCourse] = useState(courses.edges)
  const [mycourse, setMycourse] = useState(courses.edges)
  const [categories, setCategories] = useState(getCate(courses.edges))

  function showCateProduct(category) {
    let allcourses = [...course]
    if (category === "all") {
      setMycourse(allcourses)
    } else {
      let categoryCourses = allcourses.filter(
        ({ node }) => node.category === category
      )
      console.log(categoryCourses)
      setMycourse(categoryCourses)
    }
  }

  return (
    <section className="py-5" id={id}>
      <div className="container">
        <Heading title="Courses" />
        <div className="row mb-5">
          <div className="col-10 mx-auto text-center">
            {categories.map((category, index) => {
              return (
                <button
                  type="button"
                  className="btn btn-info m-3 px-3"
                  key={index}
                  onClick={() => showCateProduct(category)}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>
        <div className="row">
          {mycourse.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="col-sm-12 col-md-6 d-flex mx-auto mb-3"
              >
                <Img fixed={node.image.fixed} />
                <div className="flex-grow-1 px-3">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">{node.title}</h6>
                    <h6 className="mb-0 text-success">${node.price}</h6>
                  </div>
                  <p className="text-muted">
                    <small>{node.description.description}</small>
                  </p>
                  <button
                    className="btn btn-warning snipcart-add-item"
                    data-item-id={node.id}
                    data-item-name={node.title}
                    data-item-price={node.price}
                    data-item-url="http://localhost.com"
                    data-item-image={node.image.fixed.src}
                    data-item-description={node.description.description}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Coursecart
