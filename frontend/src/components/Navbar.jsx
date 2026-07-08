import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <ShieldCheck size={30} />
        <span>RecruTap</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/analyze">Analyze</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
}

export default Navbar;