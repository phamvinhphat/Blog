import { createContext, useReducer, useState } from 'react';
import {newsReducer} from '../reducers/newsReducer'
import{
    apiUrl, 
    NEWS_LOADED_SUCCESS, 
    NEWS_LOADED_FAIL,
    ADD_NEWS,
    DELETE_NEWS,
    FIND_NEWS,
    UPDATE_NEWS,
    ALL_NEWS_SUCCESS,
    ALL_NEWS_FAIL
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
    const deleteNews = async newsId =>{

        try {
            const response = await axios.delete(apiUrl+'/news/'+newsId)
            if(response.data.success) {
                dispatch({type: DELETE_NEWS, payload: newsId})       
            }
        } catch (error) {
            return error.response.data ? error.response.data : {success: false, message: 'server error'}
 
        }
    }


    // //Find post when user is updating post
    const findNews = newsId => {
        const news = newsState.news.find(New => New._id === newsId )
        dispatch({type: FIND_NEWS, payload: news})
    }

    // update post
    const updateNews = async updatedNews => {
        try {
            const response = await axios.put(apiUrl+'/news/'+updatedNews._id, updatedNews)
            if(response.data.success) {
                dispatch({type: UPDATE_NEWS, payload: response.data.New})
                return response.data
            }
       
        } catch (error) {
            return error.response.data ? error.response.data : {success: false, message: 'server error'}

        }
    }

    // all post 
    const getAllNews = async() => {
        try {
            const response = await axios.get(apiUrl+'/news/all')
          
            if(response.data.success){
               dispatch({type: ALL_NEWS_SUCCESS, payload: response.data.news}) 
            }
        } catch (error) {
            dispatch({type: ALL_NEWS_FAIL})
        }
    }
  





    // Post context data
    const newsContextData = {
        newsState, 
        getNews, getAllNews,
       // getAllPosts,
        showAddNewsModal,
        setShowAddNewsModal, 
        addNews ,
        showToast,
        setShowToast,
        deleteNews, 
        findNews, updateNews,
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