import { PostContext } from "../contexts/PostContext"
import { useContext, useEffect } from "react"
import  Spinner  from "react-bootstrap/Spinner"
import { AuthContext } from "../contexts/AuthContext"
import  Card  from "react-bootstrap/Card"
import  Button  from "react-bootstrap/Button"
import  Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import SinglePost from "../component/posts/SinglePost"
import AddPostModal from "../component/posts/AddPostModal"
import addIcon from '../assets/plus-circle-fill.svg'
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import  Toast  from "react-bootstrap/Toast"
import UpdatePostModal from "../component/posts/UpdatePostModal"
import EditUser from "./EditUser"


const Dashboard = () => {

    const {authState: {user: {username}}} = useContext(AuthContext)


    const {postState: {post ,posts, postsLoading},getPosts,setShowAddPostModal, showToast:{show,message,type}, setShowToast} = useContext(PostContext)
    
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
                            <Button variant='primary' onClick={setShowAddPostModal.bind(this,true)}>BlogIT</Button>
                        </Card.Body>
                </Card>
            </>
        )
    } else {
        body = (
            <>
              <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{ posts.map(post => (
						<Col key={post._id} className='my-2'>
							<SinglePost post={post} />
						</Col>
                      
					))}
                    
				</Row>

                    {/* Open add post modal */}

                     <OverlayTrigger placement='left' overlay={<Tooltip>Add a new thing to Blog</Tooltip>}>
                    <Button className='btn-floating' onClick={setShowAddPostModal.bind(this,true)}>
                    <img src={addIcon} alt="add-post" width='60' height='60' />
    
                    </Button>
                    </OverlayTrigger> 
               

            </>

        )
    }

    return(
        <>
        <div className="landing2">
            <div className="dark-overlay">
                 <h1 className="text-center">Blog user</h1>
                 <h3 className='right'>Posts user: {posts.length}</h3>
                 {body} 

                 <AddPostModal/>
                {post !== null && <UpdatePostModal/>}

                 {/* after post is added, show toast */}
                <Toast show={show} style={{position:'fixed', top:'20%', right: '10px'}} className={'bg-'+type+' text-white'} onClose ={setShowToast.bind(this,{show: false, message:'', type: null})}
                  delay={3000} 
                  autohide
                >
                    <Toast.Body>
                        <strong>{message}</strong>
                    </Toast.Body>
                </Toast>
            
                 
            </div>
      
        </div>
        </>
    )
}
export default Dashboard