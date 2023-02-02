import Axios from "../../helpers/axios"
import {
    GetProductWithSlug,
    RecomenndedProductsListUrl
} from "../../helpers/url"

const SET_LOADING = 'SET_LOADING'
const SET_RECOMMENDEDPRODUCTS = 'SET_RECOMMENDEDPRODUCTS'
const SET_PRODUCT = 'SET_PRODUCT'
const initialState = {
    recommendedProducts: [],
    product: {},
    loading: false,
}

function ProductsReduser(state = initialState, action) {
    switch (action.type) {
        case SET_RECOMMENDEDPRODUCTS:
            return {
                ...state, recommendedProducts: action.payload.products
            }
            case SET_LOADING:
                return {
                    ...state, loading: action.payload.loading
                }
                case SET_PRODUCT:
                    return {...state, product: action.payload.product}
                default:
                    return state
    }
}

export const SetRecommendedProductsAC = (products) => ({
    type: SET_RECOMMENDEDPRODUCTS,
    payload: {products},
})
export const SetLoadingAC = (loading) => ({
    type: SET_LOADING,
    payload: {loading}
})
export const SetProductAC = (product) => ({
    type: SET_PRODUCT,
    payload: {product},
})
export default ProductsReduser

export function GetRecommendedProducts() {
    return function (dispatch) {
        dispatch(SetLoadingAC(true))
        Axios.get(RecomenndedProductsListUrl)
            .then(function (response) {
                dispatch(SetRecommendedProductsAC(response.data.products))
                dispatch(SetLoadingAC(false))
            })
            .then(function (err) {
                dispatch(SetLoadingAC(false))
            })
    }
}
export function GetProduct(slug) {
    return async function(dispatch) {
        dispatch(SetLoadingAC(true))
        Axios.get(GetProductWithSlug(slug)).then(function(response) {
            dispatch(SetProductAC(response.data.product))
            dispatch(SetLoadingAC(false))
        }).catch(function(err) {
            console.log(err)
        })
    }
}