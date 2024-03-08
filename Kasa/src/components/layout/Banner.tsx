const Banner = ({title, img} : {title:boolean, img:string}) => {

    return (
            <div className={`bg-fixed h-36 md:h-44 bg-contain rounded-xl`} style={{backgroundImage: `url(${img})`}}>
                {
                    title ?
                        <h2 className="font-bold text-white text-4xl h-full bg-black/70 rounded-xl pl-4 flex flex-col justify-center md:items-center">
                            Chez vous, <br className="md:hidden"/> partout et ailleurs
                        </h2>
                    :
                    <h2 className="font-bold text-white text-4xl h-full bg-black/70 rounded-xl pl-4 flex flex-col justify-center md:items-center">
                    </h2>
                }
            </div>
    );
}
export default Banner