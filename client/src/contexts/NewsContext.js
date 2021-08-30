import { createContext, useReducer, useState } from 'react';
import { newsReducer } from '../reducers/newsReducer';
import { 
    apiUrl,
    NEWS_LOADED_SUCCESS, 
    NEWS_LOADED_FAIL
} from './constants';
import axios from 'axios'

export const NewsContext = createContext()

const NewsContextProvider = ({children}) => {

    //state 

    const[newsState, dispatch] = useReducer(newsReducer,{
        New: null,
        News: [],
        NewsLoading: true
    })

    const[showAddNewsModal, setShowAddNewsModal] = useState(false)
    const[showUpdateNewsModal, setShowUpdateNewsModal] = useState(false)

    const[showToast, setShowToast] = useState({
        show: false,
        message: '',
        type: null
    })

    //Get news
    const getNews = async() => {
        try {
            const response = await axios.get(apiUrl+'/news')

            if(response.data.success){
                dispatch({type: NEWS_LOADED_SUCCESS, payload: response.data.News})
            }
        } catch (error) {
            dispatch({type: NEWS_LOADED_FAIL})
        }
    }


    const newsContextData = {
        newsState,
        showAddNewsModal, setShowAddNewsModal,
        showUpdateNewsModal, setShowUpdateNewsModal,
        showToast, setShowToast,
        getNews
    }

    return (
        <NewsContext.Provider value={newsContextData}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContextProvider