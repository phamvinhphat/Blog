import { createContext, useReducer, useState } from 'react';
import {newsReducer} from '../reducers/newsReducer'
import{
    apiUrl, 
    NEWS_LOADED_SUCCESS, 
    NEWS_LOADED_FAIL,
    ADD_NEWS
} from './constants'
import axios from 'axios'

export const NewsContext = createContext()

const NewsContextProvider = ({children}) => {
    //State
    const[newsState, dispatch] = useReducer(newsReducer,{  
        New: null,
        news: [],
        newsLoading: true
    })

    const[showAddNewsModal, setShowAddNewsModal] = useState(false)
    const[showUpdateNewsModal, setShowUpdateNewsModal] = useState(false)

    const[showToast, setShowToast] = useState({
        show: false,
        message: '',
        type: null
    })

    // GET all posts
    const getNews = async() => {
        try {
            const response = await axios.get(apiUrl+'/news')
          
            if(response.data.success){
               dispatch({type: NEWS_LOADED_SUCCESS, payload: response.data.news}) 
            }
        } catch (error) {
            dispatch({type: NEWS_LOADED_FAIL})
        }
    }

    // add news
    const addNews = async newNews => {
        try{
            const response = await axios.post(apiUrl+'/news', newNews)
            if(response.data.success) {
                dispatch({type: ADD_NEWS, payload: response.data.New})
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : {success: false, message: 'server error'}
        }
    }

    // //delete post
    // const deletePost = async postId =>{

    //     try {
    //         const response = await axios.delete(apiUrl+'/posts/'+postId)
    //         if(response.data.success) {
    //             dispatch({type: DELETE_POST, payload: postId})
         
    //         }
    //     } catch (error) {
    //         return error.response.data ? error.response.data : {success: false, message: 'server error'}
 
    //     }
    // }


    // //Find post when user is updating post
    // const findPost = postId =>{
    //     const post = postState.posts.find(post =>post._id === postId )
    //     dispatch({type: FIND_POST, payload: post})
    // }

    // // update post
    // const updatePost = async updatedPost => {
    //     try {
    //         const response = await axios.put(apiUrl+'/posts/'+updatedPost._id, updatedPost)
    //         if(response.data.success) {
    //             dispatch({type: UPDATE_POST, payload: response.data.post})
    //             return response.data
    //         }
       
    //     } catch (error) {
    //         return error.response.data ? error.response.data : {success: false, message: 'server error'}

    //     }
    // }

    // // all post 
    // const getAllPosts = async() => {
    //     try {
    //         const response = await axios.get(apiUrl+'/posts/about')
          
    //         if(response.data.success){
    //            dispatch({type: ALL_POST_SUCCESS, payload: response.data.posts}) 
    //         }
    //     } catch (error) {
    //         dispatch({type: ALL_POST_FAIL})
    //     }
    // }
  





    // Post context data
    const newsContextData = {
        newsState, 
        getNews, 
       // getAllPosts,
        showAddNewsModal,
        setShowAddNewsModal, 
        addNews ,
        showToast,
         setShowToast,
       // deletePost, 
       // findPost, updatePost,
        showUpdateNewsModal, 
        setShowUpdateNewsModal
    }

    return (
        <NewsContext.Provider value={newsContextData}>
            {children}
        </NewsContext.Provider>
    )

}

export default NewsContextProvider