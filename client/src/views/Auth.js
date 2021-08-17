import LoginFrom from '../component/auth/LoginFrom'
import RegisterForm from '../component/auth/RegisterForm'

const Auth = ({ authRoute }) => {
    let body

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