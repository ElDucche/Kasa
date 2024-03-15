import { useLoaderData } from 'react-router-dom';
import Accordeon from '../layout/Accordeon';
import Tag from '../layout/Tag';
import { FaStar } from "react-icons/fa";
import Slideshow from '../layout/Slideshow';
import ErrorPage from '../../error-page';


const Annonce = () => {
    const data: any = useLoaderData();
    console.log(data)
    if (!data) return <ErrorPage />
    return (
        <div className=' pb-4'>
            <Slideshow photos={data.pictures} />
            <div className="grid lg:flex lg:justify-between lg:gap-4 mb-4">
                <div className="grid w-full h-fit gap-2">
                    <h1 className='text-primary font-medium text-4xl'>{data.title}</h1>
                    <h2 className="font-medium text-2xl">{data.location}</h2>
                    <div className='flex items-center gap-4'>
                        {
                            data.tags.map((tag:string, index:number) => 
                                <Tag key={index} title={tag}/>
                            )
                        }
                    </div>
                </div>
                
                <div className="flex items-center justify-between w-full lg:w-fit lg:flex-col-reverse lg:justify-between lg:items-end">
                    <div className='flex gap-1 lg:gap-3'>
                        {
                            Array(+data.rating).fill(0).map((_, index) => 
                                <FaStar key={index} size={25} className='text-primary'/>
                            )
                        }
                        {
                            Array(5 - data.rating).fill(0).map((_, index) => 
                                <FaStar key={index} size={25} className='text-secondary'/>
                            )
                        }
                    </div>
                    <div className='flex items-center gap-4 w-1/3 lg:w-full'>
                        <span className='text-primary text-xl lg:text-2xl text-right'> {data.host.name} </span>
                        <img src={data.host.picture} alt={data.host.name} className='rounded-full w-16 lg:w-20' />
                    </div>
                </div>
            </div>

            <div className='grid gap-4 lg:flex lg:items-start lg:justify-between lg:gap-24'>
                <Accordeon title='Description'>
                    {data.description}
                </Accordeon>
                <Accordeon title='Equipements'>
                    {
                        data.equipments.map((equipement:string, index:number) => 
                            <p key={index} className=''>{equipement}</p>
                        )
                    }
                </Accordeon>
            </div>
        </div>
    );
};

export default Annonce;