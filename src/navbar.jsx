import { Link, useLocation } from "react-router-dom";
import pic from "./assets/ali.jpg";
import { useState } from "react";
export default function Navbar() {
  const location = useLocation();
  const [home, setHome] = useState("home");
  const [user, setUser] = useState("");
  const [experience, setExperience] = useState("");
  const [navstate, setnavstate] = useState(false);
  return (
    <aside className={`${navstate ? "navheader" : "header"}`}>
      <div className="img">
        <img src={pic} alt="ali" />
        <p id="animtxt">
          Ali
          <br />
          cooler
        </p>
      </div>
      <div className={`${navstate ? "navrefrence" : "refrence"}`}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <button
            className={`iconbox ${home}`}
            onFocus={() =>
              setHome("home") &
              setUser("") &
              setExperience("") 
       
            }
            // onBlur={() => setHome("")}
          >
            <i className="fas fa-house"></i> Home
          </button>
        </Link>
        <Link to="user" className={location.pathname === "user" ? "active" : ""}>
        <button
          className={`iconbox ${user}`}
          onFocus={() =>
            setHome("") &
            setUser("user") &
            setExperience("") 
          }
          // onBlur={() => setUser("")}
        >
          <i className="fas fa-user"></i> Profile
        </button>
        </Link>
        <Link to="experience" >
        <button
          className={`iconbox ${experience}`}
          onFocus={() =>
            setHome("") &
            setUser("") &
            setExperience("experience") 
          }
          // onBlur={() => setExperience("")}
        >
          <i className="fas fa-pen"></i> Experience
        </button>
        </Link >

      </div>
      <div className={`${navstate ? "navconnect" : "connect"}`}>
        <div>
          <p className="parag">Connect</p>
        </div>
        <a href="https://t.me/shura_no_okami">
          <div>
            <i className="fab fa-telegram"></i> Telegram
          </div>

          <i className="fas fa-arrow-up-right-from-square unlink"></i>
        </a>
        <a href="https://instagram.com/ali.zadesalim">
          <div>
            <i className="fab fa-instagram"></i> Instagram
          </div>

          <i className="fas fa-arrow-up-right-from-square unlink"></i>
        </a>
      </div>
      <button id="nav" className="nav" onClick={() => setnavstate(!navstate)}>
        <i className={navstate ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
    </aside>
  );
}
