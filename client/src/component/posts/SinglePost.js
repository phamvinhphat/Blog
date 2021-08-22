import  Card  from "react-bootstrap/Card";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Badge  from "react-bootstrap/Badge";
import  Button  from "react-bootstrap/Button";


const  SinglePost = ({post:{_id, title, content, author, url, likeCount}}) => (
    <Card className='shadow'>
        <Card.Body>
            <Card.Title>
                <Row>
                   
                    <Col>
                        <p className='post-title'>{title}</p>
                        <Badge pill variant={'success'}>{author}</Badge>
                    </Col>
                  
                    <Col className='text-right'>
                        Buttons
                     </Col>

                </Row> 
            </Card.Title>
            <Card.Text>{content}</Card.Text>
        </Card.Body>
    </Card>
)

export default SinglePost
