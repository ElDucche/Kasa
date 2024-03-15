const Tag = ({title}:{title: string}) => {
    return (
        <div className='bg-primary rounded-xl w-36 py-2 font-bold text-white text-xs text-center cursor-default'>
            {title}
        </div>
    )
}
export default Tag