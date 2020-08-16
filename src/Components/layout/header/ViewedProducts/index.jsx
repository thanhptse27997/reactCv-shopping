import React from 'react'
import { IMAGE_URL } from '../../../../apis'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { getDetailProduct, getDetailInfoShop } from '../../../../actions'
import './index.scss'

class ViewedProducts extends React.Component {
    // componentDidMount() {
    //     const parsed = queryString.parse(window.location.search)
    //     const id = parsed.id
    //     this.props.getDetailProduct(id)
    // }
    handleChangeProductRW = () => {
        const { product, recentlyViewedProducts } = this.props
        // if (recentlyViewedProducts.findIndex(x => x.id !== product.id) >= 0) {
        //     this.props.getDetailProduct(recentlyViewedProducts[i].id)
        //     this.props.getDetailInfoShop(recentlyViewedProducts[i].shop_info.shop_id)
        // }
        // for(let i = 0; i <= recentlyViewedProducts.length -1 ; i++){
        //     if(product.id !== recentlyViewedProducts[i].id){
        //         this.props.getDetailProduct(recentlyViewedProducts[i].id)
        //         this.props.getDetailInfoShop(recentlyViewedProducts[i].shop_info.shop_id)
        //         console.log('có chạy id mới không ?')
        //     }
        // }
    }
    render() {
        let { recentlyViewedProducts } = this.props
        return (
            <div className='viewed-products'>
                <p className='title-viewed'>Sản phẩm vừa xem<span style={recentlyViewedProducts.length >= 10 ? { right: '9px' } : { right: '11px' }}>{recentlyViewedProducts.length}</span></p>
                <div className='block-v-product' style={recentlyViewedProducts.length === 0 ? { display: 'none' } : { display: 'flex' }}>
                    <p>Sản phẩm vừa xem :</p>
                    {recentlyViewedProducts && recentlyViewedProducts.map((item, index) =>
                        <div className='v-product' key={index}>
                            <Link to={`/detail?id=${item.id}&name=${item.name}&index=${index}`} onClick={this.handleChangeProductRW}>
                                <img src={IMAGE_URL + item.images[0]} alt={item.name} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapsStateToProps = state => ({
    product: state.product,
    recentlyViewedProducts: state.recentlyViewedProducts
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getDetailProduct, getDetailInfoShop }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(ViewedProducts);