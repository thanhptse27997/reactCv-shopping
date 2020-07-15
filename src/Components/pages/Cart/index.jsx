import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'react-bootstrap'
import { getDetailProduct, getPrice, deleteProduct } from '../../../actions'
import ProductOfCart from './ProductOfCart'
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
        const { cart, totalPriceOfProduct } = this.props
        let totalPriceOfCart = totalPriceOfProduct.reduce((price, number) => {
            return price += number
        }, 0)
        return (
            <div className='Cart'>
                <span className='quantity-cart'>{cart.length}</span>
                <div className='list-cart'>
                    <table>
                        {this.props.cart.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td style={{ width: '150px' }}> <p style={{ paddingTop: '30px' }}> {item.name} </p> </td>
                                    <td></td>
                                    <td><Button variant='outline-danger' onClick={() => this.handleDelete(index)} style={{ fontSize: '12px' }}>Delete</Button> </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td> <ProductOfCart product={item} index={index} /></td>
                                    <td> x </td>
                                    <td index={index}> <input index={index} type='number' min='1' value={this.props.quantityProduct[index]} onChange={(event, quantity) => this.inputChange(index, event, quantity)} ></input> </td>
                                    <td> = </td>
                                    <td className='price'> <p>{totalPriceOfProduct[index].toLocaleString()}đ</p> </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                    <hr />
                    <div>
                        <p style={{ color: 'red' }}>Total : {totalPriceOfCart.toLocaleString()}đ</p>
                        <Button onClick={this.handleOrderSuccess} variant='outline-success' style={{ fontSize: '12px' }}>Order Now</Button>
                    </div>

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
    quantityProduct: state.quantityProduct

})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getDetailProduct, getPrice, deleteProduct }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);