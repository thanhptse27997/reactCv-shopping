import React from 'react'
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetailProduct, addToCart_Detail, getIndexImage } from '../../../actions';
import DetailImages from './DetailImages';
import { Button, Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faStar , faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { IMAGE_URL } from '../../../apis'
import { Link } from 'react-router-dom'
class Detailpage extends React.Component{
    componentDidMount() {
        const parsed = queryString.parse(window.location.search)
        const id = parsed.id
        this.props.getDetailProduct(id)

    }

    handleAddToCart_Detail = () => {
        this.props.addToCart_Detail(this.props.product)
    }
    previousImage = () => {
        let { product, indexImage } = this.props
        console.log(indexImage - 1)
        this.props.getIndexImage(indexImage - 1 == -1 ? indexImage = product.images.length - 1 : indexImage - 1)
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
        for(let z = 5-rating ; z <= 5-rating ; z++){
            if(z < Math.round(z)){
                result.push(<FontAwesomeIcon icon={faStar} key={Math.random()} />)
            }
            if(z > Math.round(z)){
                
                result.push(<FontAwesomeIcon icon={faStarHalfAlt} className='icon-star-detail' key={Math.random()} />)
            }
        }
        for (let j = 1; j <= (5 - rating); j++) {
            result.push(<FontAwesomeIcon icon={faStar} key={Math.random()} />)
        }
        return result
    }
    render(){
        let {product , indexImage , errMsg , status} = this.props
        return(
            <Container className='container-normal'>
            {status == 'Start Loading...' && <img style={{ width: '200px' }} src='/tploading.gif' />}
            {product ? <Row className='detail-page' >
                <Col md={8}>
                    <div className='firstImage'>
                        <button className='previousImg' onClick={this.previousImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <button className='nextImg' onClick={this.nextImage}><FontAwesomeIcon icon={faChevronRight} /></button>
                        <img src={IMAGE_URL + product.images[indexImage]}></img>
                    </div>
                    <div>
                        {product.images.map((item, index) =>
                            <DetailImages item={item} product={product} index={index} key={index} />
                        )}
                    </div>
                </Col>
                <Col md={4}>
                    <div className='infoproduct'>
                        <p> {this.showRatingDetail(product.rating_info.percent_star)}</p>
                        <p>{product.name}</p>
                        <p style={{ color: 'red' }}>{product.price.toLocaleString()}</p>
                        <Button variant='outline-info' id='btn-addtocart' onClick={() => this.handleAddToCart_Detail()}>add to cart</Button>

                    </div>
                </Col>
            </Row>
                : <div>
                    <p style={{ color: 'red' }}>{errMsg}</p>
                    <Link to='/thanhptse-Cv/porfolio/list'>Tiếp tục mua sắm nào</Link>
                </div>
            }

        </Container>
        )
    }
}

Detailpage.defaultProps = {
    product: undefined,
    id: '',

}
const mapStateToProps = state => ({
    product: state.product,
    index: state.index,
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