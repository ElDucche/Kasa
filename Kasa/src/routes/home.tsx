import { useLoaderData } from 'react-router-dom'
import Banner from '../components/layout/Banner'
import Card from '../components/home/Card'
// import Card from '../components/home/Card'

const Home = () => {
  const data: any = useLoaderData()
  return (
    <div className='grid gap-4 min-h-screen pb-4'>
      <Banner title={true} img={'./coast.png'}/>
      <div className='grid gap-8 md:grid-cols-3 md:p-8 md:bg-[#F6F6F6] md:rounded-xl'>
        {
          data.map((item:any) => 
            <Card key={item.id} data={item} />
          )
        }
      </div>
    </div>
  )
}

export default Home