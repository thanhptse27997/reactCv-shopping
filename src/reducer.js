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
    GET_PRICE_PRODUCT,
    DELETE_PRODUCT,
    ADD_TO_CART_DETAIL,
    GET_MIN_PRICE,
    GET_MAX_PRICE,
    GET_INDEX_IMAGE,
    GET_PRODUCT_FAIL,
    GET_PRODUCTS_HOME,
    GET_EVENT_BANNER,
    HISTORY_QUERY,
    ATTRIBUTE_SIZE,
    ATTRIBUTE_COLOR,
    WISH_COLOR,
    WISH_SIZE,
    GET_DETAIL_SHOP,
    GET_PACKAGE_DISCOUNT,
    WISH_USER_NAME,
    WISH_PASS_WORD,
    SUBMIT_USER,
    WRONG_INFO,
    LOG_OUT,
    WISH_EMAIL,
    REGISTRATION,
    ERR_MESS_REGISTRATION,
    MESS_LOGINING,
    TYPES_HOME
    // UNFILTER,
} from './actions';
// import handleCurrency from './HandleCurrency'
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
    errMsgTopInput: '',
    status: 'Start Loading...',
    page: 1,
    cart: [],
    query: '',
    loginStatus: false,
    totalPriceOfProduct: [],
    quantityProduct: [],
    value: '',
    isFilter: false,
    isSorted: false,
    indexImage: 0,
    banner: [],
    productBanner: undefined,
    productEventBanner: [],
    historyQuery: [],
    attributeColor: [],
    attributeSize: [],
    chooseColor: [],
    chooseSize: [],
    wishColor: 'none',
    wishSize: 'none',
    detailShop: undefined,
    packageDiscount: [],
    productsFilter: [],
    valueFilter: 'default-filter',
    totalUserAccount: [
        {
            userName: 'admin', passWord: 'admin', email: 'admin@gmail.com', cartUser: [], historyQueryUser: [],
            totalPriceOfProductUser: [], quantityProductUser: [],chooseColorUser : [] , chooseSizeUser : []
        }
    ],
    wishUserName: '',
    wishPassWord: '',
    messageLogin: '',
    messageRegistration: '',
    userLogged: [

    ],
    wishEmail: '',
    typesHome: [],
    productsHome : []

}

