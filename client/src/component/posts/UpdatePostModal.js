import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import From from 'react-bootstrap/Form'
import { useContext, useEffect, useState } from 'react'
import  {PostContext}  from '../../contexts/PostContext'

const UpdatePostModal = () =>{
    //context
    const{
        postState: {post}, 
        showUpdatePostModal, 
        setShowUpdatePostModal, 
        updatePost, 
        setShowToast
    } = useContext(PostContext)

    //State
    const[updatedPost, setUpdatedPost] = useState(post)

  
    useEffect(() => setUpdatedPost(post),[post])

 
    const {title, content, author, url, likeCount} = updatedPost



    const onChangeUpdatedPostForm = event => setUpdatedPost({...updatedPost, [event.target.name]: event.target.value})
    //reset data
    // const resetAddPostData = () => {
    //     setNewPost({
    //         title: '', 
    //         content: '', 
    //         author: '',
    //         url: '',
    //         likeCount: 0
    //     })
    //     setShowAddPostModal(false)
    // }


    const onSubmit = async event => {
        event.preventDefault()
        const {success, message} = await updatePost(updatedPost)
        setShowUpdatePostModal(false)
       setShowToast({show:true, message,type: success ? 'success':'danger'})
    }

   
    // close
    const closeDialog = () => {
        setUpdatedPost(post)
       setShowUpdatePostModal(false)
    }

    return (
        <Modal show={showUpdatePostModal} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Update Blog?</Modal.Title>
            </Modal.Header>
            <From onSubmit={onSubmit}>
                <Modal.Body>
                    <From.Group>
                        <From.Text>Title</From.Text>
                        <From.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' value={title} onChange={onChangeUpdatedPostForm}/>
                    </From.Group>

                    <From.Group>

                        <From.Text>Languages</From.Text>
                        <From.Control type='text' placeholder='Languages' name='author' required aria-describedby='Languages-help' value={author} onChange={onChangeUpdatedPostForm} />
                  
                    </From.Group>

                    <From.Group>
                     <From.Text>Content</From.Text>  
                        <From.Control as='textarea' rows={3} placeholder='Content' name='content' required aria-describedby='content-help' value={content} onChange={onChangeUpdatedPostForm} />
                      
                    </From.Group>

                    <From.Group>
                          <From.Text>Url Git</From.Text>
                        <From.Control  type='text' placeholder='Git project' name='url' required aria-describedby='url-help' value={url} onChange={onChangeUpdatedPostForm}/>
                        <a href="https://github.com/" target="_blank" rel = "noreferrer" >Your Git</a>
                    </From.Group>

                  

                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={closeDialog}>Cancel</Button>
                    <Button variant='primary' type='submit'>BlogIT</Button>
             
                </Modal.Footer>
            </From>

        </Modal>
    )
}

export default UpdatePostModal