import React from 'react'
import './index.scss'

class PackageDiscount extends React.Component {
    // controlColorText = ()=>{
    //     let colorText = document.querySelector('.text-color')
    //     colorText.style.color = 'yellow'
    // }
    render() {
        const { product,index } = this.props
        let text = ''
        console.log('index của package' , index)
        switch (product.type) {
            case 'shipping_discount': {
                text = 'Miễn phí vận chuyển'
                break;
            }
            case 'installment': {
                text = product.text
                break;
            }
            case 'instant': {
                text = product.text
                break;
            }
            case 'quantity_discount':{
                text = product.text
                break;
            }
            default:
                break;
        }
        return (
            <div className={product.type} >
                <img src={product.icon} alt="icon"/>
                <span>{text}</span>
            </div>

        )

    }

}



export default PackageDiscount