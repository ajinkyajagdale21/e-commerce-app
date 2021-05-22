export const dataReducer = (state,action)=>{
    switch(action.type){
        case 'LOADING_STATUS': 
            return {...state,loading:action.payload}
        case 'DATA':
            return {...state,data: action.payload}
        case "LOAD_CART" : 
            return {...state , cart : action.payload}
        case "LOAD_WISHLIST" : 
            return {...state , wishList : action.payload}
        case 'ADD_TO_CART':    
            return {...state,cart: [...state.cart,action.payload]}
        case 'ADD_TO_WISHLIST':
            return {...state,wishList:[...state.wishList,action.payload]}
        default:
            break;
            
    }
}