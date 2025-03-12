import { FaCalendarAlt, FaCalendarWeek, FaCalendarDay, FaGoogle} from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { Link, useLocation } from 'react-router';
import { useCalendarView } from '../context/CalendarViewContext';

function Navbar() {
  const location = useLocation();
  const isAuthPage = location.pathname == '/login' || location.pathname == '/forgot-password'; // Example for condition
  const { calendarView, setCalendarView } = useCalendarView();

  return (
    <div className="navbar sticky top-0 z-20 flex w-fit h-fit bg-base-100 gap-30 shadow-md mx-auto my-2 rounded-2xl">
    {/* Left section */}
    <div className="flex flex-none">
      <button className="btn btn-ghost gap-2 px-2">
        <span className="font-title text-base-content text-lg md:text-md">
          Schuffle
        </span>
      </button>
    </div>
  
    {/* Centered section */}
    <div 
        className={`flex flex-auto gap-2 justify-center items-center ${isAuthPage ? 'invisible' : ''}`}
        style={{ visibility: isAuthPage ? 'hidden' : 'visible' }} // Keep spacing even when hidden
      >
        {/* Sign-in buttons */}
        <button className="btn">Sign in to <FaGoogle /></button>
        <button className="btn">Sign in to <SiNotion /></button>

        {/* Tabs */}
        <div role="tablist" className="tabs tabs-box">
          <a
            role="tab"
            className={`tab ${calendarView === 'month' ? 'tab-active' : ''}`}
            onClick={() => setCalendarView('month')}
          >
            <FaCalendarAlt />
          </a>
          <a
            role="tab"
            className={`tab ${calendarView === 'week' ? 'tab-active' : ''}`}
            onClick={() => setCalendarView('week')}
          >
            <FaCalendarWeek />
          </a>
          <a
            role="tab"
            className={`tab ${calendarView === 'day' ? 'tab-active' : ''}`}
            onClick={() => setCalendarView('day')}
          >
            <FaCalendarDay />
          </a>
        </div>
      </div>
  
    {/* Right section */}
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="flex-none btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.imgur.com/tlsxTSv.jpeg"
          />
        </div>
      </div>
        <ul
          tabIndex={1}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link to="/">Home</Link></li>
          <li><a>Profile</a></li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
    </div>
    
  </div>
  
  )
}

export default Navbar;
