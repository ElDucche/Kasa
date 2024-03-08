import { Link } from "react-router-dom";

const Card = () => {
   
    return (
        <Link to={`/`} className={`bg-primary w-44 relative bg-contain`}>
            <h3 className="text-white fonct-bold text-xl">Coucou</h3>
        </Link>
    );
}
export default Card;