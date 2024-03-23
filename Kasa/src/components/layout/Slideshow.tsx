import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Slideshow = ({photos}: {photos: string[]}) => {
    const [index, setIndex] = useState(0)
    const increaseIndex = () => {
        if(index === photos.length-1) {
            setIndex(0)
        } else {
            setIndex(index+1)
        }
    }
    const decreaseIndex = () => {
        if(index === 0) {
            setIndex(photos.length-1)
        } else {
            setIndex(index-1)
        }
    }
    return (    
        <div className="flex justify-between relative items-center bg-cover h-96 bg-center rounded-2xl mb-4" style={{backgroundImage: `url(${photos[index]})`}}>
            <button className={`${photos.length == 1 ? 'hidden' : "text-white border-none outline-none bg-white/0 cursor-pointer drop-shadow-sm"}`} onClick={decreaseIndex}><ChevronLeftIcon className="h-36"/></button>
            <div className="absolute bottom-8 left-1/2 text-white p-2 font-medium">{index+1}/{photos.length}</div>
            <button className={`${photos.length == 1 ? 'hidden' : "text-white border-none outline-none bg-white/0 cursor-pointer drop-shadow-sm"}`} onClick={increaseIndex}> <ChevronRightIcon className="h-36"/> </button>
        </div> 
    )
}

export default Slideshow