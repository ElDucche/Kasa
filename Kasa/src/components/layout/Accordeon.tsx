import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
const Accordeon = ({title, children} : {title:string, children:any}) => {
    return (
        <div className='bg-secondary rounded-xl h-fit w-full'>
            <Disclosure>
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <>
                        <Disclosure.Button className="text-lg font-semibold text-white border-none rounded-xl w-full h-12 bg-primary p-4 flex items-center justify-between">
                            {title}
                            {open ? <ChevronDownIcon className='w-12' /> : <ChevronUpIcon className='w-12' />}
            
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-200 ease-out transform"
                            enterFrom="transition-all transform scale-95 opacity-0 -translate-y-1/2"
                            enterTo="transition-all transform scale-100 opacity-100 translate-y-0"
                            leave="transition-all transition duration-75 ease-in-out"
                            leaveFrom="transition-all transform scale-100 opacity-100 h-full"
                            leaveTo="transition-all transform scale-95 opacity-0 h-0"
                        >

                            <Disclosure.Panel className=' bg-secondary p-4 text-black pt-4' >
                                {children}
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default Accordeon;

