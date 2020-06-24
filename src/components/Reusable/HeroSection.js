import React from "react"
import gifs from "../../images/plane.gif"
import Typical from "react-typical"
import { FaAngleDoubleDown } from "react-icons/fa"

const HeroSection = ({ title, subtitle, heroclass }) => {
  function goto(id) {
    window.scrollTo({
      top: document.getElementById(id).offsetTop + 30,
      behavior: "smooth",
    })
  }
  return (
    <div className={heroclass}>
      <img src={gifs} alt="..." />
      <h1 className="text-uppercase text-center herotitle">{title}</h1>
      <Typical
        className="typ"
        steps={[
          "Learn Code Smarter Way",
          1000,
          "Learn Code Faster Way",
          1000,
          "Learn Code Safest Way",
          1000,
        ]}
        loop={Infinity}
      />
      <button
        className="btn btn-warning text-dark px-5 py-2 "
        onClick={() => goto("courses")}
      >
        Courses <FaAngleDoubleDown />{" "}
      </button>
    </div>
  )
}

export default HeroSection
