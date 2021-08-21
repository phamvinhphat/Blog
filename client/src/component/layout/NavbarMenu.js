
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import blogLogo from '../../assets/blog-solid.svg'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import userIcon from '../../assets/user.svg'

const NavbarMenu = () =>{

    const{authState: {user: {username}},logoutUser} = useContext(AuthContext)

    const logout = () => logoutUser()

    return (
            <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
                <Navbar.Brand className='font-weight-bolder text-while'>
                    <img src={blogLogo} alt="learnItLogo" width='32' height='32' className='mr-2'/>
                    Blog
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
     
                 <Navbar.Collapse id='basic-navbar-nav'>
                    
                    <Nav className='mr-auto'>
                        <Nav.Link className='font-weight-bolder text-white' to='/dashboard' as={Link}>
                            Dashboard
                        </Nav.Link>
                    
                        <Nav.Link className='font-weight-bolder text-white' to='/about' as={Link}>
                            About
                         </Nav.Link>
                   
                         <Nav.Link className='font-weight-bolder text-white' to='/tools' as={Link}>
                           Tools
                         </Nav.Link>

                         <Nav.Link className='font-weight-bolder text-white' to='/news' as={Link}>
                           New
                         </Nav.Link>
                    </Nav>
                    

         
              

                </Navbar.Collapse>

                <Nav>
                    <Nav.Link  className='font-weight-bolder text-white'  to='/edit' as={Link} >
                        <img src={userIcon} alt="userIcon" width='32' height='32' className='mr-2'/>
                            Welcome {username}
                    </Nav.Link>         

                    <Button variant='secondary' className='font-weight-bolder text-white' onClick={logout}>
                        <img src={logoutIcon} alt="logoutIcon" width='32' height='32' className='mr-2'/>
                         Logout
                     </Button>
                </Nav>

       
               
            </Navbar>
        )
}
export default NavbarMenu