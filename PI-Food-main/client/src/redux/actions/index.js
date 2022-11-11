import axios from 'axios'

export const GET_FOOD = 'GET_FOOD' 
export const GET_NAME_QUERY = 'GET_NAME_QUERY'
export const GET_DIETS = 'GET_DIETS' 
export const FILTER_BY_DIETS = 'FILTER_BY_DIETS'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_SCORE = 'ORDER_BY_SCORE' 
export const DETAILS = 'DETAILS' 
export const ORDER_BY_REPICE_CREATE = 'ORDER_BY_REPICE_CREATE'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const DETAILS_FOOD = 'DETAILS_FOOD'


export function getFood(){
    return async function(dispatch){
        var json = await axios.get("https://repice.vercel.app/repice")
        return dispatch({
            type: GET_FOOD,
            payload:json.data
        })
    }
}

export function getNameQuery(payload){
    return async function(dispatch){
        var json = await axios.get(`https://repice.vercel.app/repice?name=${payload}`)
        console.log(json.data)
        return dispatch({
            type: GET_NAME_QUERY,
            payload:json.data
        })
    }
}

export function getDiets(){
    return async function(dispatch){
        var json = await axios.get('https://repice.vercel.app/diets')
        return dispatch({
            type: GET_DIETS,
            payload: json.data
        })
    }
}

export function filterByDiets(payload){
    return function(dispatch){
        return dispatch({
            type:FILTER_BY_DIETS,
            payload
        })
    }
}
export function orderByName(payload){
    return function(dispatch){
        return dispatch({
            type:ORDER_BY_NAME,
            payload
        })
    }
}
export function orderByScore(payload){
    return function(dispatch){
        return dispatch({
            type:ORDER_BY_SCORE,
            payload
        })
    }
}
export function filterRepiceCreate(payload){
    return function(dispatch){
        return dispatch({
            type:ORDER_BY_REPICE_CREATE,
            payload
        })
    }
}

export function details(id){
    return async function(dispatch){
        var json = await axios.get(`https://repice.vercel.app/repice/${id}`)
        return dispatch({
            type: DETAILS,
            payload:json.data
        })
    }
}

export function postRepice(payload){
    return async function(){
        let json = await axios.post('https://repice.vercel.app/repice',payload)
        return json
    }
}

export function addFavorite(payload){
    return function(dispatch){
        return dispatch({
            type:ADD_FAVORITE,
            payload
        })
    }
}

export function removeFavorites(payload){
    return function(dispatch){
        return dispatch({
            type: REMOVE_FAVORITE,
            payload
        })
    }
}

export function vacio(){
    return{
        type: DETAILS_FOOD
    }
}