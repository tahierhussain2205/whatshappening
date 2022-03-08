import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center border-top py-4">
      <small className="text-muted">
        Developed by <Link to="/">Tahier Hussain</Link>
      </small>
    </footer>
  );
}

export default Footer;
