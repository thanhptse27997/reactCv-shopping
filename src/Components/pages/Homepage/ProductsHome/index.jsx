import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
import Productcard from '../../../../Atom/Productcard'
import { getProducts } from '../../../../actions'
import './index.scss'


class ProductsHome extends React.Component {
    searchByMostView = (event) => {
        this.props.getProducts(event.target.value, 1, true);
    }
    render() {
        let { productsHome } = this.props
        let result = []
        for (let i = 0; i <= productsHome.length - 1; i++) {
            if (productsHome[i].category_id === 0) {
                result = productsHome[i].product_list
            }
        }
        return (
            <div className='products-recommend'>
                <div className='title-rfor-you'>
                    <div><h4>Dành riêng cho bạn</h4></div>
                </div>
                <div className='list-products-home'>
                    {result.slice(0, 50).map((item, index) =>
                        <Productcard product={item} index={index} key={index} />
                    )}
                    <div className='user-slf'>
                        <ul className='list-user-slf'>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="Sneaker Nam">Sneaker Nam</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="Quần kaki Hàn Quốc">Quần kaki Hàn Quốc</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="Áo sơ mi nữ">Áo sơ mi nữ</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="Bàn học">Bàn học</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="Đồ bộ">Đồ bộ</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="blazer nữ">blazer nữ</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="Balo nam">Balo nam</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="Nokia">Nokia</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="Samsung">Samsung</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="Ốp lưng iphone">Ốp lưng iphone</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="Tai nghe Iphone">Tai nghe Iphone</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reactCv-shopping/list'>
                                    <button className='btn-slf' onClick={this.searchByMostView} value="Sạc dự phòng">Sạc dự phòng</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {result.slice(-50).map((item, index) =>
                        <Productcard product={item} index={index} key={index} />
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    productsHome: state.productsHome
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsHome);