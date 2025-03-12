import { SiNotion } from "react-icons/si";
import GoogleLoginButton from "@components/GoogleLoginButton";
function Connect() {

  return (
    <>
    <div className="card bg-base-100 flex-grow">
      <div className="card-body gap-5"> 
        <div>
          <h1 className="text-base-content font-medium text-2xl">Connect to both 3rd Party Services</h1>
          <h2 className="text-base-content font-normal text-xs">Highly preferred for better synchronization</h2>
        </div>
          <div className='flex flex-col gap-2 mx-auto'>
            <GoogleLoginButton/>
            <button className='btn w-64'> Connect to <SiNotion /> </button>
          </div>
          <div className='flex flex-row justify-around gap-2'>
            <button className='btn btn-neutral'>Skip</button>
            <button className='btn btn-primary'>Continue</button>
          </div>
        </div>
    </div>
    </>
    
  )
}

export default Connect;
