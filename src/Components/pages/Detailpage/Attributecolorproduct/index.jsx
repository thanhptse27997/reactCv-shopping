import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {wishColorFunc} from '../../../../actions'
import './index.scss'
class AttributeColor extends React.Component {
    handleChooseColor = (event)=>{
        this.props.wishColorFunc(event.target.value )
    }
    handleActiveAll = (event)=>{
        this.handleChooseColor(event);
        this.props.handleCheckedColor(this.props.index);
    }
    
    render() {
        let { attribute , index} = this.props
        return (
            <div>
            <input type="button" name='color' id = {`attribute-color-${index}`} className='attribute-product-color' onClick={this.handleActiveAll} value={attribute.name}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    attributeColor : state.attributeColor,
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({wishColorFunc}, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(AttributeColor);
