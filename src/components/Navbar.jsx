import { NavLink, Link } from "react-router-dom";

const Navbar = ({ cartCount = 0 }) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          ELECTRO<span className="text-primary">HUB</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <NavLink className="nav-link" to={link.path} key={link.name}>
                {link.name}
              </NavLink>
            ))}
            <NavLink
              className="nav-link d-inline-flex align-items-center"
              to="/cart"
            >
              Cart
              <span className="badge bg-primary rounded-pill ms-1">
                {cartCount}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
