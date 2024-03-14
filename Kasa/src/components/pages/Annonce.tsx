import { useLoaderData } from 'react-router-dom';
import Accordeon from '../layout/Accordeon';
import Tag from '../layout/Tag';
import { FaStar } from "react-icons/fa";


const Annonce = () => {
    const data: any = useLoaderData();
    console.log(data)

    return (
        <div className=' pb-4'>
            <img src={data.cover} alt="" className='rounded-2xl w-full md:h-96 md:overflow-auto mb-4'/>
            <div className="grid md:flex md:justify-between md:gap-4 ">
                <div className="grid w-full h-fit gap-2 mb-4">
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
                
                <div className="flex items-center justify-between w-full md:w-fit md:flex-col-reverse md:justify-between md:items-end">
                    <div className='flex gap-1'>
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
                    <div className='flex items-center gap-4 w-1/3 md:w-full'>
                        <span className='text-primary text-xl text-right'> {data.host.name} </span>
                        <img src={data.host.picture} alt={data.host.name} className='rounded-full w-16' />
                    </div>
                </div>
            </div>

            <div className='grid gap-4 md:flex md:items-start md:justify-between'>
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