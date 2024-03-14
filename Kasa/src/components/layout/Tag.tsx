const Tag = ({title}:{title: string}) => {
    return (
        <div className='bg-primary rounded-xl px-4 py-2 font-bold text-white text-sm cursor-default'>
            {title}
        </div>
    )
}
export default Tag