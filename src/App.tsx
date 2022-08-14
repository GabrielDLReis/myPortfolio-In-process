import {useState} from "react"

import './App.css'
import Layouts from "./components/Layouts"

function App() {
  
  const [changeTheme, setChangeTheme] = useState(false)
  console.log(changeTheme)
  return ( <div className="cicle">


    <div className={changeTheme ? "App" : "AppTwo"}>
      
      <div onClick={() => setChangeTheme(changeTheme == false ? true : false)}className={changeTheme ? "lightOff" : "lightOn" }>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.5 38V22H11.35q-.75 0-1.225-.625-.475-.625-.225-1.325L14.2 6.1q.3-.95 1.1-1.525T17.1 4h13.8q1 0 1.8.575T33.8 6.1l4.3 13.95q.25.7-.225 1.325T36.65 22H25.5v16Zm-9.15-19h21.3l-3.7-12h-13.9Zm3.15 25v-3h15v3ZM24 13Z" className="lightFill"  /></svg>
    </div>
        <Layouts themeChanger={changeTheme}/>
      </div>
    </div>
  )
}

export default App
