import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Banner from './Banner'
import ShortcutWidget from './ShortcutWidget'
import BannerEventWidget from './BannerEventWidget'
import FlashDealWidget from './FlashDealWidget'
import {getProducts } from '../../../actions'
import LandingWidget from './LandingWidget'
import ProductsHome from './ProductsHome'
import './index.scss'
class Homepage extends React.Component{

    render(){
        return(
            <div className='home-page'>
                <Banner />
                <ShortcutWidget />
                <BannerEventWidget />
                <FlashDealWidget />
                <LandingWidget />
                <ProductsHome />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    query : state.query,
    page : state.page,
    messageLogin : state.messageLogin
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);