import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react'

const Accordeon = ({title, children} : {title:string, children:any}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isFirstTime, setIsFirstTime] = useState(true)
    return (
        <div className='rounded-xl w-full relative'>
                <button className="z-10 transform text-lg font-semibold text-white border-none rounded-xl w-full h-12 bg-primary p-4 flex items-center justify-between cursor-pointer" onClick={() => {setIsOpen(!isOpen); setIsFirstTime(false)}}>
                    {title}
                    
                    <FaChevronRight size={25} style={isOpen ? {transform: "rotate(90deg)"} : {transform: "rotate(-90deg)"}} className='transition-all'/>
    
                </button>
                
                <div className={`relative -z-10 bg-secondary pt-8 p-4 text-black ${isOpen ? 'animate-reveal' : 'animate-hide'} ${isFirstTime ? 'hidden' : ''}`} >
                    {children}
                </div>
        </div>
    )
}
export default Accordeon;

