import React from 'react'
import { Markup } from 'interweave'
import './index.scss'
class Benefits extends React.Component {

    render() {
        const { item , index} = this.props
        return (
            <div className='benefits' onClick = {this.handleChangeStyle} id = {`benefits-${index}`}>
                <div className='reback-product'>
                    <p>{item.text}</p>
                </div>
                <div className='promise-sendo' id={`promise-sendo-${index}`}>
                <Markup  content ={item.tooltip} />
                </div>
            </div>
        )
    }
}

export default Benefits