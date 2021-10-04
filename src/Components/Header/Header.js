import {Link} from 'react-router-dom'

const Header=()=>{
    return (
        <div className='header'>
            <Link to='/' className='title'>Quiz</Link>
            <hr className='divider'/>
        </div>
    )
}
export default Header