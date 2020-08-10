import React from 'react'
import './index.scss'
class PackageDiscountMuti extends React.Component{
    render(){
        const { product } = this.props
        return(
            <div className={product.type +'-only-icon'}>
                <img src={product.icon} alt="icon"/>
            </div>
        )
    }
}

export default PackageDiscountMuti