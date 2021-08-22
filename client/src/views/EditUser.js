import React, { useContext } from "react";
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

  const {authState: {user: {username,email,NumberPhone}}}= useContext(AuthContext)


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
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
                        <label>Username</label>
                        <Form.Control
                          defaultValue={username}
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pl-1" md="4">
                      <Form.Group>
                      <img src={emailIcon} alt="emailIcon" width='30' height='30' className='mr-2'/>
                        <label htmlFor="exampleInputEmail1">
                          Email user
                        </label>
                        <Form.Control
                          defaultValue={email}
                          placeholder="Email"
                         
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                  </Row>

                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                      <img src={nameIcon} alt="nameIcon" width='30' height='30' className='mr-2'/>
                        <label>Name(BUG Don't data)</label>
                        <Form.Control
                  
                          placeholder="Email"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pl-1" md="6">
                      <Form.Group>
                      <img src={phoneIcon} alt="phoneIcon" width='24' height='24' className='mr-2'/>
                     
                        <label>Number Phone</label>
                        <Form.Control
                           defaultValue={NumberPhone}
                       

                          placeholder="Number Phone"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md="12">
                      <Form.Group>
                      <img src={addressIcon} alt="addressIcon" width='24' height='24' className='mr-2'/>
                   
                        <label>Address (BUG Don't Data)</label>
                        <Form.Control
                          
                          placeholder="Home Address"
                          type="text"
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
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>

                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>

                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
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