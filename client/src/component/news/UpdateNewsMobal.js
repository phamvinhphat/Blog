import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import From from 'react-bootstrap/Form'
import { useContext, useState, useEffect } from 'react'
import { NewsContext } from '../../contexts/NewsContext'
import FileBase64 from 'react-file-base64'

const UpdateNewsMobal = () =>{
    // context
    const {
        newsState: {New},
        updateNews,
        setShowToast,
        showUpdateNewsModal, 
        setShowUpdateNewsModal
      
    } = useContext(NewsContext)

    //State
    const[updatedNews, setUpdatedNews] = useState(New)

    useEffect(() => setUpdatedNews(New),[New])

    const {title, content, author, url, attachment} = updatedNews

    const onChangeUpdatedNewsForm = event =>setUpdatedNews({...updatedNews, [event.target.name]: event.target.value})


    //Reset data
    const resetUpdateNewsData = () =>{
        setUpdatedNews(New)
        setShowUpdateNewsModal(false)
    }

    const onSubmit = async event => {
        event.preventDefault()
        const {success, message} = await updateNews(updatedNews)
        resetUpdateNewsData()
        setShowToast({show: true, message, type: success ? 'success' : 'danger'})
    }
    
    //close
    const closeDialog = () => {
        resetUpdateNewsData()
    }

    return (
        <Modal show={showUpdateNewsModal} onHide={closeDialog}>
        <Modal.Header closeButton>
            <Modal.Title>What do you want to blog ?</Modal.Title>
        </Modal.Header>
        <From onSubmit={onSubmit}>
            <Modal.Body>
                <From.Group>
                      <From.Text>Title</From.Text>
                    <From.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' value={title} onChange={onChangeUpdatedNewsForm}/>
                </From.Group>

                <From.Group>
                    <From.Text>Languages</From.Text>
                    <From.Control type='text' placeholder='Languages' name='author' required aria-describedby='Languages-help' value={author} onChange={onChangeUpdatedNewsForm} />
                   
                </From.Group>

                <From.Group>
                     <From.Text>Content</From.Text>  
                    <From.Control as='textarea' rows={3} placeholder='Content' name='content' required aria-describedby='content-help' value={content} onChange={onChangeUpdatedNewsForm} />
                    
                </From.Group>

                <From.Group>
                {/* <FileBase64
                    accept = "image/*"
                    multiple={false}
                    type='file'
                    value={attachment}
                    onDone = {({base64}) => setNewNews({...newNews, attachment: base64})}
                /> */}
                   <From.Text>attachment</From.Text>  
                    <From.Control as='textarea' rows={3} placeholder='attachment' name='attachment' required aria-describedby='content-help' value={attachment} onChange={onChangeUpdatedNewsForm} />
                    
                </From.Group>

                <From.Group>
                    <From.Text>Url git</From.Text> 
                    <From.Control  type='text' placeholder='Git project' name='url' required aria-describedby='url-help' value={url} onChange={onChangeUpdatedNewsForm}/>
                      <a href="https://github.com/" target="_blank" rel = "noreferrer" >Your Git</a>
                </From.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={closeDialog} >Cancel</Button>
                <Button variant='primary' type='submit'>Update</Button>
         
            </Modal.Footer>
        </From>

    </Modal>
    )
}
export default UpdateNewsMobal