import { useContext, useState, useEffect } from "react";
import  Button  from "react-bootstrap/Button";
import  githubIcon  from "../../assets/github.svg";
import  editIcon  from "../../assets/pencil.svg";
import  deleteIcon  from "../../assets/trash.svg";
import  {PostContext}  from "../../contexts/PostContext";
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import LikeIcon from "../../assets/like.svg"
import  Col  from "react-bootstrap/Col";

const ActionButtons =({url, _id, likeCount}) => {
    
    
    
    const {  
        postState: {post}, 
        deletePost, 
        findPost, 
        setShowUpdatePostModal, 
        updatePost
    } = useContext(PostContext)

    const[updatedPost, setUpdatedPost] = useState(post)

    useEffect(() => setUpdatedPost(post),[post])

    const choosePost = postId => {
        findPost(postId)
        setShowUpdatePostModal(true)
    }


    const onChangeUpdatedPostForm = ({event, postId}) => {
        findPost(postId)
        setUpdatedPost({...updatedPost, [event.target.likeCount]: event.target.likeCount + 1 })
    }

    const onSubmit = async event => {
        event.preventDefault()
        const {success, message} = await updatePost(updatedPost)
    //     setShowUpdatePostModal(false)
    //    setShowToast({show:true, message,type: success ? 'success':'danger'})
    }

    return(
        <>
         <OverlayTrigger placement='left' overlay={<Tooltip>Git code Blog</Tooltip>}>
            <Button className='post-button' href={url} target='_blank'>
                <img src={githubIcon} alt="play" width='32' height='32'/>
            </Button>
            </OverlayTrigger>

            <OverlayTrigger placement='left' overlay={<Tooltip> Edit Blog </Tooltip>}>
                <Button className='post-button' onClick={choosePost.bind(this,_id)}>
                    <img src={editIcon} alt="editIcon" width='24' height='24'/>
                </Button>
            </OverlayTrigger>

            <OverlayTrigger placement='right' overlay={<Tooltip> Delete Blog </Tooltip>}>
                <Button className='post-button' onClick={deletePost.bind(this,_id)}>
                    <img src={deleteIcon} alt="deleteIcon" width='24' height='24'/>
                </Button>
             </OverlayTrigger>

             <Col  onSubmit={onSubmit}>
                    <Button onChange={ {onChangeUpdatedPostForm}}>
                      
                            <img src={LikeIcon} alt="LikeIcon" width='25' height='25' className='mr-2'/>
                            <label >&nbsp;&nbsp;{likeCount}</label>
                          
                            
                    </Button>        
            </Col>  

        


        </>
    )
}

export default ActionButtons

