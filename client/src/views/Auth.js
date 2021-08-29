import LoginFrom from '../component/auth/LoginFrom'
import RegisterForm from '../component/auth/RegisterForm'
import {AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react' 
import { Redirect } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner' 

const Auth = ({ authRoute }) => {
   
    const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext)

    let body

    if(authLoading)
    body = (
        <div className="d-flex justify-content-center mt-2">  
        <Spinner animation='border' variant='info'/>
        </div> 
    )
    else if(isAuthenticated) return <Redirect to='/dashboard'/>
    else
    body = (
        <>
        {authRoute === 'login' && <LoginFrom/> }       
        {authRoute === 'register' && <RegisterForm/>}      
      </>
    )

    return (
        <div className="landing">
            <div className="dark-overlay">
                 <div className="landing-inner">
                    <h3>No one can write a perfect software, neither can you</h3>
                    <h4>so let's share and contribute to find that perfection</h4>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Auth