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
import SingleNews from "../component/news/SingleNews"
import addNewsIcon from "../assets/addNews.svg"

const News = () => {

    const {
        newsState: {news, newss,newsLoading},
        getNews, 
        showAddNewsModal, setShowAddNewsModal,
        showToast:{show,message,type}, setShowToast
    } = useContext(NewsContext) 
 
     // start: Get all posts
    useEffect(()=>getNews(),[])

    let body = null 
    
    if(newsLoading){
        <div className="spinner-container">
            <Spinner animation='border' variant='info'/>
        </div>
    } else if (newss.length === 0) {
        body = (
            <>
                <Card className='text-center mx-5 my-5'>
                    <Card.Header as='h1'> Server news error 
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
					{ newss.map(news => (
						<Col key={news._id} className='my-2'>
							<SingleNews news={news} />
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
                    <div className="landing-inner">
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
            </div>
        </>
    )
}

export default News