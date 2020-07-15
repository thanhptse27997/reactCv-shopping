import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Productcard from '../../../Atom/Productcard'
import Banner from './Banner'
import {getHomeApi , getProducts , getEvent , addToCart } from '../../../actions'
class Homepage extends React.Component{
    render(){
        return(
            <div class='home-page'>
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
    ...bindActionCreators({ getProducts, addToCart, getEvent , getHomeApi }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);