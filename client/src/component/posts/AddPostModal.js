import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import From from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'

const AddPostModal = () =>{
    //context
    const{showAddPostModal, setShowAddPostModal, addPost,setShowToast} = useContext(PostContext)

    //State
    const[newPost, setNewPost] = useState({
        title: '', 
        content: '', 
        author: '',
        url: '',
        likeCount: 0
    })

    //reset data
    const resetAddPostData = () => {
        setNewPost({
            title: '', 
            content: '', 
            author: '',
            url: '',
            likeCount: 0
        })
        setShowAddPostModal(false)
    }


    const onSubmit = async event => {
        event.preventDefault()
        const {success, message} = await addPost(newPost)
        resetAddPostData()
        setShowToast({show:true, message,type: success ? 'success':'danger'})
    }

    const {title, content, author, url, likeCount} = newPost

    const onChangeNewPostForm = event => setNewPost({...newPost, [event.target.name]: event.target.value})

    // close
    const closeDialog = () => {
        resetAddPostData()
    }

    return (
        <Modal show={showAddPostModal} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>What do you want to blog ?</Modal.Title>
            </Modal.Header>
            <From onSubmit={onSubmit}>
                <Modal.Body>
                    <From.Group>
                        <From.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' value={title} onChange={onChangeNewPostForm}/>
                        <From.Text id='title-help' muted>required</From.Text>
                    </From.Group>

                    <From.Group>
                        <From.Control type='text' placeholder='Languages' name='author' required aria-describedby='Languages-help' value={author} onChange={onChangeNewPostForm} />
                        <From.Text id='Languages-help' muted>required</From.Text>
                    </From.Group>

                    <From.Group>
                        <From.Control as='textarea' rows={3} placeholder='Content' name='content' required aria-describedby='content-help' value={content} onChange={onChangeNewPostForm} />
                        <From.Text id='content-help' muted>required</From.Text>  
                    </From.Group>

                    <From.Group>
                        <From.Control  type='text' placeholder='Git project' name='url' required aria-describedby='url-help' value={url} onChange={onChangeNewPostForm}/>
                        <From.Text id='content-help' muted>required</From.Text>  
                    </From.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={closeDialog} >Cancel</Button>
                    <Button variant='primary' type='submit'>BlogIT</Button>
             
                </Modal.Footer>
            </From>

        </Modal>
    )
}

export default AddPostModal