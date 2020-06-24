import React from "react"

const Heading = ({ title }) => {
  return (
    <div className="row">
      <div className="col text-center mb-4">
        <h1 className="display-3 text-warning glow">{title}</h1>
      </div>
    </div>
  )
}

export default Heading
