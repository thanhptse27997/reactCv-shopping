import React from 'react'
import './index.scss'
class PackageDiscountMuti extends React.Component{
    render(){
        const { product } = this.props
        return(
            <div className={product.type +'-only-icon'} style={{marginRight : '10px'}}>
                <img src={product.icon} alt="icon"/>
                {console.log('màu bg của icon' , product.bg_color)}
            </div>
        )
    }
}

export default PackageDiscountMuti