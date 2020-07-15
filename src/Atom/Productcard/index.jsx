import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getProducts, addToCart, getProduct } from '../../actions'
import { Button } from 'react-bootstrap'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'



class Productcard extends React.Component {
    handleAddToCart = index => {
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
                    <img src={product.img_url} />
                    <Link to={`/detail?id=${product.id}&name=${product.name}&index=${index}`}>
                        <button className='btn-go'>details</button>
                    </Link>
                    <button className='btn-add' onClick={() => this.handleAddToCart(index)}>add to </button>
                </div>
                <div className='info-product'>
                    <span className='star-product' >
                        {this.showRating(product.percent_star)}
                    </span>
                    <p>{product.name}</p>
                    <p style={{ color: 'red' }}>{product.price.toLocaleString()}đ </p>
                    {/* <Button variant='outline-info' style={{ fontSize: '12px' }} onClick={() => this.handleAddToCart(index)}>add to cart</Button> */}
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
    ...bindActionCreators({ getProducts, addToCart, getProduct }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Productcard);