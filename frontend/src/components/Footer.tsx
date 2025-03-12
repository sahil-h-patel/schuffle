import { FaGithub } from "react-icons/fa";
import { SiDjango, SiVite, SiReact, SiDaisyui} from "react-icons/si";

function Footer() {
    return (
    <footer className="footer sm:footer-horizontal bg-base-100 text-base-content gap-30 p-5 w-full justify-around shadow-md border border-base-300 rounded-t-4xl">
        <aside className="italic">
        <p>
        Schuffle™ {new Date().getFullYear()} 
         <br />
         All right reserved under Sahil Patel        
         </p>
        <p>Version 1.0.0</p>
      </aside>
      <nav className="gap-0">
      <h6 className="footer-title underline">Socials:</h6>
        <div className="grid grid-flow-col gap-4">
            <a className="link link-hover my-auto">About us</a>
            <div className="divider lg:divider-horizontal"></div>
            <a className="link link-hover my-auto">Contact</a>
            <div className="divider lg:divider-horizontal"></div>
            <FaGithub size={24}/>
        </div>
      </nav>
      <nav className="gap-0">
      <h6 className="footer-title underline">Made with:</h6>    
      <div className="grid grid-flow-col gap-4">   
        <SiReact size={24}/>
        <SiDjango size={24}/>
        <SiVite size={24}/>
        <SiDaisyui size={24}/>
      </div>
      </nav>
    </footer>
    );
}

export default Footer;