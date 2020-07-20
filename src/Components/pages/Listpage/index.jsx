import React from 'react'
import Productcard from '../../../Atom/Productcard'
import { getProducts, addToCart, getHomeApi } from '../../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.scss'
class Listpage extends React.Component {
    state = {
        isSort: false
    }

    handleNextPage = () => {
        let { page, isFilter  } = this.props
        page++;
        this.props.getProducts(this.props.query, page, false , true, isFilter)
    }
    render() {
        return (
            <div className='list-page'>
                <div className='products-list'>
                    {this.props.products.map((item, index) =>
                        <Productcard product={item} index={index} key={index} />
                    )}
                </div>
                <div className='btn-next-page'>
                    <button onClick={this.handleNextPage}>Next page</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    page : state.page,
    query : state.query,
    isFilter : state.isFilter,
    status : state.status,
    errMsg : state.errMsg
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts, addToCart, getHomeApi }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Listpage);