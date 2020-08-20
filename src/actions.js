import { makeProductsApi, makeProductDetailApi, LOGIN_API, HOME_API, makeShopDetailApi,RECOMMEND } from "./apis";

// ---- Filter ----- //
export const FILTER = 'FILTER';
export const filterProduct = (value, isSorting = true) => ({
    type: FILTER,
    value, isSorting
})

// ----- end ----- //
// ----- unfilter ----- //
// export const UNFILTER = 'UNFILTER';
// export const Unfilter = (value , isSorting = false) =>({
//     type : UNFILTER,
//     value , isSorting
// })


// ---- end ---- //
// ----- get product <=> detail page  ----- //
export const GET_PRODUCT = 'GET_PRODUCT';
export const getProduct = (product, errMsg) => ({
    type: GET_PRODUCT,
    product, errMsg
})

// ----- end ----- //


// ----- product list ----- //
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const getProductsSucess = (products, page, query, isFilter) => ({
    type: GET_PRODUCTS_SUCCESS,
    products, page, query, isFilter
})
// ----- end ---- //

// ------ get failed ----- //
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';
export const getProductsFail = (errMsg, errMsgTopInput) => ({
    type: GET_PRODUCTS_FAIL,
    errMsg, errMsgTopInput
})

export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';
export const getProductFail = errMsg => ({
    type: GET_PRODUCT_FAIL,
    errMsg
})

// ----- end ----- //

