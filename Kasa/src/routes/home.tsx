import { useLoaderData } from 'react-router-dom'
import Banner from '../components/layout/Banner'
import Card from '../components/layout/Card'

const Home = () => {
  const data: any = useLoaderData()
  return (
    <div className='grid gap-4 min-h-screen pb-4'>
      <Banner title={true} img={'./coast.png'}/>
      <div className='grid gap-8 lg:grid-cols-3 lg:p-8 lg:bg-secondary lg:rounded-xl'>
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