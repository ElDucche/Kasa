import { useLoaderData } from 'react-router-dom'
import Banner from '../components/home/Banner'
// import Card from '../components/home/Card'

const Home = () => {
  const data: any = useLoaderData()
  return (
    <div className='grid gap-4 min-h-screen'>
      <Banner />
      <div>
        {
          data.map((item:any) => 
          )
        }
      </div>
    </div>
  )
}

export default Home