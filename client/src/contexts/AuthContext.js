import { createContext, userReducer } from "react";
import axios from 'axios'
import {authRoducer} from "../reducers/AuthReducer";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) =>{
    const[authState, dispatch] = userReducer(authRoducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    // Login
}