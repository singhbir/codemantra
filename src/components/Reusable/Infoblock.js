import React from "react"
import Heading from "../Reusable/Heading"
import { Link } from "gatsby"
import img1 from "../../images/aboutus.svg"
import img2 from "../../images/ab1.svg"
import img3 from "../../images/ab2.svg"
import Swiper from "react-id-swiper"

const Infoblock = ({ heading }) => {
  let aus_data = [
    {
      imghd: img1,
      title: "Support",
      subtitle:
        "We have a dedicated support team to answer your questions. Everyone needs help while learning and we are trying to give you the best learning experience!",
    },
    {
      imghd: img2,
      title: "Get Certified",
      subtitle:
        "With all paid courses, earn a verifiable certificate to showcase your skills!",
    },
    {
      imghd: img3,
      title: "Coding Challenges",
      subtitle:
        "Ready to test your learning skills? We Provide You daily coding challenges ",
    },
  ]

  return (
    <section className="bg-theme py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row d-flex justify-content-between">
          {aus_data.map((ele, id) => {
            return (
              <div
                className="card aboutuscard col-md-3 col-sm-12 text-center mb-3"
                key={id}
              >
                <img src={ele.imghd} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ele.title}</h5>
                  <p className="card-text">{ele.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Infoblock
