import { Link } from "react-router-dom";

const Card = ({data} : {data:any}) => {
   const {id, title, cover} = data
    return (
        <Link to={`/${id}`}className={`h-96 md:h-full md:aspect-square relative bg-cover rounded-xl `} style={{backgroundImage: `url('${cover}')`, boxShadow: 'inset 0px -45px 40px 8px rgba(0,0,0,0.75)'}} >
            <div className="bg-gradient-to-t from-black to-white">
                <h3 className="text-xl font-bold no-underline absolute bottom-4 left-4 text-white w-56">
                        {title}
                </h3>
            </div>
        </Link>
    );
}
export default Card;