import pic from "./assets/ali.jpg";
import { useState } from "react";
function Header() {
  const [home, setHome] = useState("home");
  const [user, setUser] = useState("");
  const [experience, setExperience] = useState("");
  const [interests, setInterests] = useState("");
  const [sports, setSports] = useState("");
  const [stories, setStories] = useState("");
  const [shop, setShop] = useState("");
  const [navstate, setnavstate] =useState(false);
  return (
    <header className={`${navstate ? "navheader" : "header"}`}>
      <div className="img">
        <img src={pic} alt="ali" />
        <p id="animtxt" className=""></p>
      </div>
      <div className={`${navstate ? "navrefrence" : "refrence"}`}>
        <button
          className={`iconbox ${home}`}
          onFocus={() =>
            setHome("home") &
            setUser("") &
            setExperience("") &
            setInterests("") &
            setSports("") &
            setStories("") &
            setShop("")
          }
          // onBlur={() => setHome("")}
        >
          <i className="fas fa-house"></i> Home
        </button>
        <button
          className={`iconbox ${user}`}
          onFocus={() =>
            setHome("") &
            setUser("user") &
            setExperience("") &
            setInterests("") &
            setSports("") &
            setStories("") &
            setShop("")
          }
          // onBlur={() => setUser("")}
        >
          <i className="fas fa-user"></i> Profile
        </button>
        <button
          className={`iconbox ${experience}`}
          onFocus={() =>
            setHome("") &
            setUser("") &
            setExperience("experience") &
            setInterests("") &
            setSports("") &
            setStories("") &
            setShop("")
          }
          // onBlur={() => setExperience("")}
        >
          <i className="fas fa-pen"></i> Experience
        </button>
        <button
          className={`iconbox ${interests}`}
          onFocus={() =>
            setHome("") &
            setUser("") &
            setExperience("") &
            setInterests("interests") &
            setSports("") &
            setStories("") &
            setShop("")
          }
          // onBlur={() => setInterests("")}
        >
          <i className="fas fa-file"></i> interests
        </button>
        <button
          className={`iconbox ${sports}`}
          onFocus={() =>
            setHome("") &
            setUser("") &
            setExperience("") &
            setInterests("") &
            setSports("sports") &
            setStories("") &
            setShop("")
          }
          // onBlur={() => setSports("")}
        >
          <i className="fas fa-football"></i> Sports
        </button>
        <button
          className={`iconbox ${stories}`}
          onFocus={() =>
            setHome("") &
            setUser("") &
            setExperience("") &
            setInterests("") &
            setSports("") &
            setStories("stories") &
            setShop("")
          }
          // onBlur={() => setStories("")}
        >
          <i className="fas fa-book"></i> Stories
        </button>
        <button
          className={`iconbox ${shop}`}
          onFocus={() =>
            setHome("") &
            setUser("") &
            setExperience("") &
            setInterests("") &
            setSports("") &
            setStories("") &
            setShop("shop")
          }
          // onBlur={() => setShop("")}
        >
          <i className="fas fa-suitcase"></i> Shop
        </button>
      </div>
      <div className={`${navstate ? "navconnect" : "connect"}`}>
        <div>
          <p className="parag">Connect</p>
        </div>
        <a href="#">
          <div>
            <i className="fab fa-twitter"></i> Twitter
          </div>

          <i className="fas fa-arrow-up-right-from-square unlink"></i>
        </a>
        <a href="#">
          <div>
            <i className="fab fa-telegram"></i> Telegram
          </div>

          <i className="fas fa-arrow-up-right-from-square unlink"></i>
        </a>
        <a href="#">
          <div>
            <i className="fab fa-instagram"></i> Instagram
          </div>

          <i className="fas fa-arrow-up-right-from-square unlink"></i>
        </a>
      </div>
      <button id="nav" className="nav" onClick={() =>  setnavstate(!navstate) }><i className={navstate ? "fas fa-times" : "fas fa-bars"}  ></i></button>
      
    </header>
  );
}
export default Header;
