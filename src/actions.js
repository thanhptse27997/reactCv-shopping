import { makeProductsApi, makeProductDetailApi, LOGIN_API, HOME_API } from "./apis";

// ---- Filter ----- //
export const FILTER = 'FILTER';
export const filterPrice =(value , isFilter) => ({
    type: FILTER,
    value , isFilter
})

// ----- end ----- //

// ----- get product <=> detail page  ----- //
export const GET_PRODUCT = 'GET_PRODUCT';
export const getProduct = (product, errMsg) => ({
    type: GET_PRODUCT,
    product, errMsg
})

// ----- end ----- //


// ----- product list ----- //
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const getProductsSucess = (products, page, query ,isFilter) => ({
    type: GET_PRODUCTS_SUCCESS,
    products, page, query ,isFilter
})
// ----- end ---- //

// ------ get failed ----- //
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';
export const getProductsFail = errMsg => ({
    type: GET_PRODUCTS_FAIL,
    errMsg
})

export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';
export const getProductFail = errMsg =>({
    type : GET_PRODUCT_FAIL,
    errMsg
})

// ----- end ----- //

// ----- get product start <=> fetch first //
export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const getProductsStart = (isNewSearch , isNextPage) => ({
    type: GET_PRODUCTS_START,
    isNewSearch , isNextPage
})

// ----- end ----- //

// ----- login ----- //
export const LOGIN_START = 'LOGIN_START';
export const loginStart = () => ({
    type: LOGIN_START
})

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = auth => ({
    type: LOGIN_SUCCESS,
    auth
})

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const loginFail = (auth) => ({
    type: LOGIN_FAIL,
    auth
})

export const LOGIN_RESET = 'LOGIN_RESET';
export const resetAuth = auth => ({
    type: LOGIN_RESET,
    auth
})
// ----- end ----- //

// ----- cart ----- //
export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = (index, quantity = 1) => ({
    type: ADD_TO_CART,
    index, quantity
})

export const dispatchCart = (cart) => {
    return dispatch => {
        dispatch(addToCart())
            .fetch(cart)
    }
}

export const ADD_TO_CART_DETAIL = 'ADD_TO_CART_DETAIL'
export const addToCart_Detail = (product , quantity = 1) => ({
    type: ADD_TO_CART_DETAIL,
    product ,quantity
})

export const dispatchCart_detail = (cart) => {
    return dispatch => {
        dispatch(addToCart_Detail())
            .fetch(cart)
    }
}
// ----- end ----- //

// ----- filter product by price ----- //
export const GET_PRICE_PRODUCT = 'GET_PRICE'
export const getPrice = (priceIndex, index, quantity) => ({
    type: GET_PRICE_PRODUCT,
    priceIndex,
    index, quantity
})

// ----- end ----- //

// ----- delete product in cart ----- //
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const deleteProduct = (index) => ({
    type: DELETE_PRODUCT,
    index
})

// ----- end ----- //

// ----- price by wish user ----- //
export const GET_MIN_PRICE = 'GET_MIN_PRICE'
export const getMinPrice = (minPrice)=>({
    type : GET_MIN_PRICE,
    minPrice
})

export const GET_MAX_PRICE = 'GET_MAX_PRICE'
export const getMaxPrice = (maxPrice)=>({
    type : GET_MAX_PRICE,
    maxPrice
})

// ----- end ----- //

// ----- show img detail product ----- //
export const GET_INDEX_IMAGE = 'GET_INDEX_IMAGE'
export const getIndexImage = (indexImage)=> ({
    type: GET_INDEX_IMAGE,
    indexImage
}) 

// ----- end ----- //

// ----- banner home page ----- //
export const GET_BANNER = 'GET_BANNER'
export const getBanner = (banner) =>({
    type : GET_BANNER,
    banner
})
// ----- end ----- //

// ----- detail banner home page ----- //
export const GET_EVENT_BANNER = 'GET_EVENT_BANNER'
export const getEventBanner = eventBanner =>({
    type : GET_EVENT_BANNER,
    eventBanner
})

// ----- end ----- //

// ----- history query ----- //
export const HISTORY_QUERY = 'HISTORY_QUERY'
export const historyQuery = query =>({
    type : HISTORY_QUERY,
    query
})

// ----- end ----- //
// ----- action fetch detail banner home page ----- //
// export const getEvent = ()=>{
//     return dispatch =>{
//         fetch('https://cors-anywhere.herokuapp.com/https://mapi.sendo.vn/mob/event/deal-soc-xe-may')
//         // fetch('https://cors-anywhere.herokuapp.com/https://mapi.sendo.vn/mob/event/${campaign_id}')
     
//             .then(res => res.json())
//             .then(json =>{
//                 dispatch(getEventBanner(json.product))
//             })
//             .catch(err => {
//                 console.error(err)
//                 dispatch(getProductsFail('rớt mạng rồi nè'))
//             })
//     }
// }
// ----- end ----- //


// ----- action get banner homepage ----- //
export const getHomeApi = () => {
    return dispatch => {
        fetch(HOME_API) // page , query
            .then(res => res.json()) //=> promise 1 chiều
            .then(json => {
                //dispath
                dispatch(getBanner(json[0].data.list))
            })
            .catch(err => {
                console.error(err)
                dispatch(getProductsFail('rớt mạng rồi nè'))
            })
    }
}
// ----- end ----- //

// ----- action get product for website ------ //
export const getProducts = (query, page = 1, isNewSearch  = false , isNextPage = false , isFilter = false) => {
    return dispatch => {
        dispatch(getProductsStart(isNewSearch ,isNextPage));
        
        // fetch(makeProductsApi(page, query))
        fetch(makeProductsApi(page , query))
         // page , query
            .then(res => res.json())
            .then(json => {
                //dispath
                dispatch(getProductsSucess(json.data, page, query , isFilter))
                
            })
            .catch(err => {
                console.error(err)
                dispatch(getProductsFail('We have some problem about connecting'))
            })
    }
}
// ----- end ----- //

// ----- action get detail product ------ //
export const getDetailProduct = (id) => {
    return dispatch => {

        fetch(makeProductDetailApi(id))
            .then(res => res.json())
            .then(json => {
                let x = Array.isArray(json)
                console.log(x)
                if ( x === false){
                    dispatch(getProduct(json))
                }else{
                    dispatch(getProductFail('Sorry about this problem but the product you want to buy can not found...'))
                }
                
            })
            .catch(err => {
                console.error(err)

            })
    }
}
// ----- end ----- //


// ----- action login user ------ //
export const login = (username, password) => {
    return dispatch => {
        dispatch(loginStart())
        fetch(LOGIN_API, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                if (json.isLogged) {
                    localStorage.setItem('AUTH', JSON.stringify(json))
                    dispatch(loginSuccess(json))
                }
                else dispatch(loginFail(json))
            })
            .catch(err => {
                console.error(err)
                dispatch(loginFail({ message: err.message }))
            })
    }
}

// ----- end ----- //


















