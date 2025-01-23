import '../App.css'
import Footer from '@components/Footer'
import { Outlet } from 'react-router';

function AuthLayout() {

  return (
    <>
      <div className="flex flex-grow flex-col items-center m-auto justify-center">
        <div className="hero bg-base-100 rounded-2xl">
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
