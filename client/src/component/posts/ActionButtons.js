import { useContext } from "react";
import  Button  from "react-bootstrap/Button";
import  githubIcon  from "../../assets/github.svg";
import  editIcon  from "../../assets/pencil.svg";
import  deleteIcon  from "../../assets/trash.svg";
import  {PostContext}  from "../../contexts/PostContext";
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"

const ActionButtons =({url, _id}) => {
    const {deletePost, findPost, setShowUpdatePostModal} = useContext(PostContext)

    const choosePost = postId => {
        findPost(postId)
        setShowUpdatePostModal(true)
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

        


        </>
    )
}

export default ActionButtons

