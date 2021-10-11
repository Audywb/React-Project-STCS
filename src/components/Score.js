import '../App.css';
import { DataContext } from '../App';
import { useContext } from 'react';
import QuestionsData from '../data/QuestionsData';

const Score = ()=>{
    const {score, setAppState,setScore} = useContext(DataContext)

    const restartApp=()=>{
        setScore(0)
        setAppState("menu")
    }

    return(
        <div className="score">
            <h1>คะแนนที่ได้</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    )
}

export default Score