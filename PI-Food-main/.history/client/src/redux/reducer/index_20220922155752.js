
import  {DETAILS, FILTER_BY_DIETS, GET_DIETS, GET_FOOD, GET_NAME_QUERY, ORDER_BY_NAME, ORDER_BY_REPICE_CREATE, ORDER_BY_SCORE} from '../actions/index'

const inicialState = {
    foods:[], // todas las comidas
    diets:[], //las dietas
    allFoods:[],  //modificar el orden   
    details:[], //detalle de alguna comida
    favorites:[]
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
            if(action.payload==='All') foodFilter = state.foods
            else{
                for(let i= 0;i<food_diets.length;i++){
                let find = food_diets[i].diets.find(d=>d === action.payload)
                if(find) foodFilter.push(food_diets[i])
                }
            }
            return{
                ...state,
                allFoods:foodFilter
            }
        case ORDER_BY_NAME:
            let food = state.allFoods
            food = food.sort((a,b)=>{
                const titleA = a.title.toLowerCase()
                const titleB = b.title.toLowerCase()
                if(action.payload ==='All'){
                    return state.foods
                }
                else if(action.payload==='ASCENDENTE'){
                    if(titleA<titleB) return -1
                    if(titleB<titleA) return 1
                    return 0
                }else if(action.payload==='DESCENDENTE'){
                    if(titleA<titleB) return 1
                    if(titleB<titleA) return -1
                    return 0
                }
            })
            return{
                ...state,
                allFoods:food
            }
        case ORDER_BY_SCORE:
            let score = state.allFoods
            score = score.sort((a,b)=>{
                const scoreA = a.healthScore
                const scoreB = b.healthScore
                if(action.payload ==='All'){
                    return state.foods
                }else if(action.payload==='ASCENDENTE'){
                    return scoreA - scoreB
                }else if(action.payload==='DESCENDENTE'){
                    return scoreB - scoreA
                }
            })
            return{
                ...state,
                allFoods:score
            }
        case ORDER_BY_REPICE_CREATE:
            let repices = state.allFoods;
            console.log(action.payload)
            console.log(repices)
            if(action.payload ==='CREATE'){
            repices = repices.filter(el=>typeof(el.id)==='STRING')
            }
            console.log(repices)
            return{
                ...state,
                allFoods:repices
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