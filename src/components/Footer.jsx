import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-top py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted small mb-0">
              © 2026 ElectroHub — Farouk Dendachli - project Phase 2
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <Link className="small text-decoration-none me-3" to="/about">
              About
            </Link>
            <Link className="small text-decoration-none" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
