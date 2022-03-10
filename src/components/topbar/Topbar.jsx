import "./topbar.scss"; 
import { Person, Mail, LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9421840122</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>singhketan987@gmail.com</span>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <span><a href="https://www.linkedin.com/in/ketan-singh987/">ketan-singh987</a></span>
            </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
