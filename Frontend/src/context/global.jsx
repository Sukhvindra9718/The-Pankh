import React from "react";

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
                            videoUrl: `http://localhost:3000/public/videos/${video.filename}`
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
                            imageUrl: `http://localhost:3000/public/images/${image.filename}`
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
            const res = await fetch('/api/videos',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const data = await res.json()
            console.log(data)
            dispatch({type: SET_VIDEOS, payload: data.videos})
        } catch (error) {
            console.log(error)
        }
    }
    const getAllImages = async () => {
        try {
            const res = await fetch('http://192.168.1.9:3000/api/images',{
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json()
            console.log(data)
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