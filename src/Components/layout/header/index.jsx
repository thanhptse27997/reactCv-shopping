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

    // alert('bạn có chắc chắn đăng xuất ?');
    // this.props.logOut('user logout')
  }
  agreeLogOut = () => {
    this.props.logOut('user logout')
    const formWishLogout = document.querySelector('.form-logout')
    formWishLogout.style.transform = 'scale(0)'
    this.props.getProducts('' , 1)
  }
  cancelLogout = () => {
    const formWishLogout = document.querySelector('.form-logout')
    formWishLogout.style.transform = 'scale(0)'
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
          <div className='form-search suggest'>
            <form className='form-header' onSubmit={() => <Link to='/reactCv-shopping/list'>{this.handleSearch()}</Link>}>
              <input className='input-search' type='text' placeholder=' Tìm kiếm ' onChange={this.handleChange} onClick={this.handleShowHistoryQuery} query={this.props.query} value={this.state.value}></input>
              <span className='err-mess'>{this.props.errMsgTopInput}</span>
              <Link to='/reactCv-shopping/list' className='btn-submit'> <button onClick={this.handleSearch}>Search</button></Link>
              <div className='history-query' >
                <HistoryQuery />
              </div>
            </form>

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
  messageLogin : state.messageLogin
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ getProducts, historyQuery, getProductsFail, logOut }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(Header);