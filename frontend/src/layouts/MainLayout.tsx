import '../App.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import { Outlet } from 'react-router';

function MainLayout() {

  return (
    <>
      <div className="h-full w-full">
          <Navbar/>
          <main className="flex-grow p-4">
              <Outlet/>
          </main>
      </div>
      <Footer/>
    </>
    
  )
}

export default MainLayout;
