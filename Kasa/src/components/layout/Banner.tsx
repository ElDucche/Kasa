const Banner = ({title, img} : {title:boolean, img:string}) => {

    return (
            <div className={` h-36 lg:h-44 bg-cover rounded-xl bg-center bg-no-repeat`} style={{backgroundImage: `url(${img})`}}>
                {
                    title ?
                        <h2 className="font-bold text-white text-4xl h-full bg-black/50 rounded-xl pl-4 flex flex-col justify-center lg:items-center">
                            Chez vous, <br className="lg:hidden"/> partout et ailleurs
                        </h2>
                    :
                    <h2 className="font-bold text-white text-4xl h-full bg-black/50 rounded-xl pl-4 flex flex-col justify-center lg:items-center">
                    </h2>
                }
            </div>
    );
}
export default Banner