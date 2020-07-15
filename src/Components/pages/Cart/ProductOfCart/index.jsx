import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_URL } from '../../../../apis'

class ProductOfCart extends React.Component {
    render() {
        let { product, index } = this.props
        return (
            <div>
                <Link to={`/detail?id=${product.id}&name=${product.name}&index=${index}`}>
                    <div className='cart_image'>
                        <img style={{ width: '60px' }} src={product.img_url || IMAGE_URL + product.images[0] } />
                    </div>
                </Link>
            </div>
        )
    }

}
export default ProductOfCart