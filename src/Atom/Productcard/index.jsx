import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getProducts, addToCart, getDetailProduct } from '../../actions'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PackageDiscount from './Packagediscount'
import PackageDiscountMuti from './PackageDiscountMuti'
import './index.scss'



class Productcard extends React.Component {
    handleAddToCart = (index) => {
        this.props.addToCart(index)
    }
    showRating = rating => {
        let result = [];
        for (let i = 1; i <= rating; i++) {
            result.push(<FontAwesomeIcon icon={faStar} className='icon-star' key={Math.random()} />)
        }
        for (let z = 5 - rating; z <= 5 - rating; z++) {
            if (z < Math.round(z)) {
                result.push(<FontAwesomeIcon icon={faStar} key={Math.random()} />)
            }
            if (z > Math.round(z)) {

                result.push(<FontAwesomeIcon icon={faStarHalfAlt} className='icon-star' key={Math.random()} />)
            }
        }
        for (let j = 1; j <= 5 - rating; j++) {
            result.push(<FontAwesomeIcon icon={faStar} key={Math.random()} />)

        }
        return result
    }
    render() {
        let { product, index } = this.props
        // let lastedPrice = handleCurrency.format(product.final_price)
        // let defaultPrice = handleCurrency.format(product.price)
        // if (lastedPrice.length <= 7) {
        //     lastedPrice = handleCurrency.format(Math.round(lastedPrice) + '000')
        // }
        // if (lastedPrice.length === 9) {
        //     if (lastedPrice.slice(2, 3) === '0' && lastedPrice.slice(3, 5) !== '00') {
        //         lastedPrice = handleCurrency.format(lastedPrice.slice(0, 2) + lastedPrice.slice(2, 3) + Math.round(lastedPrice.slice(3)) + '000')
        //     } else if (lastedPrice.slice(2, 4) === '00' && lastedPrice.slice(4, 5) !== '0') {
        //         lastedPrice = handleCurrency.format(lastedPrice.slice(0, 2) + lastedPrice.slice(2, 4) + Math.round(lastedPrice.slice(4)) + '000')
        //     } else if (lastedPrice.slice(2, 5) !== '000') {
        //         lastedPrice = handleCurrency.format(lastedPrice.slice(0, 2) + Math.round(lastedPrice.slice(2)) + '000')
        //     }
        // }
        // if (lastedPrice.length === 10) {
        //     if (lastedPrice.slice(3, 4) === '0' && lastedPrice.slice(4, 6) !== '00') {
        //         lastedPrice = handleCurrency.format(lastedPrice.slice(0, 3) + lastedPrice.slice(3, 4) + Math.round(lastedPrice.slice(4)) + '000')
        //     } else if (lastedPrice.slice(3, 5) === '00' && lastedPrice.slice(5, 6) !== '0') {
        //         lastedPrice = handleCurrency.format(lastedPrice.slice(0, 3) + lastedPrice.slice(3, 5) + + Math.round(lastedPrice.slice(5)) + '000')
        //     } else if (lastedPrice.slice(3, 6) !== '000') {
        //         lastedPrice = handleCurrency.format(lastedPrice.slice(0, 3) + Math.round(lastedPrice.slice(3)) + '000')
        //     }
        // }
        // if (defaultPrice.length <= 7) {
        //     defaultPrice = handleCurrency.format(Math.round(defaultPrice) + '000')
        // }
        // if (defaultPrice.length === 9) {
        //     if (defaultPrice.slice(2, 3) === '0' && defaultPrice.slice(3, 5) !== '00') {
        //         defaultPrice = handleCurrency.format(defaultPrice.slice(0, 2) + defaultPrice.slice(2, 3) + Math.round(defaultPrice.slice(3)) + '000')
        //     } else if (defaultPrice.slice(2, 4) === '00' && defaultPrice.slice(4, 5) !== '0') {
        //         defaultPrice = handleCurrency.format(defaultPrice.slice(0, 2) + defaultPrice.slice(2, 4) + Math.round(defaultPrice.slice(4)) + '000')
        //     } else if (defaultPrice.slice(2, 5) !== '000') {
        //         defaultPrice = handleCurrency.format(defaultPrice.slice(0, 2) + Math.round(defaultPrice.slice(2)) + '000')
        //     }
        // }
        // if (defaultPrice.length === 10) {
        //     if (defaultPrice.slice(3, 4) === '0' && defaultPrice.slice(4, 6) !== '00') {
        //         defaultPrice = handleCurrency.format(defaultPrice.slice(0, 3) + defaultPrice.slice(3, 4) + Math.round(defaultPrice.slice(4)) + '000')
        //     } else if (defaultPrice.slice(3, 5) === '00' && defaultPrice.slice(5, 6) !== '0') {
        //         defaultPrice = handleCurrency.format(defaultPrice.slice(0, 3) + defaultPrice.slice(3, 5) + + Math.round(defaultPrice.slice(5)) + '000')
        //     } else if (defaultPrice.slice(3, 6) !== '000') {
        //         defaultPrice = handleCurrency.format(defaultPrice.slice(0, 3) + Math.round(defaultPrice.slice(3)) + '000')
        //     }
        // }
        //{`${lastedPrice}`}
        //{`${defaultPrice}`}
        //{product.final_price.toLocaleString()}
        //{product.price.toLocaleString()}

        return (
            <div className='product'>
                <div className='img-product'>
                    <Link to={`/detail?id=${product.id}&name=${product.name}&index=${index}`}>
                        <img src={product.img_url} alt={product.name} />
                    </Link>
                    {/* <div className='percent-discout-480' style={product.promotion_percent > 0 ? { display: 'block' } : {display : 'none !important'}}>
                    <p> <span>-</span>{product.promotion_percent}%</p>
                </div> */}
                </div>
                <div>
                <div className='about-package'>
                    {product.package_discount.length === 1 && product.package_discount.map((item, index) =>
                        <PackageDiscount product={item} index={index} key={index} />
                    )}
                    {product.package_discount.length > 1 && product.package_discount.map((item, index) =>
                        <PackageDiscountMuti product={item} index={index} key={index} />
                    )}
                </div>
                <div className='info-product'>
                    <Link to={`/detail?id=${product.id}&name=${product.name}&index=${index}`} className='name-product'>
                        <p>{product.name.slice(0, 33)}{product.name.length < 33 ? '' : '...'}</p>
                    </Link>
                    <div className='price-product'>
                        <p className='final-price' style={product.promotion_percent > 0 ? { display: 'block', color: 'red'} : { display: 'none' }}>{product.final_price.toLocaleString()}đ</p>
                        <p className='price' style={product.promotion_percent > 0 ? { textDecoration: 'line-through', color: '#bababa',fontSize : '14px' } : { color: 'red', textAlign: 'left' }}>{product.price.toLocaleString()}đ</p>
                    </div>

                    <div className='rating-and-order'>
                        <span className='star-product' style={product.percent_star < 0.5 ? { display: 'none' } : { display: 'block' }} >
                            {this.showRating(product.percent_star)}
                        </span>
                        <span className='order-count' style={product.percent_star < 0.5 ? { flex: '0 0 100%', maxWidth: '100%' } : { flex: '0 0 50%', maxWitdh: '50%' }} > ( {product.order_count === undefined ? '0' : product.order_count >= 1000 ? Math.round((product.order_count / 1000) * 100) / 10 + 'k' : product.order_count} ) </span>
                    </div>
                </div>

                </div>
                <div className='senmall'>
                    <hr />
                    <p>store</p>
                    <p>{product.shop_name.slice(0, 18)}{product.shop_name.length <= 18 ? '' : '...'}</p>
                </div>
                <div className='percent-discout' style={product.promotion_percent > 1 && Number.isInteger(product.promotion_percent) === true ? { display: 'block' } : { display: 'none' }}>
                    <p> <span>-</span>{product.promotion_percent}%</p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    products: state.products,
    category: state.category,
    cart: state.cart,
    loginStatus: state.loginStatus
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts, addToCart, getDetailProduct }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Productcard);