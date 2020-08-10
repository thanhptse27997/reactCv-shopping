import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDetailProduct, getPrice, deleteProduct } from '../../../actions'
import ProductOfCart from './ProductOfCart'
import { Link } from 'react-router-dom'
import './index.scss'
class Cart extends React.Component {
    inputChange = (index, event) => {
        let quantity = this.props.quantityProduct[index]
        quantity = event.target.value
        const priceIndex = this.props.cart[index].price * quantity
        console.log(priceIndex)
        this.props.getPrice(priceIndex, index, quantity)
    }

    handleDelete = (index, priceIndex, quantity) => {
        priceIndex = this.props.cart[index]
        quantity = this.props.cart[index]
        this.props.deleteProduct(index, priceIndex, quantity)
    }
    render() {
        const { cart, totalPriceOfProduct, chooseColor, chooseSize } = this.props
        let totalPriceOfCart = totalPriceOfProduct.reduce((price, number) => {
            return price += number
        }, 0)
        return (
            // <div className='cart-compo'>
            //     <div className='list-cart'>
            //         <table>
            //             {this.props.cart.map((item, index) => (
            //                 <tbody key={index}>
            //                     <tr>
            //                         <td style={{ width: '150px' }}> <p style={{ paddingTop: '30px' }}> {item.name} </p> </td>
            //                         <td></td>
            //                         <td><Button variant='outline-danger' onClick={() => this.handleDelete(index)} style={{ fontSize: '12px' }}>Delete</Button> </td>
            //                         <td></td>
            //                         <td></td>
            //                     </tr>
            //                     <tr>
            //                         <td> <ProductOfCart product={item} index={index} /></td>
            //                         <td> x </td>
            //                         <td index={index}> <input index={index} type='number' min='1' value={this.props.quantityProduct[index]} onChange={(event, quantity) => this.inputChange(index, event, quantity)} ></input> </td>
            //                         <td> = </td>
            //                         <td className='price'> <p>{totalPriceOfProduct[index].toLocaleString()}đ</p> </td>
            //                         <td>{chooseColor[index]}</td>

            //                     </tr>
            //                 </tbody>
            //             ))}
            //         </table>
            //         <hr />
            //         <div>
            //             <p style={{ color: 'red' }}>Total : {totalPriceOfCart.toLocaleString()}đ</p>
            //             <Button onClick={this.handleOrderSuccess} variant='outline-success' style={{ fontSize: '12px' }}>Order Now</Button>
            //         </div>
            //     </div>
            // </div>
            <div className='cart-page'>
                <div className='title-cart'>
                    <h4> Giỏ hàng của bạn <span> ( {cart.length} sản phẩm</span> ) </h4>
                </div>

                {cart.map((item, index) =>
                    <div className='product-of-cart' key={index}>
                        {/* <div className='details-title-product-cart'>
                            <p>Sản phẩm</p>
                            <p>Màu sắc</p>
                            <p>Kích cỡ</p>
                            <p>Số lượng</p>
                            <p>Thành tiền</p>
                        </div> */}
                        <div className='details-product-cart'>
                            <div className='block product-cart'>
                                <div className='title-props-cart'>
                                    <p>Sản phẩm</p>
                                </div>
                                <div>
                                    <ProductOfCart product={item} index={index} />
                                    <p>{item.name}</p>
                                    <span>-{item.promotion_percent}%</span>
                                </div>

                            </div>
                            <div className=' block color-product-cart'>
                                <div className='title-props-cart'>
                                    <p>Màu sắc</p>
                                </div>
                                <p>{chooseColor[index]}</p>
                            </div>
                            <div className='block size-product-cart' >
                                <div className='title-props-cart'>
                                    <p>Kích cỡ</p>
                                </div>
                                <p>{chooseSize[index]}</p>
                            </div>
                            <div className='block quantity-product-cart' index={index}>
                                <div className='title-props-cart'>
                                    <p>Số lượng</p>
                                </div>
                                <input index={index} type='number' min='1' value={this.props.quantityProduct[index]} onChange={(event, quantity) => this.inputChange(index, event, quantity)} ></input>
                            </div>
                            <div className='block price-product-cart'>
                                <div className='title-props-cart'>
                                    <p>Thành tiền</p>
                                </div>
                                <div>
                                    <p>{totalPriceOfProduct[index].toLocaleString()}đ</p>
                                    <p>{item.price.toLocaleString()}đ</p>
                                </div>
                            </div>
                            <div className='btn-delete'>
                                <button onClick={() => this.handleDelete(index)}>X</button>
                            </div>
                        </div>
                    </div>
                )}
                <div className='total-price-all'>
                    <p>Tổng tiền : <span>{totalPriceOfCart.toLocaleString()}đ </span></p>
                </div>
                <div className='last-block'>
                    <button><span>Thanh toán</span></button>
                </div>
                <div className='back-to-list'>
                    <Link to='/reactCv-shopping/list'>Tiếp tục mua sắm nào</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    product: state.product,
    products: state.products,
    cart: state.cart,
    totalPriceOfProduct: state.totalPriceOfProduct,
    quantityProduct: state.quantityProduct,
    chooseSize: state.chooseSize,
    chooseColor: state.chooseColor

})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getDetailProduct, getPrice, deleteProduct }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);