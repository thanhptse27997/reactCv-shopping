import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getProducts, addToCart, getDetailProduct } from '../../actions'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <img src={product.img_url} alt={product.name} />
                    <Link to={`/detail?id=${product.id}&name=${product.name}&index=${index}`}>
                        <button className='btn-go'>details</button>
                    </Link>
                    <button className='btn-add' onClick={() => this.handleAddToCart(index)}>add to </button>
                </div>
                <div className='info-product'>
                    <span className='star-product' >
                        {this.showRating(product.percent_star)}
                    </span>
                    <p className='name-product'>{product.name.slice(0, 42)}{product.name.length < 42 ? '' : '...'}</p>
                    <p style={product.promotion_percent > 0 ? { display: 'block' , color : 'red' } : { display: 'none' }}>{product.final_price.toLocaleString()}đ</p>
                    <p className='price-product' style={product.promotion_percent >0? {textDecoration : 'line-through' ,} : { color: 'red'}}>{product.price.toLocaleString()}đ </p>
                </div>
            <div className='percent-discout' style={product.promotion_percent > 0 ? {display : 'block'} : {display : 'none'}}>
                <p> <span>Giảm</span><br />{product.promotion_percent}%</p>
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