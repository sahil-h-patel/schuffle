import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import { Outlet } from 'react-router';

function AdminLayout() {

  return (
    <>
      <div className="flex flex-grow h-full w-full">
          <Navbar/>
          <main className="flex-grow p-4">
              <Outlet/>
          </main>
      </div>
      <Footer/>
    </>
    
  
  )
}

export default AdminLayout;
