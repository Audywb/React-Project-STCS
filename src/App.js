import './App.css';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import Navigation from './components/Navigation';
import Home from './components/page/Home'
import Quiz1 from './components/page/Quiz1';
import Quiz02 from './components/page/Quiz02';

// export const DataContext = createContext()

function App() {
  // const [appState,setAppState] = useState("menu")
  // const [score,setScore] = useState(0)
  return (
    <div>
        <Router>
          <Navigation/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/quiz1" component={Quiz1}/>
            <Route path="/quiz02" component={Quiz02}/>
          </Switch>
        </Router>
      </div>
    // <DataContext.Provider value={{appState,setAppState,score,setScore}}>
    //   <div>
    //     <Router>
    //       <Navigation/>
    //       <Switch>
    //         <Route path="/" component={Home} exact/>
    //         <Route path="/quiz1" component={Quiz1}/>
    //       </Switch>
    //     </Router>
    //   </div>
    //   <div className="App">
    //   <h1>แบบทดสอบ</h1>
    //   {appState === "menu" && <Menu/>}
    //   {appState === "quiz" && <Quiz/>}
    //   {appState === "score" && <Score/>}
    // </div>
    // </DataContext.Provider>
  );
}

export default App;
