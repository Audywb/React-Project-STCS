import '../App.css';
import { useContext } from "react"
import { DataContext } from "./page/Quiz1"

const Menu = ()=>{
    const {setAppState} = useContext(DataContext)
    return(
        <div className="menu">
            <h1>Menu Components</h1>
            <button onClick={()=>setAppState("quiz")}>ทำแบบทดสอบ</button>
        </div>
    )
}

export default Menu