// ----- get product start <=> fetch first //
export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const getProductsStart = (isNewSearch, isNextPage) => ({
    type: GET_PRODUCTS_START,
    isNewSearch, isNextPage
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
export const addToCart_Detail = (product, quantity = 1, index) => ({
    type: ADD_TO_CART_DETAIL,
    product, quantity, index
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
export const getMinPrice = (minPrice) => ({
    type: GET_MIN_PRICE,
    minPrice
})

export const GET_MAX_PRICE = 'GET_MAX_PRICE'
export const getMaxPrice = (maxPrice) => ({
    type: GET_MAX_PRICE,
    maxPrice
})

// ----- end ----- //

// ----- show img detail product ----- //
export const GET_INDEX_IMAGE = 'GET_INDEX_IMAGE'
export const getIndexImage = (indexImage) => ({
    type: GET_INDEX_IMAGE,
    indexImage
})

// ----- end ----- //

// ----- banner home page ----- //
export const GET_PRODUCTS_HOME = 'GET_PRODUCTS_HOME'
export const getProducts_Home = (productsHome) => ({
    type: GET_PRODUCTS_HOME,
    productsHome
})
// ----- end ----- //

// ----- detail banner home page ----- //
export const GET_EVENT_BANNER = 'GET_EVENT_BANNER'
export const getEventBanner = eventBanner => ({
    type: GET_EVENT_BANNER,
    eventBanner
})

// ----- end ----- //

// ----- history query ----- //
export const HISTORY_QUERY = 'HISTORY_QUERY'
export const historyQuery = query => ({
    type: HISTORY_QUERY,
    query
})

// ----- end ----- //

// ----- attribute color ----- //
export const ATTRIBUTE_COLOR = 'ATTRIBUTE_COLOR'
export const attributeColor = value => ({
    type: ATTRIBUTE_COLOR,
    value
})

// ----- end ----- //

// ----- attribute size ----- //
export const ATTRIBUTE_SIZE = 'ATTRIBUTE_SIZE'
export const attributeSize = value => ({
    type: ATTRIBUTE_SIZE,
    value
})

// // ----- end ----- //

//----- choose color -----//
export const WISH_COLOR = 'WISH_COLOR'
export const wishColor = (wishValue, index) => ({
    type: WISH_COLOR,
    wishValue, index
})
//----- end ----- //
//----- choose color -----//
export const WISH_SIZE = 'WISH_SIZE'
export const wishSize = (wishValue) => ({
    type: WISH_SIZE,
    wishValue
})
//----- end ----- //

//----- get detail shop -----//
export const GET_DETAIL_SHOP = 'GET_DETAIL_SHOP'
export const getDetailShop = (detailShop) => ({
    type: GET_DETAIL_SHOP,
    detailShop
})

// ----- end ----- // 

// ----- get package discount ----- //
export const GET_PACKAGE_DISCOUNT = 'GET_PACKAGE_DISCOUNT'
export const getPackageDiscount = (packageDiscount) => ({
    type: GET_PACKAGE_DISCOUNT,
    packageDiscount
})

// ---- end ----- //

// ----- wish user name ----- //
export const WISH_USER_NAME = 'WISH_USER_NAME'
export const wishUserNameFunc = userName => ({
    type: WISH_USER_NAME,
    userName
})

// ----- end ----- //

// ----- wish user name ----- //
export const WISH_PASS_WORD = 'WISH_PASS_WORD'
export const wishPassWordFunc = passWord => ({
    type: WISH_PASS_WORD,
    passWord
})

// ----- end ----- //
// ----- submit user ----- //
export const SUBMIT_USER = 'SUBMIT_USER'
export const submitUser = (userName, passWord) => ({
    type: SUBMIT_USER,
    userName, passWord
})
// ----- end ----- //

// ----- mess logining ----- //
export const MESS_LOGINING = 'MESS_LOGINING'
export const messLogining = mess => ({
    type: MESS_LOGINING,
    mess
})
// ----- end ----- //
// ----- fail submit ----- //
export const WRONG_INFO = 'WRONG_INFO'
export const wrongInfo = (mess) => ({
    type: WRONG_INFO,
    mess
})


// ----- end ----- //
// ----- log out user ----- //
export const LOG_OUT = 'LOG_OUT'
export const logOut = (mess) => ({
    type: LOG_OUT,
    mess
})

// ----- end ----- //
// ----- email user -----//
export const WISH_EMAIL = 'WISH_EMAIL'
export const wishEmailUser = wishEmail => ({
    type: WISH_EMAIL,
    wishEmail
})
// ----- registration ----- //
export const REGISTRATION = 'REGISTRATION'
export const regisNewUser = (userName, passWord, Email) => ({
    type: REGISTRATION,
    userName, passWord, Email
})

// ----- end ----- //
// ----- err mess registration ----- //
export const ERR_MESS_REGISTRATION = 'ERR_MESS_REGISTRATION'
export const errMessRegistration = mess => ({
    type: ERR_MESS_REGISTRATION,
    mess
})
// ----- end ----- //

// ----- get type home ----- //
export const TYPES_HOME = 'TYPES_HOME'
export const typesHome = (types) => ({
    type: TYPES_HOME,
    types
})
// ----- action get banner homepage ----- //
export const getProductsHome = () => {
    return dispatch => {
        fetch(RECOMMEND) // page , query
            .then(res => res.json()) //=> promise 1 chiều
            .then(json => {
                //dispath
                dispatch(getProducts_Home(json))
                // getAllTypeHome(json)
            })
            .catch(err => {
                console.error(err)
                dispatch(getProductsFail('rớt mạng rồi nè'))
            })
    }
}

export const getTypesHome = () => {
    return dispatch => {
        fetch(HOME_API)
            .then(res => res.json())
            .then(json => {
                dispatch(typesHome(json))
            })
            .catch(err => {
                console.error(err)
                dispatch(getProductsFail('rớt mạng rồi nè'))
            })
    }

}
// ----- end ----- //

// ----- action get product for website ------ //
export const getProducts = (query, page = 1, isNewSearch = false, isNextPage = false, isFilter = false) => {
    return dispatch => {
        dispatch(getProductsStart(isNewSearch, isNextPage));

        // fetch(makeProductsApi(page, query))
        fetch(makeProductsApi(page, query))
            // page , query
            .then(res => res.json())
            .then(json => {
                //dispath
                
                if(json.data === undefined){
                    dispatch(getProductsFail('Bạn đã xem hết sản phẩm'))
                }else{
                    dispatch(getProductsSucess(json.data, page, query, isFilter))
                }
            })
            .catch((err) => {
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
                // console.log(x)
                if (x === false) {
                    dispatch(getProduct(json));
                    for (let i = 0; i <= json.attribute.length - 1; i++) {
                        switch (json.attribute[i].name) {
                            case "Kích thước": {
                                dispatch(attributeSize(json.attribute[i].value))
                                break;
                            }
                            case "Màu sắc": {
                                dispatch(attributeColor(json.attribute[i].value))
                                break;
                            }
                            case "Kích thước quần": {
                                dispatch(attributeSize(json.attribute[i].value))
                                break;
                            }
                            default: return 'nothing'
                        }
                    }
                } else {
                    dispatch(getProductFail('Sorry about this problem but the product you want to buy can not found...'))
                }
            })
            .catch(err => {
                console.error(err)
            })
    }
}
// ----- end ----- //

// ----- action get detail info shop ----- //
export const getDetailInfoShop = (id) => {
    return dispatch => {
        fetch(makeShopDetailApi(id))
            .then(res => res.json())
            .then(json => {
                dispatch(getDetailShop(json))
            })
            .catch(err => {
                console.error(err)
                dispatch(getProductsFail('We have some problem about connecting'))
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


















