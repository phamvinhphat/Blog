import {
    NEWS_LOADED_FAIL, 
    NEWS_LOADED_SUCCESS,
    ADD_NEWS,
    DELETE_NEWS,
    FIND_NEWS,
    UPDATE_NEWS,
    ALL_NEWS_SUCCESS,
    ALL_NEWS_FAIL,
    
} from "../contexts/constants"

export const newsReducer =(state, action) => {
    const{type,payload} = action
    switch(type) {
    
    // getNews
        // success
    case NEWS_LOADED_SUCCESS:  
    return{
        ...state,
        news: payload,
        newsLoading: false
    }

        // FAIL
    case NEWS_LOADED_FAIL:  
    return{
        ...state,
        news: [],
        newsLoading: false
    }

       // add news
    case ADD_NEWS:  
    return{
           ...state,
           news: [...state.news, payload]  
    }

    // delete news
    case DELETE_NEWS:
        return{
            ...state,
            news: state.news.filter(New => New._id !== payload)
    }

    // find news
    case FIND_NEWS:
        return {
            ...state,
            New: payload
    }

    //Update news
    case UPDATE_NEWS:
        const newNews = state.news.map(New => New._id === payload._id ? payload : New)
    return {
          ...state,
          news: newNews
    }

    // success
    case ALL_NEWS_SUCCESS:  
    return{
              ...state,
              news: payload,
              newsLoading: false
    }
      
              // FAIL
    case ALL_NEWS_FAIL:  
    return{
              ...state,
              news: [],
              newsLoading: false
    }

    
    default: 
        return state
    }
}