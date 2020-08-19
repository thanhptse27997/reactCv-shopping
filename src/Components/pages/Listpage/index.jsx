import React from 'react'
import Productcard from '../../../Atom/Productcard'
import { getProducts } from '../../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Filter from './Filter'
import './index.scss'
class Listpage extends React.Component {

    handleNextPage = () => {
        let { page, isFilter } = this.props
        page++;
        this.props.getProducts(this.props.query, page, false, true, isFilter)
    }
    render() {
        const { isSorted, products, productsFilter } = this.props
        return (
            <div className='list-page'>
                <Filter />
                <div className='products-list'>
                    {isSorted === true ?
                        productsFilter.map((item, index) =>
                            <Productcard product={item} index={index} key={index} />
                        )
                        : products.map((item, index) =>
                            <Productcard product={item} index={index} key={index} />
                        )
                    }
                </div>
                <div className='btn-next-page'>
                    <button onClick={this.handleNextPage}><span>Next page</span></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    page: state.page,
    query: state.query,
    isFilter: state.isFilter,
    status: state.status,
    errMsg: state.errMsg,
    productsFilter: state.productsFilter,
    isSorted: state.isSorted,
    messageLogin : state.messageLogin,
    loginStatus : state.loginStatus
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Listpage);