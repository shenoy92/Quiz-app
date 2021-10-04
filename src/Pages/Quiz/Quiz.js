import Question from '../../Components/Questions/Questions'
import { CircularProgress } from "@material-ui/core";
import {useState} from 'react'
const Quiz=({data,name,score,setScore,setData,setQues1,setQues2,setQues3,setQues4})=>{
    
    const [currQues, setCurrQues] = useState(0);
    
    return (
   
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {data ? (
        <>
        <div className="quizInfo">
            <span>Difficulty Level: {data[currQues].difficulty}</span>
            <span>Markes Allocated : {data[currQues].marksallocated}</span>
        </div>
        <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            data={data}
            correct={data[currQues]?.answer}
            score={score}
            setScore={setScore}
            setData={setData}
            setQues1={setQues1} 
            setQues2={setQues2} 
            setQues3={setQues3}
            setQues4={setQues4}
        />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
            
    </div>
        
    )
}

export default Quiz
