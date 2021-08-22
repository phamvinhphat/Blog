import { PostContext } from "../contexts/PostContext"
import { useContext, useEffect } from "react"
import  Spinner  from "react-bootstrap/Spinner"
import { AuthContext } from "../contexts/AuthContext"
import  Card  from "react-bootstrap/Card"
import  Button  from "react-bootstrap/Button"
import  Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import SinglePost from "../component/posts/SinglePost"


const Dashboard = () => {

    const {authState: {user: {username}}} = useContext(AuthContext)


    const {postState: {posts, postsLoading},getPosts} = useContext(PostContext)
    
    // start: Get all posts
    useEffect(()=>getPosts(),[])

    let body = null
    if(postsLoading){
        body = (
            <div className="spinner-container">
                <Spinner animation='border' variant='info'/>
            </div>
        )
    } else if(posts.length === 0) {
        body = (
            <>
                <Card className='text-center mx-5 my-5'>
                    <Card.Header as='h1'> Hi {username}
                    </Card.Header>
                         <Card.Body>
                            <Card.Title>
                                Welcome to Blog
                            </Card.Title>
                            <Card.Text>
                                Click the button below to track your first skill to blog
                            </Card.Text>
                            <Button variant='primary'>BlogIT</Button>
                        </Card.Body>
                </Card>
            </>
        )
    } else {
        body = (
            <>
                <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
                    {
                        posts.map(post => (
                            <Col key={post._id} className='my-2'>
                                <SinglePost post={post}/>
                             </Col>
                        ))
                    }
                </Row>
            </>

        )
    }

    return(
        <div className="landing2">
            <div className="dark-overlay">
                 <>{body}</>
            </div>
      
        </div>
    )
}
export default Dashboard