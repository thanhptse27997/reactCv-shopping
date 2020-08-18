import React from 'react';
import Header from './header';
import Footer from './footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts,getTypesHome,getProductsHome } from '../../actions';
import './index.scss'
class Layout extends React.Component {
    componentDidMount() {
        this.props.getProducts(this.props.query, 1);
        this.props.getTypesHome();
        this.props.getProductsHome()
        // catching types , check part logic in redux , map step by index follow type of item in typesHome
        // note2 : change content of introduce page , update content and information of component
        // check đờ thùng rác page carts
        // check lại đăng kí input bên reducer (clear)
    }
    render() {
        let { status } = this.props
        return (
            <div>
                <Header />
                <section className='container'>
                    {status === 'Start Loading...' && <img className='img-waiting' src='https://raw.githubusercontent.com/thanhptse27997/reactCv-shopping/gh-pages/assets/images/tploading.gif' alt='loading...' />}
                    {this.props.children}
                </section>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    query: state.query,
    page: state.page,
    status: state.status,
    messageLogin : state.messageLogin,
    loginStatus : state.loginStatus
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts,getTypesHome,getProductsHome }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Layout);