import { NewsContext } from "../contexts/NewsContext"
import { useContext, useEffect } from "react"
import  Spinner  from "react-bootstrap/Spinner"
import { AuthContext } from "../contexts/AuthContext"
import  Card  from "react-bootstrap/Card"
import  Button  from "react-bootstrap/Button"
import  Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
//import SinglePost from "../component/news/SingleNews"
//import AddPostModal from "../component/posts/AddPostModal"
import addIcon from '../assets/plus-circle-fill.svg'
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import  Toast  from "react-bootstrap/Toast"
import SingleNews from "../component/news/SingleNews"
//import UpdatePostModal from "../component/posts/UpdatePostModal"
//import EditUser from "./EditUser"
import AddNewsModal from "../component/news/AddNewsModal"


const News = () => {

 // const {State: {user: {username}}} = useContext(AuthContext)


    const {newsState: {news, newsLoading},getNews,setShowAddNewsModal, showToast:{show,message,type}, setShowToast} = useContext(NewsContext)
    
    // start: Get all posts
    useEffect(()=>getNews(),[])

    let body = null
    if(newsLoading){
        body = (
            <div className="spinner-container">
                <Spinner animation='border' variant='info'/>
            </div>
        )
    } else if(news.length === 0) {
        body = (
            <>
                <Card className='text-center mx-5 my-5'>
                    <Card.Header as='h1'> Hi
                    </Card.Header>
                         <Card.Body>
                            <Card.Title>
                                Welcome to Blog
                            </Card.Title>
                            <Card.Text>
                                Click the button below to track your first skill to blog
                            </Card.Text>
                            {<Button variant='primary' onClick={setShowAddNewsModal.bind(this,true)}>BlogIT</Button>}
                        </Card.Body>
                </Card>
            </>
        )
    } else {
        body = (
            <>
              <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{ news.map(news => (
						<Col key={news._id} className='my-2'>
							<SingleNews news={news} />
						</Col>
                      
					))}
                    
				</Row>

                    {/* Open add post modal onClick={setShowAddNewsModal.bind(this,true)}*/}

                      <OverlayTrigger placement='left' overlay={<Tooltip>Add a news</Tooltip>}>
                         <Button className='btn-floating' onClick={setShowAddNewsModal.bind(this,true)}>
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
                 <h1 className="text-center">News</h1>
                 {/* <h3 className='right'>Posts user: {posts.length}</h3> */}
                 {body} 

                  <AddNewsModal/>
               {/*} {post !== null && <UpdatePostModal/>} */}

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
export default News