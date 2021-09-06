import  Card  from "react-bootstrap/Card";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Badge  from "react-bootstrap/Badge";
import  Button  from "react-bootstrap/Button";
import LikeIcon from "../../assets/like.svg"
import ActionButtons from './ActionButtons'
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import  githubIcon  from "../../assets/github.svg";
import moment from 'moment';

const  AllPost = ({post:{_id, title, content, author, url, likeCount, user,createAt} }) => (
    <Card className='shadow' border={'success'}>
        <Card.Body>
           
         <Card.Title>
                <Row>
                   
                    <Col>
                        <b color='author' className='post-title'> <p>Author: {user.username}</p></b>
                    </Col>
                </Row> 
            
            </Card.Title> 
            <Card.Title>
                <Row>
                   
                    <Col>
                         {moment(createAt).format('HH:MM MMM DD,YYYY')}
                    </Col>
                </Row> 
            
            </Card.Title>
           
            <Card.Title>
                <Row>
                   
                    <Col>
                    
                         <b><p className='post-title'>Project: {title}</p></b> 
                        <p className='post-title'>Languages: {author}</p>
                      
                    </Col>
                    
                 
                </Row> 
             
            </Card.Title>
            <Card.Text>Content:<br></br>{content}</Card.Text>
            <Card.Title>
                <Row>

                <Col>
                        <Button>
                        <Col className='text-left'>
                            <img src={LikeIcon} alt="LikeIcon" width='25' height='25' className='mr-2'/>
                            <label >&nbsp;&nbsp;{likeCount}</label>
                        </Col>
                    </Button>
                    
                    </Col>   

                    <Col className='text-right'>
                        <OverlayTrigger placement='left' overlay={<Tooltip>Git code Blog</Tooltip>}>
                            <Button className='post-button' href={url} target='_blank'>
                                <img src={githubIcon} alt="play" width='32' height='32'/>
                            </Button>
                        </OverlayTrigger>
                    </Col> 
                </Row>
            </Card.Title>
       
         
        </Card.Body>
    </Card>
)

export default AllPost
