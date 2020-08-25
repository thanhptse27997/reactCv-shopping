import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { wishSizeFunc } from '../../../../actions'
import './index.scss'
class AttributeSize extends React.Component {
    handleChooseSize = (event) => {
        this.props.wishSizeFunc(event.target.value)
    }
    handleActiveAllSize = (event)=>{
        this.handleChooseSize(event);
        this.props.handleCheckedSize(this.props.index);
    }
    render() {
        let { attribute  } = this.props
        return (
            <div className='focus-important'>
                <input type="button" name='size' id='index-size' className='attribute-product-size' onClick={this.handleActiveAllSize} value={attribute.value} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    attributeColor: state.attributeColor,
    attributeSize: state.attributeSize,
    indexSize : state.indexSize,
    indexColor : state.indexColor
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ wishSizeFunc }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(AttributeSize);
