import  Button  from "react-bootstrap/Button";
import  githubIcon  from "../../assets/github.svg";
import  editIcon  from "../../assets/pencil.svg";
import  deleteIcon  from "../../assets/trash.svg";

const ActionButtons =({url, _id}) => {
    return(
        <>
        <Button className='post-button' href={url} target='_blank'>
            <img src={githubIcon} alt="play" width='32' height='32'/>
        </Button>

        <Button className='post-button' href={url} target='_blank'>
            <img src={editIcon} alt="editIcon" width='24' height='24'/>
        </Button>

        <Button className='post-button' href={url} target='_blank'>
            <img src={deleteIcon} alt="deleteIcon" width='24' height='24'/>
        </Button>

        


        </>
    )
}

export default ActionButtons

