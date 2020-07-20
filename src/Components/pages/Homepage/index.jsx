import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Banner from './Banner'
import {getHomeApi , getProducts  , addToCart } from '../../../actions'
class Homepage extends React.Component{
    render(){
        return(
            <div className='home-page'>
                <Banner />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    query : state.query,
    page : state.page
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts, addToCart , getHomeApi }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);