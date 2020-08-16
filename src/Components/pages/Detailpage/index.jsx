import React from 'react'
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetailProduct, addToCart_Detail, getIndexImage, getDetailInfoShop } from '../../../actions';
import DetailImages from './DetailImages';
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { IMAGE_URL } from '../../../apis'
import { Link } from 'react-router-dom'
import { Markup } from 'interweave'
import AttributeColor from './Attributecolorproduct'
import AttributeSize from './Attributesizeproduct'
import Benefits from './Benefits'
import './index.scss'

class Detailpage extends React.Component {
    state = {
        quantity: 1,
        updated: true
    }

    componentDidMount() {
        const parsed = queryString.parse(window.location.search)
        const id = parsed.id
        this.props.getDetailProduct(id)
    }
    handleAddToCart_Detail = () => {
        if (this.props.loginStatus === false) {
            alert('Bạn phải đăng nhập');
        } else {
            if (this.props.attributeColor.length === 0 && this.props.attributeSize.length === 0) {
                this.props.addToCart_Detail(this.props.product, this.state.quantity * 1);
                this.setState({ ...this.state, quantity: 1 })
            }
            if (this.props.attributeColor.length !== 0 && this.props.attributeSize.length === 0) {
                if (this.props.wishColor === 'none') {
                    alert('bạn chưa chọn màu')
                } else {
                    this.props.addToCart_Detail(this.props.product, this.state.quantity * 1)
                    this.setState({ ...this.state, quantity: 1 })
                }
            }
            if (this.props.attributeColor.length !== 0 && this.props.attributeSize.length !== 0) {
                if (this.props.wishColor === 'none') {
                    alert('bạn chưa chọn màu')
                }
                if (this.props.wishSize === 'none') {
                    alert('bạn chưa chọn size')
                }
                if (this.props.wishColor !== 'none' && this.props.wishSize !== 'none') {
                    this.props.addToCart_Detail(this.props.product, this.state.quantity * 1);
                    this.setState({ ...this.state, quantity: 1 })
                }
            }
        }

    }

    previousImage = () => {
        let { product, indexImage } = this.props
        console.log(indexImage - 1)
        this.props.getIndexImage(indexImage - 1 === -1 ? indexImage = product.images.length - 1 : indexImage - 1)
    }
    nextImage = () => {
        let { product, indexImage } = this.props
        console.log(indexImage + 1)
        this.props.getIndexImage(indexImage + 1 > product.images.length - 1 ? indexImage = 0 : indexImage + 1)
    }

    showRatingDetail = rating => {
        let result = [];
        for (let i = 1; i <= rating; i++) {
            result.push(<FontAwesomeIcon icon={faStar} className='icon-star-detail' key={Math.random()} />)
        }
        for (let z = 5 - rating; z <= 5 - rating; z++) {
            if (z < Math.round(z)) {
                result.push(<FontAwesomeIcon icon={faStar} key={Math.random()} />)
            }
            if (z > Math.round(z)) {

                result.push(<FontAwesomeIcon icon={faStarHalfAlt} className='icon-star-detail' key={Math.random()} />)
            }
        }
        for (let j = 1; j <= (5 - rating); j++) {
            result.push(<FontAwesomeIcon icon={faStar} key={Math.random()} />)
        }
        return result
    }
    handleZoomImg = () => {
        const showImgTarget = document.querySelector('.show-img-target')
        showImgTarget.style.transform = 'scale(1)'
    }
    handleOffZoomImg = () => {
        const showImgTarget = document.querySelector('.show-img-target')
        showImgTarget.style.transform = 'scale(0)'
    }
    handleCheckedColor = (index) => {
        let inputTargetColor = document.querySelectorAll('input[type=button][name=color]')
        for (let i = 0; i < inputTargetColor.length; i++) {
            inputTargetColor[i].classList.remove('active-color');
        }
        inputTargetColor[index].classList.add('active-color');
    }

