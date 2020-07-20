import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getProducts, getHomeApi, historyQuery } from '../../../actions'
import { Button } from 'react-bootstrap'
import CartAny from './Cart-any'
import HistoryQuery from './HistoryQuery'
import './index.scss'
class Header extends React.Component {
  // state = { query: '' }
  searchByMostView = (event) => {
    this.props.getProducts(event.target.value, 1, true);
  }
  handleChange = (event) => {
    this.setState({ ...this.state, query: event.target.value, value: event.target.value })
  }
  handleSearch = () => {
    this.props.getProducts(this.state.query, 1, true)
    this.props.historyQuery(this.state.query)
  }
  handleShowHistoryQuery = () =>{
    const inputTarget = document.querySelector('.history-query')
    inputTarget.style.opacity = '1'
    inputTarget.style.transform = 'scale(1)'
  }
  handleCancel = ()=>{
    const inputTarget = document.querySelector('.history-query')
    inputTarget.style.opacity = '0'
    inputTarget.style.transform = 'scale(0)'
  }
  render() {
    
    return (
      <header className='header'>
        {/* =====  headline =====  */}
        <div className='headline'>
          <div className='container-headline'>
            <div className='list-services'>
              <div className='text-intro'>
                <p>Demo React Shopping App</p>
              </div>
              <ul className='menu'>
                <li>
                  <Link className='intro-project' to='/reactCv-shopping/about-us'>Giới thiệu</Link>
                </li>
                <li>
                  <Link to='/reactCv-shopping/list'>Đăng nhập</Link>
                </li>
                <li>
                  <Link to='/reactCv-shopping/registration'>Đăng kí</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ===== end ===== */}

        {/* container header */}
        <div className='container-header'>
          <div className='logo'>
            <Link to='/reactCv-shopping/'><img src='assets/images/home.webp' alt='logo' /></Link>
          </div>
          <div className='form-search suggest'>
            <form onSubmit={() => <Link to='/reactCv-shopping/list'>{this.handleSearch()}</Link>}>
              <input className='input-search' type='text' placeholder=' Tìm kiếm ' onChange={this.handleChange} query={this.props.query}></input>
              <Link to='/reactCv-shopping/list' className='btn-submit'> <button onClick={this.handleSearch}>Search</button></Link>
              <div className='history-query' >
                <HistoryQuery />
              </div>
            </form>
            {/* ===== famous query ===== */}
            <div className='famous-query'>
              <Link to='/reactCv-shopping/list'>
                <Button variant='link' type='button' onClick={this.searchByMostView} value="Thời trang nữ">Thời trang nữ</Button>
              </Link>

              <Link to='/reactCv-shopping/list'>
                <Button variant='link' type='button' onClick={this.searchByMostView} value="Thời trang nam">Thời trang nam</Button>
              </Link>
              <Link to='/reactCv-shopping/list'>
                <Button variant='link' type='button' onClick={this.searchByMostView} value="Đầm nữ">Đầm nữ</Button>
              </Link>
              <Link to='/reactCv-shopping/list'>
                <Button variant='link' type='button' onClick={this.searchByMostView} value="Sandal nữ">Sandal nữ</Button>
              </Link>
              <Link to='/reactCv-shopping/list'>
                <Button variant='link' type='button' onClick={this.searchByMostView} value="Dép nam">Dép nam</Button>
              </Link>
            </div>
            {/* ===== end ===== */}
          </div>

          <div className='logo-cart'>
            <Link to='/reactCv-shopping/cart' className='link-logo-cart'>
              Cart
              <span style={this.props.cart.length !== 0 ? { display: 'block' } : { display: 'none' }}>{this.props.cart.length}</span>
            </Link>
            <CartAny />
          </div>

        </div>
        {/* ===== end ===== */}




      </header>
    )
  }
}
const mapsStateToProps = state => ({
  query: state.query,
  value: state.value,
  cart: state.cart,
  minPrice: state.minPrice,
  maxPrice: state.maxPrice,
  productBanner: state.productBanner,
  historyQuery: state.historyQuery,
  isFocus : state.isFocus
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ getProducts, getHomeApi, historyQuery }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(Header);