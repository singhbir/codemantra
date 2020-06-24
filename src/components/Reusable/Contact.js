import React from "react"

const Contact = () => {
  {
    console.log("type", typeof process.env.FORM_SUBMIT)
  }
  return (
    <section style={{ height: "64.5vh" }}>
      <div className="col-10 col-sm-8 mx-auto mb-5">
        <form action={process.env.FORM_SUBMIT} method="post">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="Phone"
              id="Phone"
              placeholder="Phone"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Message"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
