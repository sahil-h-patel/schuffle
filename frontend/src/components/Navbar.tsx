import '../App.css'
import { FaCalendarAlt, FaCalendarWeek, FaCalendarDay, FaGoogle} from "react-icons/fa";
import { SiNotion } from "react-icons/si";

function Navbar() {

  return (
    <div className="navbar w-full bg-base-100 shadow-md gap-1.5">
    {/* Left section */}
    <div className="flex flex-none">
      <button className="btn btn-ghost gap-2 px-2">
        <span className="font-title text-base-content text-lg md:text-md">
          Schuffle
        </span>
      </button>
    </div>
  
    {/* Centered section */}
    <div className="flex flex-auto gap-2 justify-center items-center">
      {/* Sign-in buttons */}
      <button className="btn">Sign in to <FaGoogle /></button>
      <button className="btn">Sign in to <SiNotion /></button>
  
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-box">
        <a role="tab" className="tab"><FaCalendarAlt /></a>
        <a role="tab" className="tab tab-active"><FaCalendarWeek /></a>
        <a role="tab" className="tab"><FaCalendarDay /></a>
      </div>
    </div>
  
    {/* Right section */}
    <div tabIndex={0} role="button" className="flex-none btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src="https://i.imgur.com/tlsxTSv.jpeg"
        />
      </div>
    </div>
  </div>
  
  )
}

export default Navbar;
