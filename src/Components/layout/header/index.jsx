import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getProducts, historyQuery, getProductsFail, logOut } from '../../../actions'
import CartAny from './Cart-any'
import HistoryQuery from './HistoryQuery'
import './index.scss'
class Header extends React.Component {
  state = { value: '' }

  handleChange = (event) => {
    this.setState({ ...this.state, query: event.target.value, value: event.target.value })
  }
  handleSearch = () => {
    const inputTarget = document.querySelector('.history-query')
    inputTarget.style.opacity = '0'
    inputTarget.style.transform = 'scale(0)'
    if (this.state.value.length === 0) {
      this.props.getProductsFail(this.props.errMsg, 'bạn chưa nhập sản phẩm !')
    } else {
      this.props.getProducts(this.state.query, 1, true)
      this.props.historyQuery(this.state.query)
    }
    this.setState({ ...this.state, value: '' })
  }
  handleShowHistoryQuery = () => {
    const inputTarget = document.querySelector('.history-query')
    inputTarget.style.opacity = '1'
    inputTarget.style.transform = 'scale(1)'
  }
  handleCancel = () => {
    const inputTarget = document.querySelector('.history-query')
    inputTarget.style.opacity = '0'
    inputTarget.style.transform = 'scale(0)'
  }

  showFormLogOut = () => {
    const formWishLogout = document.querySelector('.form-logout')
    formWishLogout.style.transform = 'scale(1)'
    formWishLogout.style.zIndex = '99999999'

    // alert('bạn có chắc chắn đăng xuất ?');
    // this.props.logOut('user logout')
  }
  agreeLogOut = () => {
    this.props.logOut('user logout')
    const formWishLogout = document.querySelector('.form-logout')
    formWishLogout.style.transform = 'scale(0)'
    this.props.getProducts('', 1)
    this.handleCloseMenuMobile()
  }
  cancelLogout = () => {
    const formWishLogout = document.querySelector('.form-logout')
    formWishLogout.style.transform = 'scale(0)'
  }
  handleShowMenuMobile = () => {
    this.handleCloseCart()
    let iconTarget = document.querySelector('.block-list-menu-res')
    let partTarget = document.querySelector('.container')
    partTarget.style.opacity = '0.5'
    partTarget.style.pointerEvents = 'none'
    iconTarget.style.left = '0'
  
  }
  handleCloseMenuMobile = () => {
    let iconTarget = document.querySelector('.block-list-menu-res')
    iconTarget.style.left = '-100%'
    let partTarget = document.querySelector('.container')
    partTarget.style.opacity = '1'
    partTarget.style.pointerEvents = 'all'
  }
  handleOpenCart = ()=>{
    this.handleCloseMenuMobile()
    let iconTarget = document.querySelector('.cart-res')
    let partTarget = document.querySelector('.container')
    partTarget.style.pointerEvents = 'none'
    partTarget.style.opacity = '0.5'
    partTarget.style.pointerEvents = 'none'
    iconTarget.style.right = '0px'
  
  }
  handleCloseCart = ()=>{
    let iconTarget = document.querySelector('.cart-res')
    let partTarget = document.querySelector('.container')
    partTarget.style.opacity = '1'
    partTarget.style.pointerEvents = 'all'
    iconTarget.style.right = '-100%'
  }
  hideTabs = () =>{
    let cartTarget =  document.querySelector('.cart-res')
    let menuTarget =  document.querySelector('.block-list-menu-res')
    let partTarget = document.querySelector('.container')
    partTarget.style.opacity = '1'
    partTarget.style.pointerEvents = 'all'
    cartTarget.style.right = '-100%'
    menuTarget.style.left = '-100%'
  }
  clickInput = () =>{
    this.hideTabs()
    this.handleShowHistoryQuery()
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
                  <Link className='intro-project' to='/reactCv-shopping/introduce'>Giới thiệu</Link>
                </li>
                <li>
                  {this.props.loginStatus === false ? <Link to='/reactCv-shopping/login'>Đăng nhập</Link> : <button onClick={this.showFormLogOut}>Đăng xuất</button>}
                </li>
                <li>
                  {this.props.loginStatus === true ? <Link to='/reactCv-shopping/user' className='user-logged'>{this.props.userLogged[0].name}</Link> : <Link to='/reactCv-shopping/registration'>Đăng kí</Link>}
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
          {/* header res */}
          <div className='icon-menu-res' onClick={this.handleShowMenuMobile}>

          </div>
          <div className='block-list-menu-res'>
            <div className='btn-close'>
              <p>Demo React Shopping App</p>
              <button onClick={this.handleCloseMenuMobile}>X</button>
            </div>
            <ul className='list-menu-res'>
              {this.props.userLogged.length !== 0 && <li style={this.props.loginStatus === true ? { display: 'block' } : { display: 'none' }}>
                <div className='nothing-nothing'>
                  <Link to='/reactCv-shopping/user' onClick={this.handleCloseMenuMobile} className='user-logged'>{this.props.userLogged[0].name}</Link>
                </div>
              </li>
              }
              <li>
                <Link to='/reactCv-shopping/' onClick={this.handleCloseMenuMobile}>Trang chủ</Link>
              </li>
              <li>
                {this.props.loginStatus === false && <Link to='/reactCv-shopping/login' onClick={this.handleCloseMenuMobile}>Đăng nhập</Link>}
              </li>
              <li>
                {this.props.loginStatus === false && <Link to='/reactCv-shopping/registration' onClick={this.handleCloseMenuMobile}>Đăng kí</Link>}
              </li>
              <li>
                <Link className='intro-project' to='/reactCv-shopping/introduce' onClick={this.handleCloseMenuMobile}>Giới thiệu</Link>
              </li>
              {this.props.loginStatus === true && <li>
                <div className='btn-logout'>
                  <button onClick={this.showFormLogOut}>Đăng xuất</button>
                </div>
              </li>}
            </ul>
          </div>
          {/* end */}
          <div className='form-search suggest'>
            <form className='form-header' onSubmit={() => <Link to='/reactCv-shopping/list'>{this.handleSearch()}</Link>}>
              <input className='input-search' type='text' placeholder=' Tìm kiếm ' onChange={this.handleChange} onClick={this.clickInput} query={this.props.query} value={this.state.value}></input>
              <Link to='/reactCv-shopping/list' className='btn-submit'> <button onClick={this.handleSearch}>Search</button></Link>
              <div className='history-query' >
                <HistoryQuery />
              </div>
            </form>
          </div>

          <div className='logo-cart'>
            <Link to='/reactCv-shopping/cart' className='link-logo-cart' >
              Cart
              <span style={this.props.cart.length !== 0 ? { display: 'block' } : { display: 'none' }}>{this.props.cart.length}</span>
            </Link>
            <CartAny />
            <div className='block-cart-res'>
              <button onClick={this.handleOpenCart}></button>
              <span style={this.props.cart.length !== 0 ? { display: 'block' } : { display: 'none' }}>{this.props.cart.length}</span>
            </div>
          </div>
          {/*  cart res */}
          <div className='cart-res'>
            <div className='btn-close-cart'>
              <button onClick={this.handleCloseCart}></button>
              <Link to='/reactCv-shopping/cart' onClick={this.handleCloseCart}>Xem giỏ hàng</Link>
            </div>
            
            <CartAny />
          </div>
          {/* end */}
        </div>
        {/* ===== end ===== */}

        {/* ===== form logout ===== */}
        <div className='form-logout'>
          <div className='detail-form'>
            <p>Bạn có chắc chắn đăng xuất ?</p>
            <div className='btns-form-logout'>
              <Link to='/reactCv-shopping'><button className='agree-logout' onClick={this.agreeLogOut}>Đồng ý</button></Link>
              <button className='denied-logout' onClick={this.cancelLogout}>Hủy bỏ</button>
            </div>
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
  isFocus: state.isFocus,
  errMsgTopInput: state.errMsgTopInput,
  errMsg: state.errMsg,
  loginStatus: state.loginStatus,
  userLogged: state.userLogged,
  messageLogin: state.messageLogin
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ getProducts, historyQuery, getProductsFail, logOut }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(Header);