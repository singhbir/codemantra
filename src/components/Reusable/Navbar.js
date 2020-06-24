import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaCartArrowDown } from "react-icons/fa"

const Navbar = () => {
  let [navs, setNavs] = useState({
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
  })

  const [menu, setMenu] = useState([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ])

  const myToggle = () => {
    navs.navbarState
      ? setNavs({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : setNavs({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        })
  }

  return (
    <nav className="navbar navbar-expand-sm bg-theme text-white">
      <Link to="/" className="navbar-brand ml-3">
        <img src={logo} alt="logo" width="40px" className="mb-0" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => myToggle()}
      >
        <span className="text-white">Menu</span>
      </button>
      <div className={navs.navbarClass}>
        <ul className="navbar-nav ml-auto mr-5">
          {menu.map((item, id) => {
            return (
              <li className="nav-item mx-3" key={id}>
                <Link to={item.url} className="nav-link text-white">
                  {item.name}
                </Link>
              </li>
            )
          })}
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              <FaCartArrowDown className="cart-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
