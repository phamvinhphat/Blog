import  Card  from "react-bootstrap/Card";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Badge  from "react-bootstrap/Badge";
import  CardImg  from "react-bootstrap/CardImg";
import  Button  from "react-bootstrap/Button";
import LikeIcon from "../../assets/like.svg"
import moment from 'moment';


const  AllNews = ({news: {_id,title, content, author, url, attachment, likeCount,user,createAt}}) => (
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
                    
                        <b><p className='post-title'>{title}</p></b>
                        <p className='post-title'>{author}</p>
                     
                    </Col>

                </Row> 
             
            </Card.Title>

            <Card.Title>
                <Row>                   
                    <Col>
                    
                        {/* //<CardImg img={attachment} title="Title" className="classes.media"/>
                      */}
                      <p className='post-title'>{attachment}</p>
                     
                    </Col>

                </Row> 
             
            </Card.Title>
            
            <Card.Text>{content}</Card.Text>
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

                </Row>
            </Card.Title>
         
        </Card.Body>
    </Card>
)

export default AllNews
