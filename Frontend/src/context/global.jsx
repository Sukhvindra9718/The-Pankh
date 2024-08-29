import React from "react";
import axios from 'axios'
const GlobalContext = React.createContext()

//actions
const LOADING = 'LOADING'
const SET_VIDEOS = 'SET_VIDEOS'
const SET_IMAGES = 'SET_IMAGES'

const reducer = (state, action) => {
    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case SET_VIDEOS:
            return{
                ...state,
                loading: false,
                videos: [
                    ...action.payload.map((video) => {
                        return{
                            ...video,
                            videoUrl: `http://165.227.97.26:3001/public/videos/${video.filename}`
                        }
                    })
                ]
            }
        case SET_IMAGES:
            return{
                ...state,
                loading: false,
                images: [
                    ...action.payload.map((image) => {
                        return{
                            ...image,
                            imageUrl: `http://165.227.97.26:3001/public/images/${image.filename}`
                        }
                    })
                ]
            }
        default:
            return state
    }
}

export const GlobalProvider = ({children}) => {
    const initialState = {
        videos: [],
        images: [],
        loading: false,
    }

    const [state, dispatch] = React.useReducer(reducer, initialState)

    //get videos
    const getAllVideos = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const {data} = await axios.get('http://165.227.97.26:3001/api/v1/videos',config);
            dispatch({type: SET_VIDEOS, payload: data.videos})
        } catch (error) {
            console.log(error)
        }
    }
    const getAllImages = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const {data} = await axios.get('http://165.227.97.26:3001/api/v1/images',config);
  
            dispatch({type: SET_IMAGES, payload: data.images})
        } catch (error) {
            console.log(error)
        }
    }
    

    return (
        <GlobalContext.Provider value={{
            ...state,
            getAllVideos,
            getAllImages
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(GlobalContext)
}