import {
    MdAccountCircle,
    MdSettings,
    MdCalendarToday,
    MdTaskAlt
} from 'react-icons/md'
import LoginButton from './LoginButton';

function Navbar() {
   return (
     <>
     <header className="bg-zinc-700 w-screen">
        <nav className="flex justify-center p-1 lg:px-8" aria-label="Global">
            <div className="flex space-x-2 items-center">
                <a href="" className="p-2">
                    <MdAccountCircle size={35}></MdAccountCircle>
                </a>
                <a href="" className="p-2">
                    <MdSettings size={35}></MdSettings>
                </a>
                <a href="" className="p-2">
                    <MdCalendarToday size={35}></MdCalendarToday>
                </a>
                <a href="" className="p-2">
                    <MdTaskAlt size={35}></MdTaskAlt>
                </a>
                <a>
                    <LoginButton></LoginButton>
                </a>
            </div>
         </nav>
      </header>
     </>
   );
}

export default Navbar;
