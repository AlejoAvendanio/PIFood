
import  {ADD_FAVORITE, DETAILS, FILTER_BY_DIETS, GET_DIETS, GET_FOOD, GET_NAME_QUERY, ORDER_BY_NAME, ORDER_BY_REPICE_CREATE, ORDER_BY_SCORE, REMOVE_FAVORITE} from '../actions/index'

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
            const food_diets = state.foods
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
            let food = state.foods
            let foodName = []
            if(action.payload ==='All'){
                foodName = state.foods
            }
            foodName = food.sort((a,b)=>{
                const titleA = a.title.toLowerCase()
                const titleB = b.title.toLowerCase()
                
                if(action.payload==='ASCENDENTE'){
                    if(titleA<titleB) return -1
                    if(titleB<titleA) return 1
                    return 0
                }
                if(action.payload==='DESCENDENTE'){
                    if(titleA<titleB) return 1
                    if(titleB<titleA) return -1
                    return 0
                }
            })
            
            return{
                ...state,
                allFoods:foodName
            }
        case ORDER_BY_SCORE:
            let score = state.foods
            if(action.payload ==='All'){
                    score = state.foods
                }
            score = score.sort((a,b)=>{
                const scoreA = a.healthScore
                const scoreB = b.healthScore
                
                if(action.payload==='ASCENDENTE'){
                    return scoreA - scoreB
                }if(action.payload==='DESCENDENTE'){
                    return scoreB - scoreA
                }
            })
            return{
                ...state,
                allFoods:score
            }
        case ORDER_BY_REPICE_CREATE:
            let recipes = state.foods;
            if(action.payload ==='CREATE'){
                recipes = recipes.filter(el=>typeof(el.id) ==='string')
            }else if (action.payload === 'All'){
                recipes = state.foods
            }
            return{
                ...state,
                allFoods:recipes
            }
        case DETAILS:
            let detail = action.payload
            return{
                ...state,
                details:detail
            }
        case ADD_FAVORITE:
            let repices = state.foods
            let favo = repices.filter(el=>el.id===action.payload)
            let allFavorites = state.favorites
            allFavorites.push(favo[0])
            console.log(allFavorites)
            return{
                ...state,
                favorites : allFavorites
            }
        case REMOVE_FAVORITE:
            let removeFavorites = state.favorites
            let favor= removeFavorites.filter(el=>el.id!=action.payload)
            console.log(favor)
            return{
                ...state,
                favorites: favor
            }
        default: return state
    }
}