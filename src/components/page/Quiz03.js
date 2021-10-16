import '../../App.css';
import {createContext, useState} from "react"
import Menu from "../Menu2"
import Quiz from "../Quiz2"
import Score from "../Score2"

export const DataContext = createContext()

function Quiz02() {
  const [appState,setAppState] = useState("menu")
  const [score,setScore] = useState(0)
  return (
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className="App">
      <h1>แบบทดสอบ2</h1>
      {appState === "menu" && <Menu/>}
      {appState === "quiz" && <Quiz/>}
      {appState === "score" && <Score/>}
    </div>
    </DataContext.Provider>
  );
}

export default Quiz02;
