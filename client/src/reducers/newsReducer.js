import {
    NEWS_LOADED_FAIL, NEWS_LOADED_SUCCESS
} from "../contexts/constants"

export const newsReducer =(state, action) => {
    const{type,payload} = action
    switch(type) {
    
            // getNews
        // success
    case NEWS_LOADED_SUCCESS:  
    return{
        ...state,
        posts: payload,
        postsLoading: false
    }

        // FAIL
    case NEWS_LOADED_FAIL:  
    return{
        ...state,
        posts: [],
        postsLoading: false
    }
    
    default: 
        return state
    }
}