// localStorage.clear()
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES_HOME: {
            return { ...state, typesHome: action.types }
        }
        case FILTER: {
            let { products, productsFilter, isSorted } = state
            switch (action.value) {
                case 'lowToHigh': {
                    productsFilter.sort((a, b) => {
                        return a.final_price - b.final_price
                    })
                    isSorted = action.isSorting
                    break;
                }
                case 'highToLow': {
                    productsFilter.sort((a, b) => {
                        return b.final_price - a.final_price
                    })
                    isSorted = action.isSorting
                    break;
                }
                case 'lowToHighRating': {
                    productsFilter.sort((a, b) => {
                        return a.percent_star - b.percent_star
                    })
                    isSorted = action.isSorting
                    break;
                }
                case 'highToLowRating': {
                    productsFilter.sort((a, b) => {
                        return b.percent_star - a.percent_star
                    })
                    isSorted = action.isSorting
                    break;
                }
                case 'mostBuy': {
                    productsFilter.sort((a, b) => {
                        return b.order_count - a.order_count
                    })
                    isSorted = action.isSorting
                    break;
                }

                case 'default-filter': {
                    isSorted = false
                    products = [...products]
                    break;
                }
                default: break;
            }
            return { ...state, products: [...products], productsFilter: [...productsFilter], valueFilter: action.value, isSorted: isSorted }
        }
        case WISH_USER_NAME: {
            return { ...state, wishUserName: action.userName }
        }
        case WISH_PASS_WORD: {
            return { ...state, wishPassWord: action.passWord }
        }
        case SUBMIT_USER: {
            let { cart, historyQuery, totalPriceOfProduct, quantityProduct,chooseColor,chooseSize, wishUserName, wishPassWord, loginStatus, messageLogin, userLogged } = state
            let defaultData = JSON.parse(localStorage.getItem('dataUser'))
            // console.log('totalUserAccount' , totalUserAccount)
            if(defaultData === null || defaultData === undefined){
                messageLogin = 'tài khoản chưa được đăng kí'
            }else{
                for (let i = 0; i <= defaultData.length - 1; i++) {
                    // console.log('i = ', defaultData.length - 1)
                    if (action.userName === defaultData[i].userName && action.passWord === defaultData[i].passWord) {
                        loginStatus = true
                        messageLogin = 'success'
                        userLogged.push({ name: action.userName, password: action.passWord })
                        cart = defaultData[i].cartUser
                        historyQuery = defaultData[i].historyQueryUser
                        totalPriceOfProduct = defaultData[i].totalPriceOfProductUser
                        quantityProduct = defaultData[i].quantityProductUser
                        chooseSize = defaultData[i].chooseSizeUser
                        chooseColor = defaultData[i].chooseColorUser
                        wishPassWord = ''
                        wishUserName = ''
                        // console.log('đã đăng nhập')
                        break;
                    } else {
                        loginStatus = false
                        messageLogin = ' Sai tên đăng nhập hoặc mật khẩu'
                        // console.log('có chạy submit user ko ?')
                    }
                }
            }
            return { ...state, historyQuery: historyQuery, cart: cart, loginStatus: loginStatus, messageLogin: messageLogin, wishPassWord: wishPassWord, wishUserName: wishUserName, wishEmail: '', userLogged: userLogged, totalPriceOfProduct: totalPriceOfProduct, quantityProduct: quantityProduct , chooseColor : chooseColor , chooseSize : chooseSize }
        }
        case MESS_LOGINING: {
            return { ...state, messageLogin: action.mess }
        }
        case WRONG_INFO: {
            return { ...state, messageLogin: action.mess }
        }
        case LOG_OUT: {
            let { loginStatus, userLogged, products, totalUserAccount, cart, totalPriceOfProduct, quantityProduct ,chooseColor,chooseSize,historyQuery} = state
            loginStatus = false
            products = []

            for (let i = 0; i <= totalUserAccount.length - 1; i++) {
                if(totalUserAccount[i].userName === userLogged[0].name){
                    totalUserAccount[i].cartUser = cart
                    totalUserAccount[i].quantityProductUser = quantityProduct
                    totalUserAccount[i].totalPriceOfProductUser = totalPriceOfProduct
                    totalUserAccount[i].chooseColorUser = chooseColor
                    totalUserAccount[i].chooseSizeUser = chooseSize
                    totalUserAccount[i].historyQueryUser = historyQuery
                    // console.log('có chạy if log out ko ?')
                }
                // console.log('log này của hàm for')
            }
            const defaultData = JSON.stringify(totalUserAccount)
            localStorage.setItem('dataUser', defaultData)
            userLogged.splice(0, 1)
            return { ...state, cart: [], loginStatus: loginStatus, messageLogin: action.mess, userLogged: userLogged, messageRegistration: '', historyQuery: [], query: '', products: products, totalPriceOfProduct: [], quantityProduct: [], totalUserAccount: totalUserAccount, chooseColor :[] , chooseSize : [] }
        }
        case WISH_EMAIL: {
            return { ...state, wishEmail: action.wishEmail }
        }
        case REGISTRATION: {
            let { totalUserAccount, messageRegistration } = state
            if (action.userName.length < 6) {
                messageRegistration = 'Tên đăng nhập tối thiểu 6 kí tự'
            } else if (action.passWord.length < 6) {
                messageRegistration = 'Mật khẩu phải tối thiểu 6 kí tự'
            } else if (action.Email.slice(-10) !== '@gmail.com') {
                messageRegistration = 'Email bắt buộc định dạng theo gmail'
            } else {

                messageRegistration = 'Đăng kí thành công'
                totalUserAccount.push({ userName: action.userName, passWord: action.passWord, email: action.Email, cartUser: [], historyQueryUser: [], totalPriceOfProductUser: [], quantityProductUser: [],
                chooseColorUser : [] , chooseSizeUser : [] })
                const defaultData=JSON.stringify(totalUserAccount)
                localStorage.setItem('dataUser' , defaultData)

                // let obj=JSON.parse(localStorage.getItem('dataUser'))
                // obj.push(userData)
                // localStorage.setItem('dataUser' , obj)
            }
            

            for (let i = 0; i < totalUserAccount.length - 1; i++) {
                if (action.userName === totalUserAccount[i].userName) {
                    messageRegistration = 'Tên đăng nhập đã tồn tại'
                    totalUserAccount.splice(totalUserAccount.length - 1, 1)
                    break;
                }
                if (action.Email === totalUserAccount[i].email) {
                    messageRegistration = 'Email đã được đăng kí'
                    totalUserAccount.splice(totalUserAccount.length - 1, 1)
                    break;
                }
            }
            return { ...state, totalUserAccount: totalUserAccount, messageRegistration: messageRegistration }
        }
        case ERR_MESS_REGISTRATION: {
            return { ...state, messageRegistration: action.mess }
        }
        case GET_PRODUCT: {
            return { ...state, product: action.product, image: action.image, status: 'Start Loading...', detailShop: undefined,attributeColor: [] , attributeSize : []  }
        }
        case GET_DETAIL_SHOP: {
            return { ...state, detailShop: action.detailShop, status: 'Success' }
        }
        case GET_PRODUCTS_START: {
            return { ...state, products: action.isNewSearch || action.isNextPage ? [] : state.products, status: 'Start Loading...', isFocus: true, valueFilter: action.isNewSearch || action.isNextPage ? 'default-filter' : state.valueFilter, product: undefined, attributeColor: [], attributeSize: [], detailShop: undefined, isSorted: false }
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
                return parseInt(product.final_price, 10) < maxPrice
            })
            const newProductsSFilter = newProductsFFilter.filter((product) => {
                return parseInt(product.final_price, 10) > minPrice
            })
            return {
                ...state, products: action.isFilter ? newProductsSFilter : newProducts
                , status: 'Success', isFocus: false, page: action.page, errMsg: '', query: action.query, isFilter: action.isFilter, productsFilter: action.isFilter ? newProductsSFilter : newProducts,
                errMsgTopInput: ''
            }
        }
        case GET_PACKAGE_DISCOUNT: {
            return { ...state, packageDiscount: action.packageDiscount }
        }
        case GET_PRODUCTS_FAIL: {
            return { ...state, errMsg: action.errMsg, status: 'Fail', errMsgTopInput: action.errMsgTopInput }
        }
        case GET_PRODUCT_FAIL: {
            return { ...state, product: undefined, status: 'Fail', errMsg: action.errMsg }
        }
        case ADD_TO_CART_DETAIL: {
            const { userLogged, cart, product, totalPriceOfProduct, quantityProduct, chooseColor, chooseSize, wishColor, wishSize, totalUserAccount } = state
            cart.push(product)
            quantityProduct.push(action.quantity)
            // let lastedPrice = handleCurrency.format(product.final_price * action.quantity)
            if(product.promotion_percent >0){
                totalPriceOfProduct.push(product.final_price * action.quantity )
            }else{
                totalPriceOfProduct.push(product.price * action.quantity )
            }
            chooseColor.push(wishColor)
            chooseSize.push(wishSize)
            if(userLogged.length !==0){
                for (let j in totalUserAccount) {
                    if (totalUserAccount[j].userName === userLogged[0].name) {
                        totalUserAccount[j].cartUser = []
                        totalUserAccount[j].totalPriceOfProductUser = []
                        totalUserAccount[j].quantityProductUser = []
                        totalUserAccount[j].chooseColorUser = []
                        totalUserAccount[j].chooseSizeUser = []
                    } else {
                        // console.log('có cạy hàm for trước khi add k ?')
                    }
                }
            }
            for (let i = 0; i < cart.length - 1; i++) {
                if (cart[i].id === product.id && chooseColor[i] === wishColor && chooseSize[i] === wishSize) {
                    cart.splice(cart.length - 1, 1)
                    chooseColor.splice(chooseColor.length - 1, 1)
                    chooseSize.splice(chooseSize.length - 1, 1)
                    quantityProduct[i] += action.quantity
                    quantityProduct.splice(quantityProduct.length - 1, 1)
                    totalPriceOfProduct[i] += totalPriceOfProduct[totalPriceOfProduct.length - 1]
                    totalPriceOfProduct.splice(totalPriceOfProduct.length - 1, 1)
                }

            }
            // let defaultData=JSON.stringify(totalUserAccount)
            // localStorage.setItem('dataUser' , defaultData)

            // console.log('chạy hết hàm add tocart')
            // const setjson=JSON.stringify(totalUserAccount);
            // localStorage.setItem('totalUserAccount', setjson);
            return { ...state, cart: [...cart], totalPriceOfProduct: [...totalPriceOfProduct], quantityProduct: [...quantityProduct], wishColor: 'none', wishSize: 'none', totalUserAccount: [...totalUserAccount] }
        }
        case WISH_COLOR: {
            return { ...state, wishColor: action.wishValue }
        }
        case WISH_SIZE: {
            return { ...state, wishSize: action.wishValue }
        }
        case GET_PRICE_PRODUCT: {
            const { totalPriceOfProduct, quantityProduct } = state
            totalPriceOfProduct[action.index] = action.priceIndex
            quantityProduct[action.index] = action.quantity++
            return { ...state, totalPriceOfProduct: [...totalPriceOfProduct], quantityProduct: [...quantityProduct] }
        }

        case DELETE_PRODUCT: {
            const { cart, totalPriceOfProduct, quantityProduct, chooseColor, chooseSize } = state
            let i = action.index
            cart.splice(i, 1)
            totalPriceOfProduct.splice(i, 1)
            quantityProduct.splice(i, 1)
            chooseColor.splice(i, 1)
            chooseSize.splice(i, 1)
            return { ...state, cart: [...cart], totalPriceOfProduct: [...totalPriceOfProduct], quantityProduct: [...quantityProduct], chooseColor: [...chooseColor], chooseSize: [...chooseSize] }
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

        case GET_PRODUCTS_HOME: {
            return { ...state, productsHome: action.productsHome }
        }
        case ATTRIBUTE_SIZE: {
            return { ...state, attributeSize: action.value }
        }
        case ATTRIBUTE_COLOR: {
            return { ...state, attributeColor: action.value }
        }
        case GET_EVENT_BANNER: {
            return { ...state, productEventBanner: action.eventBanner }
        }
        case HISTORY_QUERY: {
            const { historyQuery } = state
            historyQuery.push(action.query)
            return { ...state, historyQuery: [...historyQuery] }
        }
        default: return state;
    }
}

export default reducer;

// check chỗ nào có price + price promotion