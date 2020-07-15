import {
    FILTER,
    GET_PRODUCT,
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_RESET,
    ADD_TO_CART,
    GET_PRICE_PRODUCT,
    DELETE_PRODUCT,
    ADD_TO_CART_DETAIL,
    GET_MIN_PRICE,
    GET_MAX_PRICE,
    GET_INDEX_IMAGE,
    GET_PRODUCT_FAIL,
    GET_BANNER,
    GET_EVENT_BANNER
} from './actions';

const initialState = {
    products: [

    ],
    minPrice: 0,
    maxPrice: 0,
    category: '',
    product: undefined, // product detail
    index: -1,
    id: '',
    errMsg: '',
    status: 'Start Loading...',
    page: 1,
    auth: {

        isLogged: false,
        message: ''
    },
    cart: [],
    query: ' nokia ',
    loginStatus: false,
    totalPriceOfProduct: [],
    quantityProduct: [],
    value: '',
    isFilter: false,
    indexImage: 0,
    banner :[],
    productBanner : undefined,
    productEventBanner : []





}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER: {
            let newPBP = state.products
            newPBP.sort((a, b) => {
                switch (action.value) {
                    case 'lowToHigh': {
                        return a.price - b.price
                    }
                    case 'highToLow': {
                        return b.price - a.price
                    }

                }
            })
            return { ...state, value: action.value }
        }

        case GET_PRODUCT: {


            return { ...state, product: action.product, image: action.image }
        }
        case GET_PRODUCTS_START: {
            return { ...state, products: action.isNewSearch ? [] : state.products, status: 'Start Loading...', value: action.isNewSearch ? '' : state.value }
        }
        case GET_MIN_PRICE: {
            return { ...state, minPrice: action.minPrice }
        }
        case GET_MAX_PRICE: {
            return { ...state, maxPrice: action.maxPrice }
        }
        case GET_PRODUCTS_SUCCESS: {
            const { minPrice, maxPrice } = state
            const newProducts = [...state.products, ...action.products]
            const newProductsFFilter = newProducts.filter((product) => {
                return parseInt(product.price, 10) < maxPrice
            })
            const newProductsSFilter = newProductsFFilter.filter((product) => {
                return parseInt(product.price, 10) > minPrice
            })
            return {
                ...state, products: action.isFilter ? newProductsSFilter : newProducts.filter(product => product.percent_star != 0).sort((a,b)=>{
                    if(a.percent_star < b.percent_star)
                    return -1
                    else return 0
                })
                , status: 'Success', page: action.page, errMsg: '', query: action.query, isFilter: action.isFilter
            }

        }

        case GET_PRODUCTS_FAIL: {
            return { ...state, errMsg: action.errMsg, status: 'Fail' }
        }
        case GET_PRODUCT_FAIL: {
            return { ...state, product: undefined, status: 'Fail', errMsg: action.errMsg }
        }
        case ADD_TO_CART: {
            let { cart, products, product, totalPriceOfProduct, quantityProduct } = state
            const selected_Product = products[action.index]


            if (cart.findIndex(x => x.id === selected_Product.id) >= 0) {
                quantityProduct[cart.indexOf(selected_Product)] += action.quantity
                totalPriceOfProduct[cart.indexOf(selected_Product)] += selected_Product.price
            }
            else {
                cart.push(selected_Product)
                totalPriceOfProduct.push(selected_Product.price)
                quantityProduct.push(action.index = action.quantity)
            }

            return { ...state, cart: [...cart], totalPriceOfProduct: [...totalPriceOfProduct], quantityProduct: [...quantityProduct] }

        }

        case ADD_TO_CART_DETAIL: {
            const { cart, product, totalPriceOfProduct, quantityProduct } = state
            cart.push(product)
            totalPriceOfProduct.push(product.price)
            quantityProduct.push(action.quantity)
            return { ...state, cart: [...cart], totalPriceOfProduct: [...totalPriceOfProduct], quantityProduct: [...quantityProduct] }
        }

        case GET_PRICE_PRODUCT: {
            const { totalPriceOfProduct, quantityProduct } = state
            totalPriceOfProduct[action.index] = action.priceIndex
            quantityProduct[action.index] = action.quantity++


            return { ...state, totalPriceOfProduct: [...totalPriceOfProduct], quantityProduct: [...quantityProduct] }
        }

        case DELETE_PRODUCT: {
            const { cart, totalPriceOfProduct, quantityProduct } = state
            let i = action.index
            cart.splice(i, 1)
            totalPriceOfProduct.splice(i, 1)
            quantityProduct.splice(i, 1)
            return { ...state, cart: [...cart], totalPriceOfProduct: [...totalPriceOfProduct], quantityProduct: [...quantityProduct] }
        }
        case GET_INDEX_IMAGE: {
            return { ...state, indexImage: action.indexImage }
        }

        case LOGIN_START: {
            return { ...state, auth: { isLogged: false, message: '' } }
        }
        case LOGIN_SUCCESS: {
            return { ...state, auth: action.auth, loginStatus: true }
        }
        case LOGIN_FAIL: {
            return { ...state, auth: action.auth }
        }
        case LOGIN_RESET: {
            return { ...state, auth: { isLogged: false, message: 'logout success' }, cart: [], totalPriceOfProduct: [], quantityProduct: [], loginStatus: false }
        }

        case GET_BANNER :{
            return {...state , banner : action.banner }
        }
        case GET_EVENT_BANNER:{
            return {...state , productEventBanner : action.eventBanner}
        }
        default: return state;
    }
}

export default reducer;