import { useLoaderData } from 'react-router-dom'
import Banner from '../components/layout/Banner'
import Card from '../components/pages/Card'

const Home = () => {
  const data: any = useLoaderData()
  return (
    <div className='grid gap-4 min-h-screen pb-4'>
      <Banner title={true} img={'./coast.png'}/>
      <div className='grid gap-8 md:grid-cols-3 md:p-8 md:bg-secondary md:rounded-xl'>
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