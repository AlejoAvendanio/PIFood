import axios from 'axios'

export const GET_FOOD = 'GET_FOOD' 
export const GET_NAME_QUERY = 'GET_NAME_QUERY'
export const GET_DIETS = 'GET_DIETS' 

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

export function gatDiets(){
    return async function(dispatch){
        var json = await axios.get('http://http://localhost:3001/diets')
        return dispatch({
            type: GET_DIETS,
            payload: json.data
        })
    }
}
