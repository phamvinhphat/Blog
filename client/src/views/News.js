import { useContext, useEffect } from "react"
import  Spinner  from "react-bootstrap/Spinner"
import  Card  from "react-bootstrap/Card"
import  Button  from "react-bootstrap/Button"
import  Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import { AuthContext } from "../contexts/AuthContext"
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import  Toast  from "react-bootstrap/Toast"
import { NewsContext } from "../contexts/NewsContext"
import errorServerIcon from "../assets/errorServer2.svg"

import addNewsIcon from "../assets/addNews.svg"
import SingleNews from "../component/news/SingleNews"

const News = () => {

    const {authState: {user: {username}}} = useContext(AuthContext)


    const {newsState: {New ,News, NewsLoading},getNews,setShowAddNewsModal, showToast:{show,message,type}, setShowToast} = useContext(NewsContext)
    
 
     // start: Get all posts
    useEffect(()=>getNews(),[])

    let body = null 
    
    if(NewsLoading){
        body = (
            <div className="spinner-container">
                <Spinner animation='border' variant='info'/>
            </div>
        )
        
    } else if (News.length === 0) {
        body = (
            <>
                <Card className='text-center mx-5 my-5'>
                    <Card.Header as='h1'> Server news error {username}
                    </Card.Header>
                         <Card.Body>
                         <img src={errorServerIcon} alt="errorServer" width='50' height='50' className='mr-2'/>
                            <Card.Text>
                                 Need a quick fix
                            </Card.Text>
                         </Card.Body>
                </Card>
            </>
        )
    } else {
        body = (
            <>
              <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{ News.map(New => (
						<Col key={New._id} className='my-2'>
							<SingleNews New={New} />
						</Col>
                      
					))}
                    
				</Row>

                    {/* Open add post modal */}

                     <OverlayTrigger placement='left' overlay={<Tooltip>Add a news</Tooltip>}>
                    <Button className='btn-floating' onClick={setShowAddNewsModal.bind(this,true)}>
                    <img src={addNewsIcon} alt="add-post" width='60' height='60' />
    
                    </Button>
                    </OverlayTrigger> 
               

            </>

        )
    }


    return (
        <>
            <div className="news">
                <div className="dark-overlay">
                  
                        <h1 className="text-center">News</h1>
                         {body}

                        {/* after news is added, show toast */}
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