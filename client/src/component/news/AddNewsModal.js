import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import From from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { NewsContext } from '../../contexts/NewsContext'
import FileBase64 from 'react-file-base64'

const AddNewsModal = () =>{
    // context
    const {
        showAddNewsModal, 
        setShowAddNewsModal, 
        addNews, 
        setShowToast
    } = useContext(NewsContext)

    //State
    const[newNews, setNewNews] = useState({
            title: '', 
            content: '', 
            author: '', 
            url: '', 
            attachment: '', 
            likeCount: 0
    })

    //Reset data
    const resetAddNewsData = () =>{
        setNewNews({
            title: '', 
            content: '', 
            author: '', 
            url: '', 
            attachment: '', 
            likeCount: 0
        })
        setShowAddNewsModal(false)
    }

    const onSubmit = async event => {
        event.preventDefault()
        const {success, message} = await addNews(newNews)
        resetAddNewsData()
        setShowToast({show: true, message, type: success ? 'success' : 'danger'})
    }

    const {title, content, author, url, attachment} = newNews

    const onChangeNewNewsForm = event =>setNewNews({...newNews, [event.target.name]: event.target.value})

    //close
    const closeDialog = () => {
        resetAddNewsData()
    }

    return (
        <Modal show={showAddNewsModal} onHide={closeDialog}>
        <Modal.Header closeButton>
            <Modal.Title>What do you want to blog ?</Modal.Title>
        </Modal.Header>
        <From onSubmit={onSubmit}>
            <Modal.Body>
                <From.Group>
                      <From.Text>Title</From.Text>
                    <From.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' value={title} onChange={onChangeNewNewsForm}/>
                </From.Group>

                <From.Group>
                    <From.Text>Languages</From.Text>
                    <From.Control type='text' placeholder='Languages' name='author' required aria-describedby='Languages-help' value={author} onChange={onChangeNewNewsForm} />
                   
                </From.Group>

                <From.Group>
                     <From.Text>Content</From.Text>  
                    <From.Control as='textarea' rows={3} placeholder='Content' name='content' required aria-describedby='content-help' value={content} onChange={onChangeNewNewsForm} />
                    
                </From.Group>

        
                <FileBase64
                    accept = "image/*"
                    multiple={false}
                    type='file'
                    value={attachment}
                    onDone = {({base64}) => setNewNews({...newNews, attachment: base64})}
                />
                

                <From.Group>
                    <From.Text>Url git</From.Text> 
                    <From.Control  type='text' placeholder='Git project' name='url' required aria-describedby='url-help' value={url} onChange={onChangeNewNewsForm}/>
                      <a href="https://github.com/" target="_blank" rel = "noreferrer" >Your Git</a>
                </From.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={closeDialog} >Cancel</Button>
                <Button variant='primary' type='submit'>Create</Button>
         
            </Modal.Footer>
        </From>

    </Modal>
    )
}
export default AddNewsModal