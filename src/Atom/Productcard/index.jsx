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
        return (
            <div className='product'>
                <div className='img-product'>
                    <Link to={`/detail?id=${product.id}&name=${product.name}&index=${index}`}>
                        {/* <button className='btn-go'>details</button> */}
                        <img src={product.img_url} alt={product.name} />
                    </Link>
                    {/* <button className='btn-add' onClick={() => this.handleAddToCart(index)}>add to </button> */}
                </div>
                    <div className='about-package'>
                        {product.package_discount.length === 1 && product.package_discount.map((item , index)=>
                            <PackageDiscount product={item} index={index} key={index} />
                        )}
                        {product.package_discount.length >1 && product.package_discount.map((item,index)=>
                            <PackageDiscountMuti product={item} index={index} key={index} />
                        ) }
                    </div>
                <div className='info-product'>
                    <p className='name-product'>{product.name.slice(0, 42)}{product.name.length < 42 ? '' : '...'}</p>
                    <div className='price-product'>
                    <p className='final-price' style={product.promotion_percent > 0 ? { display: 'block', color: 'red',fontWeight : '500' } : { display: 'none' }}>{product.final_price.toLocaleString()}đ</p>
                    <p className='price' style={product.promotion_percent > 0 ? { textDecoration: 'line-through', color :'#bababa' } : { color: 'red',fontWeight : '500', textAlign :'left' }}>{product.price.toLocaleString()}đ </p>
                    </div>

                    <div className='rating-and-order'>
                        <span className='star-product' style={product.percent_star < 0.5 ? { display: 'none' } : { display: 'block' }} >
                            {this.showRating(product.percent_star)}
                        </span>
                        <span className='order-count' style={product.percent_star < 0.5 ? { flex: '0 0 100%', maxWidth: '100%' } : { flex: '0 0 50%', maxWitdh: '50%' }} > ( {product.order_count === undefined ? '0' : product.order_count >= 1000 ? Math.round((product.order_count / 1000) * 100) / 10 + 'k' : product.order_count} ) </span>
                    </div>
                </div>
                <div className='percent-discout' style={product.promotion_percent > 0 ? { display: 'block' } : { display: 'none' }}>
                    <p> <span>-</span>{product.promotion_percent}%</p>
                </div>

                <div className='senmall'>
                    <hr />
                    <p>store</p>
                    <p>{product.shop_name.slice(0, 20)}{product.shop_name.length <= 20 ? '' : '...'}</p>
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