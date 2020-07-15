import React from 'react'
import Productcard from '../../../Atom/Productcard'
import { getProducts, addToCart, getEvent , getHomeApi } from '../../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.scss'
class Listpage extends React.Component {

    render() {
        return (
            <div className='products-list'>
                {this.props.products.map((item, index) =>
                    <Productcard product={item} index={index} key={index} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts, addToCart, getEvent , getHomeApi }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Listpage);