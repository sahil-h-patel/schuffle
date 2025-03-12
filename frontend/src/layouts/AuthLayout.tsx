import Footer from '@components/Footer'
import Navbar from '@components/Navbar';
import { Outlet } from 'react-router';

function AuthLayout() {

  return (
    <>
      <Navbar/>
      <div className="flex flex-grow flex-col items-center m-auto justify-center">
        <div className="hero bg-base-100 rounded-2xl shadow-md border-base-content">
          <div className="hero-content flex-row-reverse">
            <Outlet/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AuthLayout;
