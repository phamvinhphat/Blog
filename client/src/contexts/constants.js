export const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/api' : 'someDeployedURL'

export const LOCAL_STORAGE_TOKEN_NAME = 'learnit-merr'

//user
export const EDIT_USER = 'EDIT_USER'
export const SET_AUTH = 'SET_AUTH'



//Posts
export const POSTS_LOADED_SUCCESS = 'POSTS_LOADED_SUCCESS'
export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const FIND_POST = 'FIND_POST'
export const ALL_POST_SUCCESS = 'ALL_POST_SUCCESS'
export const ALL_POST_FAIL = 'ALL_POST_FAIL'


//News
export const NEWS_LOADED_SUCCESS = 'NEWS_LOADED_SUCCESS'
export const NEWS_LOADED_FAIL = 'NEWS_LOADED_FAIL'
export const ADD_NEWS = 'ADD_NEWS'
export const DELETE_NEWS = 'DELETE_NEWS'
export const FIND_NEWS = 'FIND_NEWS'
export const UPDATE_NEWS = 'UPDATE_NEWS'
export const ALL_NEWS_SUCCESS = 'ALL_NEWS_SUCCESS'
export const ALL_NEWS_FAIL = 'ALL_NEWS_FAIL'
