import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getProducts, getHomeApi, getEvent } from '../../../actions'
import {Button} from 'react-bootstrap'
import './index.scss'
class Header extends React.Component {
  state = { query: '' }
  searchByMostView = (event) => {
    this.state.query = event.target.value
    this.props.getProducts(this.state.query, 1, true);
  }
  handleChange = (event) => {
    this.setState({ ...this.state, query: event.target.value, value: event.target.value })
  }
  handleSearch = () => {
    this.props.getProducts(this.state.query, 1, true)
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
                  <Link className='intro-project' to='/about-us'>Giới thiệu</Link>
                </li>
                <li>
                  <Link to='/list'>Đăng nhập</Link>
                </li>
                <li>
                  <Link to='/registration'>Đăng kí</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ===== end ===== */}

        {/* container header */}
        <div className='container-header'>
          <div className='logo'>
            <Link to='/'><img src='assets/images/home.webp' atl='logo' /></Link>
          </div>
          <form className='form-search' onSubmit={() => <Link to='/list'>{this.handleSearch()}</Link>}>
            <input type='text' placeholder=' Tìm kiếm ' onChange={this.handleChange} query={this.props.query}></input>
            <Link to='/list' className='btn-submit'> <button onClick={this.handleSearch}>Search</button></Link>
          </form>
          <div className='logo-cart'>
            <Link to='/cart'>Cart</Link>
          </div>
        </div>
        {/* ===== end ===== */}

        {/* ===== famous query ===== */}
        <div className='famous-query'>
        <Link to='/list'>
            <Button variant='link' type='button' onClick={this.searchByMostView} value="Thời trang nữ">Thời trang nữ</Button>
          </Link>

          <Link to='/list'>
            <Button variant='link' type='button' onClick={this.searchByMostView} value="Thời trang nam">Thời trang nam</Button>
          </Link>
          <Link to='/list'>
            <Button variant='link' type='button' onClick={this.searchByMostView} value="Đầm nữ">Đầm nữ</Button>
          </Link>
          <Link to='/list'>
            <Button variant='link' type='button' onClick={this.searchByMostView} value="Sandal nữ">Sandal nữ</Button>
          </Link>
          <Link to='/list'>
            <Button variant='link' type='button' onClick={this.searchByMostView} value="Dép nam">Dép nam</Button>
          </Link>
        </div>
        {/* ===== end ===== */}
      </header>
    )
  }
}
const mapsStateToProps = state => ({
  query: state.query,
  value: state.value,
  // auth: state.auth,
  // username: state.username,
  // password: state.password,
  minPrice: state.minPrice,
  maxPrice: state.maxPrice,
  productBanner: state.productBanner

})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ getProducts, getHomeApi, getEvent }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(Header);