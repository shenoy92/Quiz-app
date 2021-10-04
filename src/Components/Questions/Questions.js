import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMsg";

const Question = ({
  currQues,
  setCurrQues,
  data,
  correct,
  setScore,
  score,
  setData,
  setQues1,setQues2,setQues3,setQues4
}) => {
  const[answer,setAnswer]=useState(0)
  const history = useHistory();


  const handleCheck = (answer) => {
     if(currQues==0){
         setQues1(answer)
     }else if(currQues==1){
         setQues2(answer)
     }else if(currQues==2){
        setQues3(answer)
    }else if(currQues==3){
        setQues4(answer)
    }
    console.log(correct)
    if (answer == correct) 
        setScore(score+ 1);
  
  };

  const handleNext = () => {
    if (currQues==3) {
      history.push("/result");
    } else if (i) {
      setCurrQues(currQues + 1);
    } 
  };

  const handleBack = () => {
    if (i && currQues!=0) {
      setCurrQues(currQues-1 );
    }else{
      history.push("/");
    } 
  };

  const handleQuit = () => {
    setCurrQues(0);
    setData();
  };

  var i=data[currQues].options
  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>
      <div className="singleQuestion">
        <h2>{data[currQues].question}</h2>
        <div className="options">
          {data &&(
              <>
              <input type="radio"   value={i[0]} id={i[0]} name={i} onChange={(e) => setAnswer(e.target.value)} />
              <label htmlfor={i[0]}>{i[0]}</label>
              <input type="radio"   value={i[1]} id={i[1]} name={i} onChange={(e) => setAnswer(e.target.value)}/>
              <label htmlfor={i[1]}>{i[1]}</label>
              <input type="radio"  value={i[2]} id={i[2]} name={i} onChange={(e) => setAnswer(e.target.value)}/>
              <label htmlfor={i[2]}>{i[2]}</label>
              <input type="radio"  value={i[3]} id={i[3]} name={i} onChange={(e) => setAnswer(e.target.value)}/>
              <label htmlfor={i[3]}>{i[3]}</label>
              </>
            )}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained" 
            color="info"
            size="large"
            style={{ width: 185 }}
            onClick={()=>handleCheck(answer)}
            
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleBack}
            
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
            
          >
            {currQues == 3 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;

