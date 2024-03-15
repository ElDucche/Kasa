import { Outlet } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"



const Layout = () => {

  return (
      <div className="relative min-h-screen grid content-between">
        <div className="w-11/12 mx-auto">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
  )
}

export default Layout