import  Card  from "react-bootstrap/Card";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Badge  from "react-bootstrap/Badge";
import  Button  from "react-bootstrap/Button";
import LikeIcon from "../../assets/like.svg"
import ActionButtons from './ActionButtons'

const  SinglePost = ({post:{_id, title, content, author, url, likeCount}}) => (
    <Card className='shadow' border={'success'}>
        <Card.Body>
            <Card.Title>
                <Row>
                   
                    <Col>
                    
                        <b><p className='post-title'>{title}</p></b>
                        <p className='post-title'>{author}</p>
                     
                    </Col>
                    
                  
                   

                 

                </Row> 
             
            </Card.Title>
            <Card.Text>{content}</Card.Text>
            <Card.Title>
                <Row>

                {/* <Col>
                    <Button>
                        <Col className='text-left'>
                            <img src={LikeIcon} alt="LikeIcon" width='25' height='25' className='mr-2'/>
                            <label >&nbsp;&nbsp;{likeCount}</label>
                        </Col>
                    </Button>
                    
                    </Col>    */}

                    <Col className='text-right'>
                            <ActionButtons url={url} _id={_id} likeCount={likeCount}/>
                    </Col> 

        

                     
            
                </Row>
            </Card.Title>
       
         
        </Card.Body>
    </Card>
)

export default SinglePost
