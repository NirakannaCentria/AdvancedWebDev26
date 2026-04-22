import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="logo">Nordic Brew Café</h1>

        <nav className="main-nav" aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#visit">Visit</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header