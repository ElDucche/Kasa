import { Link } from "react-router-dom";

const Card = ({data} : {data:any}) => {
   const {id, title, cover} = data
    console.log(id)
    return (
        <div className={`aspect-square bg-[url(${cover})] relative bg-cover rounded-xl`} style={{backgroundImage: `url(${cover})`}}>
            <Link to={`/`} className="text-xl font-bold no-underline absolute bottom-2 left-2 text-white w-44">
                {title}
            </Link>
        </div>
    );
}
export default Card;