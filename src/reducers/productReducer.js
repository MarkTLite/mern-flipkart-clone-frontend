import { productConsts } from "../actions/constants";

const initState = {
    products:[],
    productsByPrice:{
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
        under40k: []

    }
}

//Export the reducer
export default (state = initState, action) =>{

    switch (action.type) {
        case productConsts.GET_PRODUCTS_BY_SLUG_SUCCESS:
            state = {
                ...state,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice
                }

            }
            console.log("productReducer: action",action);
            console.log("productReducer: state",state)
            break;
    
        default:
            break;
    }
    return state;
}