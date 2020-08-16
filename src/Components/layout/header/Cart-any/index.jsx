import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'react-bootstrap'
import { getDetailProduct, getPrice, deleteProduct } from '../../../../actions'
import ProductOfCart from '../../../pages/Cart/ProductOfCart'
import { Link } from 'react-router-dom'
import './index.scss'
class CartAny extends React.Component {
    inputChange = (index, event) => {
        let quantity = this.props.quantityProduct[index]
        quantity = event.target.value
        let priceIndex
        if (this.props.cart[index].promotion_percent > 0) {
            priceIndex = this.props.cart[index].final_price * quantity
        } else {
            priceIndex = this.props.cart[index].price * quantity
        }
        console.log(priceIndex)
        this.props.getPrice(priceIndex, index, quantity)
    }

    handleDelete = (index, priceIndex, quantity) => {
        priceIndex = this.props.cart[index]
        quantity = this.props.cart[index]
        this.props.deleteProduct(index, priceIndex, quantity)
    }
    render() {
        const { totalPriceOfProduct } = this.props
        let totalPriceOfCart = totalPriceOfProduct.reduce((price, number) => {
            return price += number
        }, 0)
        let x = window.innerWidth
        console.log('x = width =', x)
        return (
            <div className='cart-any'>
                <div className='list-cart-any' style={this.props.cart.length !== 0 ? { display: 'block' } : { display: 'none' }}>
                    <table>
                        {this.props.cart.map((item, index) => (
                            <tbody key={index}>
                                <tr className='tr-row-1'>
                                    <td><p style={{ paddingTop: '30px' }}>{item.name.slice(0, 30)}{item.name.length < 30 ? '' : '...'}</p></td>
                                    <td><Button variant='outline-danger' onClick={() => this.handleDelete(index)} style={{ fontSize: '12px' }}>X</Button> </td>
                                </tr>
                                <tr className='tr-row-2'>
                                    <td> <ProductOfCart product={item} index={index} /></td>
                                    <td> x </td>
                                    <td index={index}> <input index={index} type='number' min='1' value={this.props.quantityProduct[index]} onChange={(event, quantity) => this.inputChange(index, event, quantity)} ></input> </td>
                                    <td> = </td>
                                    <td className='price'> <p>{totalPriceOfProduct[index].toLocaleString()}đ</p> </td>
                                </tr>
                                <tr className='tr-row-3'>
                                    <td>-----------------------------------------</td>
                                </tr>
                            </tbody>

                        ))}
                    </table>
                    <hr />
                    <div className='total-price-all-cart-any'>
                        <p>Tổng tiền : <span>{totalPriceOfCart.toLocaleString()}đ</span></p>
                        <Link to='/reactCv-shopping/cart'>Xem giỏ hàng</Link>
                    </div>
                </div>

                {/* note when cart empty */}
                <p style={this.props.cart.length !== 0 ? { display: 'none' } : { display: 'block' }}>Giỏ hàng chưa có sản phẩm</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    product: state.product,
    products: state.products,
    cart: state.cart,
    totalPriceOfProduct: state.totalPriceOfProduct,
    quantityProduct: state.quantityProduct

})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getDetailProduct, getPrice, deleteProduct }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartAny);
