import { useContext, useState, useEffect } from "react";
import  Button  from "react-bootstrap/Button";
import LinkWebIcon from "../../assets/LinkWeb.svg"
import  editIcon  from "../../assets/pencil.svg";
import  deleteIcon  from "../../assets/trash.svg";
import { NewsContext } from "../../contexts/NewsContext";
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import LikeIcon from "../../assets/like.svg"
import  Col  from "react-bootstrap/Col";

const ActionButtons = ({url,_id,likeCount}) => {

     const {
        newsState:{New},
        setShowUpdateNewsModal,
        deleteNews,
        findNews,
        updateNews
     } = useContext(NewsContext)

     const[updatedNews, setUpdatedNews] = useState(New)

     const onChangeLike = event => setUpdatedNews({...updatedNews, [event.target.likeCount]: event.target.value + 1})   

     const onSubmit = async event => {
        event.preventDefault()
        const {success, message} = await updateNews(updatedNews)
      }

     const chooseNews = newsId => {
        findNews(newsId)
        setShowUpdateNewsModal(true)
     }

    return(
        <>
            {/* Button Reference Link */}
            <OverlayTrigger placement='left' overlay={<Tooltip>Git Reference Link</Tooltip>}>
            <Button className='post-button' href={url} target='_blank'>
                <img src={LinkWebIcon} alt="LinkWebIcon" width='32' height='32'/>
            </Button>
            </OverlayTrigger>

            {/* Button Edit news */}
            <OverlayTrigger placement='left' overlay={<Tooltip>edit news</Tooltip>}>
                <Button className='post-button' onClick={chooseNews.bind(this,_id)}>
                    <img src={editIcon} alt='edit-news' width='30' height='30'/>
                </Button>
            </OverlayTrigger>

            {/* Button update news */}
            <OverlayTrigger placement='left' overlay={<Tooltip>Delete news</Tooltip>}>
                <Button className='post-button' onClick={deleteNews.bind(this,_id)}>
                    <img src={deleteIcon} alt='Delete-news' width='30' height='30'/>
                </Button>
            </OverlayTrigger>

            <Col onSubmit={onSubmit}>
                    <Button  variant='primary' type='submit'   onChange={onChangeLike}>
                        <Col className='text-left'>
                            <img src={LikeIcon} alt="LikeIcon" width='25' height='25' className='mr-2'/>
                            <label >&nbsp;&nbsp;{likeCount}</label>
                        </Col>
                    </Button>                  
            </Col> 
        </>
    )



}

export default ActionButtons