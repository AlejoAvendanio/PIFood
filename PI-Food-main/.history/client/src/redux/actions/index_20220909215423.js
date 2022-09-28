import axios from 'axios'

export const GET_FOOD = 'GET_FOOD' 

export function getFoot(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/repice")
        return dispatch({
            type: GET_FOOD,
            payload:json.data
        })
    }
}