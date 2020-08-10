import React from 'react'
import Listbanner from './Listbanner'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Carousel from 'react-bootstrap/Carousel'
import { getProducts } from '../../../../actions'
import { Link } from 'react-router-dom'
import './index.scss'
class Banner extends React.Component {
    searchByMostView = (event) => {
        this.props.getProducts(event.target.value, 1, true);
    }
    render() {
        let { typesHome } = this.props
        let result = []
        for (let i = 0; i <= typesHome.length - 1; i++) {
            switch (typesHome[i].type) {
                case 'SlideWidget': {
                    result = typesHome[i].data.list
                    break;
                }
                default: break;
            }
        }
        console.log('mảng banner', result)
        return (
            <div className='banner-category'>
                <div className='category-home'>
                    <ul className='list-categories'>
                        <li>
                            <Link to='/reactCv-shopping/list'>
                                <button variant='link' type='button' onClick={this.searchByMostView} value="Thời trang nữ">Thời trang nữ</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reactCv-shopping/list'>
                                <button variant='link' type='button' onClick={this.searchByMostView} value="Đầm nữ">Đầm nữ</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reactCv-shopping/list'>
                                <button variant='link' type='button' onClick={this.searchByMostView} value="Sandal nữ">Sandal nữ</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reactCv-shopping/list'>
                                <button variant='link' type='button' onClick={this.searchByMostView} value="Thời trang nam">Thời trang nam</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reactCv-shopping/list'>
                                <button variant='link' type='button' onClick={this.searchByMostView} value="Dép nam">Dép nam</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reactCv-shopping/list'>
                                <button variant='link' type='button' onClick={this.searchByMostView} value="Áo thun nam">Áo thun nam</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reactCv-shopping/list'>
                                <button variant='link' type='button' onClick={this.searchByMostView} value="Điện thoại">Điện thoại</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reactCv-shopping/list'>
                                <button variant='link' type='button' onClick={this.searchByMostView} value="Laptop">Laptop</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reactCv-shopping/list'>
                                <button variant='link' type='button' onClick={this.searchByMostView} value="Phụ kiện công nghệ">Phụ kiện công nghệ</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reactCv-shopping/list'>
                                <button variant='link' type='button' onClick={this.searchByMostView} value="Điện gia dụng">Điện gia dụng</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reactCv-shopping/list'>
                                <button variant='link' type='button' onClick={this.searchByMostView} value="Điện máy">Điện máy</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Carousel className='banner'>
                    {result.map((item, index) =>
                        <Carousel.Item key={index}>
                            <Listbanner itemBanner={item} index={index} key={index} />
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    product: state.products,
    query: state.query,
    page: state.page,
    typesHome: state.typesHome
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);