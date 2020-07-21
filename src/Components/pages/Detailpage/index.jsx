import React from 'react'
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetailProduct, addToCart_Detail, getIndexImage } from '../../../actions';
import DetailImages from './DetailImages';
import { Button, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { IMAGE_URL } from '../../../apis'
import { Link } from 'react-router-dom'
import './index.scss'
class Detailpage extends React.Component {
    componentDidMount() {
        const parsed = queryString.parse(window.location.search)
        const id = parsed.id
        this.props.getDetailProduct(id)

    }

    handleAddToCart_Detail = () => {
        this.props.addToCart_Detail(this.props.product);
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
        const btnTarget = document.querySelector('.btn-close')
        btnTarget.style.transform = 'translateX(235px) translateY(75px) scale(1)'
        showImgTarget.style.transform = 'translateX(17%) translateY(-25%) scale(1)'
        
    }
    handleOffZoomImg = () => {
        
        const btnTarget = document.querySelector('.btn-close')
        const showImgTarget = document.querySelector('.show-img-target')
        showImgTarget.style.transform = 'translateX(17%) translateY(-25%) scale(0)'
        btnTarget.style.transform = 'translateX(235px) translateY(75px) scale(0)'

    }
    render() {
        let { product, indexImage, status } = this.props
        return (
            <div className='container-detail-page'>
                {status === 'Start Loading...' && <img style={{ width: '200px' }} src='/tploading.gif' alt='loading...' />}
                {product && <Row className='row-detail-page' >
                    <Col md={6}>
                        <div className='firstImage'>
                            <button className='previousImg' onClick={this.previousImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
                            <button className='nextImg' onClick={this.nextImage}><FontAwesomeIcon icon={faChevronRight} /></button>
                            <img onClick={this.handleZoomImg} className='img-target' src={IMAGE_URL + product.images[indexImage]} alt={product.name}></img>
                            <div className='show-img-target'>
                                <img src={IMAGE_URL + product.images[indexImage]} alt={product.name}></img>
                                <button className='btn-close' onClick={this.handleOffZoomImg}>X</button>
                            </div>

                        </div>
                        <div>
                            {product.images.map((item, index) =>
                                <DetailImages item={item} product={product} index={index} key={index} />
                            )}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='infoproduct'>
                            <p className='icon-star'> {this.showRatingDetail(product.rating_info.percent_star)}</p>
                            <p>{product.name}</p>
                            <p style={{ color: 'red' }}>{product.price.toLocaleString()}</p>
                            <Button variant='outline-info' id='btn-addtocart' onClick={() => this.handleAddToCart_Detail()}>add to cart</Button>

                        </div>
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
    // index: state.index,
    id: state.id,
    cart: state.cart,
    loginStatus: state.loginStatus,
    indexImage: state.indexImage,
    status: state.status,
    errMsg: state.errMsg
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getDetailProduct, addToCart_Detail, getIndexImage }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Detailpage);