import { NewsContext } from "../contexts/NewsContext"
import { useContext, useEffect } from "react"
import  Spinner  from "react-bootstrap/Spinner"
import  Card  from "react-bootstrap/Card"
import  Button  from "react-bootstrap/Button"
import  Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import  Toast  from "react-bootstrap/Toast"
import SingleNews from "../component/news/SingleNews"
import Navbar from 'react-bootstrap/Navbar'
import AllNews from "../component/news/AllNews"
import { Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'


const NewsAll = () => {

 // const {State: {user: {username}}} = useContext(AuthContext)


    const {newsState: {New,news, newsLoading},getAllNews,setShowAddNewsModal, showToast:{show,message,type}, setShowToast} = useContext(NewsContext)
    
    // start: Get all posts
    useEffect(()=>getAllNews(),[])

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
                    <Card.Header as='h1'>
                    </Card.Header>
                         <Card.Body>
                            <Card.Title>
                                ERROR 404 
                            </Card.Title>
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
							<AllNews news={news} />
						</Col>
                      
					))}
                    
				</Row>
            </>

        )
    }

    return(
        <>
        <div className="landing2">
            <div className="dark-overlay">
                 <h1 className="text-center">News</h1>
                 {/* <h3 className='right'>Posts user: {posts.length}</h3> */}
                <Nav className='mr-auto'>
                <Button className='font-weight-bolder text-white' to='/news' as={Link}>
                           Private
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button className='font-weight-bolder text-white' to='/news/all' as={Link}>
                           public
                </Button>
                </Nav>
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
            
                 
            </div>
      
        </div>
        </>
    )
}
export default NewsAll