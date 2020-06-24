import React from "react"
import "./card.scss"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Card = () => {
  return (
    <div>
      <div className="card1">
        <div className="card__face card__face--front">
          <img src="https://avatars1.githubusercontent.com/u/31374368?v=4" />
        </div>
        <div className="card__face card__face--back d-flex justify-content-around align-items-center">
          <a href="https://github.com/singhbir" target="_blank">
            <FaGithub className="text-dark" style={{ fontSize: "40px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/birvarindersingh/"
            target="_blank"
          >
            <FaLinkedin className="text-dark" style={{ fontSize: "40px" }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