    handleCheckedSize = (index) => {
        let inputTargetSize = document.querySelectorAll('input[type=button][name=size]')
        for (let i = 0; i < inputTargetSize.length; i++) {
            inputTargetSize[i].classList.remove('active-size');
        }
        console.log('input target size', inputTargetSize)
        inputTargetSize[index].classList.add('active-size');
    }
    handleRemoveTarget = () => {
        let allInput = document.querySelectorAll('input[type=button]')
        for (let i = 0; i < allInput.length; i++) {
            allInput[i].classList.remove('active-color');
            allInput[i].classList.remove('active-size')
        }
    }
    inputChange = (event) => {
        this.setState({ ...this.state, quantity: event.target.value })
    }
    activeAddAndRemoveBG = (index) => {
        this.handleAddToCart_Detail();
        this.handleRemoveTarget(index)
    }
    componentDidUpdate() {
        if (this.props.detailShop === undefined && this.state.updated === true) {
            this.setState({ ...this.state, updated: false })
            this.props.getDetailInfoShop(this.props.product.shop_info.shop_id)
        }
    }
    render() {
        let { product, indexImage, detailShop } = this.props
        return (
            <div className='container-detail-page'>
                {product && <Row className='row-detail-page' >
                    <Col md={6}>
                        <div className='firstImage'>
                            <button className='previousImg' onClick={this.previousImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
                            <button className='nextImg' onClick={this.nextImage}><FontAwesomeIcon icon={faChevronRight} /></button>
                            <img onClick={this.handleZoomImg} className='img-target' src={IMAGE_URL + product.images[indexImage]} alt={product.name}></img>
                            <div className='show-img-target'>
                                <div className='block-zoom-img'>
                                    <div className='block-main-img'>
                                        <img className='active-zoom-img' src={IMAGE_URL + product.images[indexImage]} alt={product.name}>
                                        </img>
                                        <button className='previousImg' onClick={this.previousImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
                                        <button className='nextImg' onClick={this.nextImage}><FontAwesomeIcon icon={faChevronRight} /></button>
                                        <button className='btn-close' onClick={this.handleOffZoomImg}>X</button>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className='detail-list-img'>
                            {product.images.map((item, index) =>
                                <DetailImages item={item} product={product} index={index} key={index} />
                            )}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='infoproduct'>

                            <p className='product-name'>{product.name}</p>
                            {product.promotion_percent > 0 ? <div className='price-product'>
                                <span>-{product.promotion_percent}%</span>
                                <p>{product.price.toLocaleString()}đ</p>
                                <p>{product.final_price.toLocaleString()}đ</p>
                            </div> : <div className='price-product'><p className='price-no-promotion'>{product.price.toLocaleString()}đ</p></div>}

                            <div className='block-rating-total-order'>
                                <p className='icon-star' style={product.rating_info.percent_star < 0.5 ? { display: 'none' } : { display: 'flex' }}> <span>Đánh giá :</span> {this.showRatingDetail(product.rating_info.percent_star)}</p>
                                <p className='order-count'>( {product.order_count} <span> Lượt mua</span> )</p>
                            </div>
                            <p className='brand-product' style={product.brand_name.length === 0 ? { display: 'none' } : { display: 'flex' }}><span>Thương hiệu : </span>{product.brand_name}</p>

                            <div className='list-color' style={this.props.attributeColor.length === 0 ? { display: 'none' } : { display: 'flex' }}>
                                <h5>Màu sắc : </h5>
                                <div className='total-list-color'>
                                    {this.props.attributeColor.map((item, index) =>
                                        <AttributeColor handleCheckedColor={(index) => this.handleCheckedColor(index)} attribute={item} index={index} key={index} />
                                    )}
                                </div>

                            </div>
                            <div className='list-size' style={this.props.attributeSize.length === 0 ? { display: 'none' } : { display: 'flex' }}>
                                <h5>Kích cỡ : </h5>
                                <div className='total-list-size'>
                                    {this.props.attributeSize.map((item, index) =>
                                        <AttributeSize handleCheckedSize={index => this.handleCheckedSize(index)} attribute={item} index={index} key={index} />
                                    )}
                                </div>
                            </div>
                            <div className='input-quantity-addtocart'>
                                <div className='input-quantity'>
                                    <span>Số lượng : </span>
                                    <input type='number' min='1' max={product.quantity} value={this.state.quantity} onChange={this.inputChange} />
                                    <p style={product.status_quantity.length === 0 ? { display: 'none' } : { display: 'block' }} className='quantity-moment'>( {product.status_quantity} )</p>
                                </div>

                                <button id='btn-addtocart' onClick={(index) => this.activeAddAndRemoveBG(index)}><span>add to cart</span></button>
                            </div>

                            <div className='nothing-2'>
                                {product.customer_benefits.benefits.map((item, index) =>
                                    <Benefits item={item} index={index} key={index} />
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col md={12} className='shop-store'>
                        <h4 className='about-shop'>
                            Thông Tin Shop
                        </h4>
                        {detailShop && <Row className='info-shop'>
                            <Col md={6} className='block-1'>
                                <div className='logo-shop'>
                                    <img src={detailShop.shop_logo} alt={detailShop.shop_name} />
                                </div>
                                <div className='nothing'>
                                    <span>{detailShop.shop_name}</span>
                                    <p>{detailShop.telephone}</p>
                                    <p className='address'>{detailShop.warehouse}</p>
                                </div>
                            </Col>
                            <Col md={2} className='block-2 total-uptime'>
                                <span>Đã hoạt động</span>
                                <p>{detailShop.created_at_str}</p>
                            </Col>
                            <Col md={2} className='block-3 place-store'>
                                <span>Kho hàng tại</span>
                                <p>{detailShop.warehouse_city_name}</p>
                            </Col>
                            <Col md={2} className='block-4 time-feedback'>
                                <span>Phản hồi trong</span>
                                <p>{detailShop.response_time}</p>
                            </Col>
                        </Row>}
                    </Col>

                    <Col md={12} className='description' >
                        <Markup content={product.description} />
                        <div><p>{product.short_description}</p></div>
                    </Col>
                </Row>
                }
                <div className='back-to-list'>
                    <Link to='reactCv-shopping/list'>Tiếp tục mua sắm nào</Link>
                </div>
            </div>
        )
    }
}

Detailpage.defaultProps = {
    product: undefined,

}
const mapStateToProps = state => ({
    product: state.product,
    wishColor: state.wishColor,
    wishSize: state.wishSize,
    attributeColor: state.attributeColor,
    attributeSize: state.attributeSize,
    value: state.value,
    id: state.id,
    cart: state.cart,
    loginStatus: state.loginStatus,
    indexImage: state.indexImage,
    status: state.status,
    errMsg: state.errMsg,
    quantityProduct: state.quantityProduct,
    detailShop: state.detailShop,
    recentlyViewedProducts : state.recentlyViewedProducts

})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getDetailProduct, addToCart_Detail, getIndexImage, getDetailInfoShop }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Detailpage);