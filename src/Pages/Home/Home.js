import {TextField,Button,MenuItem} from '@material-ui/core'
import{useHistory} from 'react-router'
import {useState} from 'react'
import ErrorMessage from "../../Components/ErrorMessage/ErrorMsg";

const Home=({name,setName,fetchQuestions})=>{
    const [difficulty,setDifficulty]=useState('')
    const [error,setError]=useState(false)
    const history=useHistory()
    const handleSubmit=()=>{
        if(!difficulty||!name){
            setError(true)
            return
        }else{
            setError(false)
            fetchQuestions(difficulty)
            history.push('/quiz')
        }

    }
    return (
        <div className='content'>
            <div className='settings'>
                <span style={{fontSize:30}}>Quiz Settings</span>
                <div className='settings__select'>
                    {error && <ErrorMessage>Please Fill all Fields</ErrorMessage>}
                    <TextField
                    style={{marginBottom:25}}
                    label='Enter Your Name'
                    variant='outlined'
                    onChange={e=>setName(e.target.value)}
                    />
                    <TextField
                    select
                    label="Select Difficulty"
                    
                    variant="outlined"
                    style={{ marginBottom: 30 }}
                    onChange={e=>setDifficulty(e.target.value)}
                    >
                        <MenuItem key="Easy" value="easy">
                        Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                        Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                        Hard
                        </MenuItem>
                        <MenuItem key="Any" value="any">
                        Any
                        </MenuItem>
                    </TextField>
                    <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleSubmit}
                    >
                    Start Quiz
                    </Button>
                </div>
            </div>
            <img src='./quiz.svg' className='banner' alt='quiz img'/>
        </div>
        
    )
}

export default Home