import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return(
    <>
       <Form className='my-4'>
       <h2>Register</h2>
           {/* user name */}
           <Form.Group>
               <Form.Control 
               type='text' 
               placeholder='Username' 
               name='username' 
               required/>          
           </Form.Group>

            {/* email */}
           <Form.Group>
               <Form.Control 
                type='email' 
                placeholder='email'
                name='email' 
                required/>
           </Form.Group>

            {/* number phone */}
           <Form.Group>
               <Form.Control 
                type='text' 
                placeholder='Number Phone'
                name='NumberPhone' 
                required/>
           </Form.Group>
            
             {/* password */}
           <Form.Group>
               <Form.Control type='password' 
               placeholder='Password'
                name='password' 
                required/>
           </Form.Group>
           <Form.Group>
               <Form.Control 
                type='password' 
                placeholder='Confirm Password'
                name='confirmPassword' 
                required/>
           </Form.Group>

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