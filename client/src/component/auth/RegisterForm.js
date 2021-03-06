import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import {useContext, useState} from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const RegisterForm = () => {


 // context
const {registerUser} = useContext(AuthContext)

// local state
const[registerForm, setRegisterForm] = useState({
    username: '',
    email:'',
    Address: 'Address',
    FullName:'',
    NumberPhone: 'Number Phone',
    password: '',
    confirmPassword:''
})

const[alert, setAlert] = useState(null)


const {username, email, FullName, password, confirmPassword} = registerForm


const onChangeRegisterForm = event => 
    setRegisterForm({...registerForm, [event.target.name]: event.target.value})


const register = async event => {
        event.preventDefault()

        if(password !== confirmPassword){
            setAlert({type: 'danger', message: 'Passwords do not match'})
            setTimeout(() => setAlert(null), 5000)
            return
       }

        try {
            const registerData = await registerUser(registerForm)
            if(registerData.success){
               // history.push('/dashboard')
            } else {
             setAlert({type: 'danger', message: registerData.message})
             setTimeout(()=>setAlert(null), 5000)      
            }
        } catch (error) {
            console.log(error)
        }
    }



return(
    <>
       <Form className='my-4'  onSubmit={register}>
       <h2>Register</h2>
       <AlertMessage info={alert}/>
           {/* user name */}
           <Form.Group>
               <Form.Control 
               type='text' 
               placeholder='Name account' 
               name='username' 
               required
               value={username}
               onChange={onChangeRegisterForm}
               />          
           </Form.Group>
           <br></br>     
            {/* email */}

           <Form.Group>
               <Form.Control 
                type='text' 
                placeholder='Full Name'
                name='FullName' 
                required
                value={FullName}
                onChange={onChangeRegisterForm}
                />
           </Form.Group>

           <br></br>     
            {/* number phone */}
            <Form.Group>
               <Form.Control 
                type='email' 
                placeholder='email'
                name='email' 
                required
                value={email}
                onChange={onChangeRegisterForm}
                />
           </Form.Group>
           
           <br></br>     
             {/* password */}
           <Form.Group>
               <Form.Control type='password' 
               placeholder='Password'
                name='password' 
                required
                value={password}
                onChange={onChangeRegisterForm}
                />
           </Form.Group>
           <br></br>     
           <Form.Group>
               <Form.Control 
                type='password' 
                placeholder='Confirm Password'
                name='confirmPassword' 
                required
                value={confirmPassword}
                onChange={onChangeRegisterForm}
              />
           </Form.Group>
           <br></br>     
           <Button variant='success' type='submit'>Register</Button>
       </Form>

        <p> 
            Already have an account 
            <Link to='/login'>
            <Button variant='info' size='sm' className='ml-2'>Login</Button>
            </Link>
        </p>

    </>
    )
}

export default RegisterForm