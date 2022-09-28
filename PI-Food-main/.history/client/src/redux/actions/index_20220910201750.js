import axios from 'axios'

export const GET_FOOD = 'GET_FOOD' 
export const GET_NAME_QUERY = 'GET_NAME_QUERY'
export const GET_DIETS = 'GET_DIETS' 
export const FILTER_BY_DIETS = 'FILTER_BY_DIETS'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'

export function getFood(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/repice")
        return dispatch({
            type: GET_FOOD,
            payload:json.data
        })
    }
}

export function getNameQuery(payload){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/repice?name=${payload}`)
        console.log(json.data)
        return dispatch({
            type: GET_NAME_QUERY,
            payload:json.data
        })
    }
}

export function getDiets(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/diets')
        console.log(json.data)
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