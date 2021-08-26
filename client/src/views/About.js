import { PostContext } from "../contexts/PostContext"
import { useContext, useEffect } from "react"
import  Spinner  from "react-bootstrap/Spinner"
import { AuthContext } from "../contexts/AuthContext"
import  Card  from "react-bootstrap/Card"
import  Button  from "react-bootstrap/Button"
import  Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import AllPost from "../component/posts/AllPost"
import AddPostModal from "../component/posts/AddPostModal"
import addIcon from '../assets/plus-circle-fill.svg'
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import  Toast  from "react-bootstrap/Toast"
import UpdatePostModal from "../component/posts/UpdatePostModal"
import ErrorServerIcon from "../assets/errorServer.svg"



const About = () => {

    const {authState: {user: {username}}} = useContext(AuthContext)

    const {
        postState: {post ,posts, postsLoading},
        getAllPosts,
        setShowAddPostModal, 
        showToast:{show,message,type}, 
        setShowToast
    } = useContext(PostContext)
    
      // start: Get all posts
      useEffect(()=>getAllPosts(),[])

      let body = null
      if(postsLoading){
        body = (
            <div className="spinner-container">
                <Spinner animation='border' variant='info'/>
            </div>
        )

        // posts length mình có thể lấy số này làm số bài đăng của user
    } else if(posts.length === 0 ) {
        body = (
            <>
                <Card className='text-center mx-5 my-5'>
                <img src={ErrorServerIcon} alt="ErrorServerIcon" width='30' height='30' className='mr-2'/>
                     
                    <Card.Header as='h1'> Server Don't Data  
                    </Card.Header>
                         <Card.Body>
                            <Card.Title>
                               Sorry everybody
                            </Card.Title>
                         </Card.Body>
                </Card>
            </>
        )
   }
     else {
        body = (
            <>
              <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{ posts.map(post => (
						<Col key={post._id} className='my-2'>
							<AllPost post={post} />
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

    return (
        <>
                 <h1 className='text-center'>About</h1>

                    {body}


                {/* after post is added, show toast */}
                <Toast show={show} style={{position:'fixed', top:'20%', right: '10px'}} className={'bg-'+type+' text-white'} onClose ={setShowToast.bind(this,{show: false, message:'', type: null})}
                  delay={3000} 
                  autohide
                >
                    <Toast.Body>
                        <strong>{message}</strong>
                    </Toast.Body>
                </Toast>
                
         
        </>
    )
}

export default About