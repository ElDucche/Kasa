import { Link } from "react-router-dom";
import kasaLogo from "../../assets/kasa.svg";

const Navbar = () => {
    return (
        <nav className="flex items-center w-full justify-between">
            <img src={kasaLogo} alt="Kasa" className="h-36"/>
            <div className="flex justify-between md:justify-end md:gap-20 w-1/2">
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="/about" className="nav-link">À Propos</Link>
            </div>
        </nav>
    );
}
export default Navbar