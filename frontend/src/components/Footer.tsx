import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-100 text-base-content p-4">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <div className="grid grid-flow-col gap-4">       
        <FaGithub size={32}/>
      </div>
      <aside>
        <p>Schuffle™ {new Date().getFullYear()} - All right reserved under Sahil Patel</p>
        <p>Version 1.0.0</p>
      </aside>
    </footer>
    );
}

export default Footer;