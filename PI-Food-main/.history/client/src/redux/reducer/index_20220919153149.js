
import  {DETAILS, FILTER_BY_DIETS, GET_DIETS, GET_FOOD, GET_NAME_QUERY, ORDER_BY_NAME, ORDER_BY_SCORE} from '../actions/index'

const inicialState = {
    foods:[], // todas las comidas
    diets:[], //las dietas
    allFoods:[],  //modificar el orden   
    details:[] //detalle de alguna comida
}
export default function rootReducer(state = inicialState, action){
    switch(action.type){
        case GET_FOOD:
            return{
                ...state,
                foods:action.payload,
                allFoods:action.payload
            }
        case GET_NAME_QUERY:
            return{
                ...state,
                foods:action.payload
            }
        case GET_DIETS:
                return{
                    ...state,
                    diets:action.payload
                }
        case FILTER_BY_DIETS:
            const food_diets = state.allFoods
            let foodFilter = []
            if(action.payload==='All') foodFilter = food_diets
            else{
                for(let i= 0;i<food_diets.length;i++){
                let find = food_diets[i].diets.find(d=>d === action.payload)
                if(find) foodFilter.push(food_diets[i])
                }
            }
            return{
                ...state,
                foods:foodFilter
            }
        case ORDER_BY_NAME:
            let food = state.allFoods
            food = food.sort((a,b)=>{
                const titleA = a.title.toLowerCase()
                const titleB = b.title.toLowerCase()
                if(action.payload==='ASCENDENTE'){
                    // if(titleA<titleB) return -1
                    // if(titleB<titleA) return 1
                    // return 0
                    return titleA - titleB
                }else{
                    // if(titleA<titleB) return 1
                    // if(titleB<titleA) return -1
                    // return 0
                    return titleB - titleA
                }
            })
            return{
                ...state,
                foods:food
            }
        case ORDER_BY_SCORE:
            let score = state.allFoods
            score = score.sort((a,b)=>{
                const scoreA = a.healthScore
                const scoreB = b.healthScore
                if(action.payload==='ASCENDENTE'){
                    // if(scoreA<scoreB) return -1
                    // if(scoreB<scoreA) return 1
                    // return 0
                    return scoreA - scoreB

                }else{
                    // if(scoreA<scoreB) return 1
                    // if(scoreB<scoreA) return -1
                    // return 0
                    return scoreB - scoreA

                    }
            })
            return{
                ...state,
                foods:score
            }
        case DETAILS:
            let detail = action.payload
            return{
                ...state,
                details:detail
            }
        default: return state
    }
}