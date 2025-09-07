import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav-sbeam">
            <div className="container d-flex align-items-center gap-5">
                <div className="d-flex align-items-center">
                    <Link to="/">
                        <img src="/sbeam-logo.png" alt="sbeam-logo" className="logo-sbeam me-3" />
                    </Link>
                    <div className="d-flex nav-sbeam-text">
                        <Link to="/" className="me-3">NEGOZIO</Link>
                        <Link to="#" className="me-3">COMMUNITY</Link>
                        <Link to="#" className="me-3">INFORMAZIONI</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
