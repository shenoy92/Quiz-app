import React,{useState} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Result/Result'
import Data from './DataSet/Question'
const App=()=>{
    const [name,setName]=useState('')
    const [score,setScore]=useState(0)
    const [data,setData]=useState('')
    const[ques1,setQues1]=useState('')
    const[ques2,setQues2]=useState('')
    const[ques3,setQues3]=useState('')
    const[ques4,setQues4]=useState('')
   
    const fetchQuestions=(difficulty)=>{
        if(`${difficulty}`=='any')
        {
            var data=[]
            for(let i=0;i<4;i++){
            var random = Math.floor(Math.random() *10)
            console.log(random)
                
                data.push(Data[random])
                 
            }
            setData(data)
            console.log(data)
        }else
        {
            var data=Data.filter(question=>question.difficulty==`${difficulty}`)
            console.log(data)
            setData(data)
        }
    }
        return (
            <BrowserRouter>
            <div className="app">
                <Header/>
                <Switch>
                    <Route path='/' exact>
                        <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>
                    </Route>
                    <Route path='/quiz' exact>
                        <Quiz name={name} data={data} setData={setData} score={score} setScore={setScore} setQues1={setQues1} setQues2={setQues2} setQues3={setQues3} setQues4={setQues4}/>
                    </Route>
                    <Route path='/result'  exact>
                        <Result data={data} ques1={ques1} ques2={ques2} ques3={ques3} ques4={ques4} score={score}/>
                    </Route>
                </Switch>
            </div>
            </BrowserRouter>
        )
    
}

export default App