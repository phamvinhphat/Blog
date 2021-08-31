import {
    NEWS_LOADED_FAIL, 
    NEWS_LOADED_SUCCESS,
    ADD_NEWS
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
    
    default: 
        return state
    }
}