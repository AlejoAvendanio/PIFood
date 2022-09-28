import axios from 'axios'

export const GET_FOOD = 'GET_FOOD' 

export function getFood(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/repice")
        console.log(json)
        return dispatch({
            type: GET_FOOD,
            payload:json.data
        })
    }
}