
// const triger = document.getElementById("nav")
import pic from "./assets/ali.jpg"
const id = document.getElementById("img")

function headswitch(){
    id.innerHTML=(id.innerHTML == (<div className="img" id="img">
            <img src={pic} alt="ali" />
            <p id="animtxt">
              Ali
              <br />
              cooler
            </p>
          </div>) ? (<div className="img" id="img">
            <img src={pic} alt="ali" />
            <p id="animtxt2">
              Ali
              <br />
              cooler
            </p>
          </div>) : (<div className="img" id="img">
            <img src={pic} alt="ali" />
            <p id="animtxt">
              Ali
              <br />
              cooler
            </p>
          </div>)
    )
}