import React from 'react';
import Header from './header';
import Footer from './footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts, getHomeApi } from '../../actions';
import './index.scss'
class Layout extends React.Component {
    componentDidMount() {
        this.props.getProducts(this.props.query, 1);
        this.props.getHomeApi();
    }

    render() {
        let { status } = this.props
        return (
            <div>
                <Header />
                <section className='container' >
                {status === 'Start Loading...' && <img className='img-waiting'  src='https://raw.githubusercontent.com/thanhptse27997/reactCv-shopping/gh-pages/assets/images/tploading.gif' alt='loading...' />}
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
    status: state.status
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts, getHomeApi }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Layout);