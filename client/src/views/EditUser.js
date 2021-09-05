import React, { useContext, useState } from "react";
import Icon from '../assets/user.svg'
import userIcon from '../assets/user2.svg'
import emailIcon from '../assets/email.svg'
import nameIcon from '../assets/userName.svg'
import phoneIcon from '../assets/phone.svg'
import addressIcon from '../assets/address.svg'
import { AuthContext } from "../contexts/AuthContext";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";


function User() {

  const {
    authState: {user},
    updateUser
  } = useContext(AuthContext)

  const[updatedUser, setUpdatedUser] = useState(user)

  const {username, email, NumberPhone,Address,FullName} = updatedUser

  const onChangeUpdatedUserForm = event => setUpdatedUser({...updatedUser, [event.target.name]: event.target.value})
   
  const onSubmit = async event => {
    event.preventDefault()
    const {success, message} = await updateUser(updatedUser)
  //   setShowUpdatePostModal(false)
  //  setShowToast({show:true, message,type: success ? 'success':'danger'})
}

  return (
    <>
      <Container fluid>
        <Row >
          <Col md="8"  onSubmit={onSubmit}>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                      
                    <Col className="px-1" md="3">
                      <Form.Group>
                      <img src={userIcon} alt="userIcon" width='30' height='30' className='mr-2'/>
                        <label>name Account</label>
                        <Form.Control
                          type='text'
                          placeholder='name Account'
                          name='username'
                          required aria-describedby='username-help'
                          value={username}
                          onChange={onChangeUpdatedUserForm}
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pl-1" md="4">
                      <Form.Group>
                      <img src={nameIcon} alt="nameIcon" width='30' height='30' className='mr-2'/>
                        <label htmlFor="exampleInputEmail1">
                          Full Name
                        </label>
                        <Form.Control
                          type='text'
                          placeholder='Full name'
                          name='FullName'
                          required aria-describedby='username-help'
                          value={FullName}
                          onChange={onChangeUpdatedUserForm}
                        ></Form.Control>
                      </Form.Group>
                    </Col>     

                  </Row>

                  <Row>
                  <Col className="pr-1" md="6">
                      <Form.Group>
                      <img src={emailIcon} alt="emailIcon" width='30' height='30' className='mr-2'/>
                    
                        <label>Email</label>
                        <Form.Control
                            type='text'
                            placeholder='Email'
                            name='email'
                            required aria-describedby='username-help'
                            value={email}
                            onChange={onChangeUpdatedUserForm}
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pl-1" md="6">
                      <Form.Group>
                      <img src={phoneIcon} alt="phoneIcon" width='24' height='24' className='mr-2'/>
                     
                        <label>Number Phone</label>
                        <Form.Control
                           type='text'
                           placeholder="Number Phone"
                           name='NumberPhone'
                           required aria-describedby='username-help'                        
                           value={NumberPhone}
                           onChange={onChangeUpdatedUserForm} 
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md="12">
                      <Form.Group>
                      <img src={addressIcon} alt="addressIcon" width='24' height='24' className='mr-2'/>
                   
                        <label>Address</label>
                        <Form.Control
                             type='text'
                             placeholder="Address"
                             name='Address'
                             required aria-describedby='username-help'                        
                             value={Address}
                             onChange={onChangeUpdatedUserForm}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>

                  
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        
          {/* --------------------------------- */}
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={ Icon.default }
                ></img>
              </div>

              <Card.Body>
                <div className="author">
                  <p href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img alt="..." className="avatar border-gray" src={Icon.default}></img>
                    <h5 className="title">Name:  {username}</h5>
                  </p>

                  <p className="description">Email: {email}</p>
                </div>
                <br></br>
                <p className="description text-center">
                  "I was always flying in the direction of someone else's flight<br></br>
                  This time I will fly the path that I have chosen " <br></br>
                </p>
              </Card.Body>
              
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant='primary' type='submit'
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>

                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                
                  variant='primary' type='submit'
                >
                  <i className="fab fa-twitter"></i>
                </Button>

                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant='primary' type='submit'
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;