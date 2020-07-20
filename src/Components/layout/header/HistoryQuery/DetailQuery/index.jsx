import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getProducts} from '../../../../../actions'
import {Link} from 'react-router-dom'
import './index.scss'
class DetailQuery extends React.Component {
    backToHistoryQuery = () => {
        this.props.getProducts(this.props.detailQuery , 1, true)
    }
    render() {
        let { detailQuery } = this.props
        return (
            <span className='back-to-query'>
            <Link to='/reactCv-shopping/list' onClick={this.backToHistoryQuery}>
                {detailQuery}
            </Link>
            </span>

        )
    }
}

const mapsStateToProps = state => ({
    isFocus: state.isFocus
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(DetailQuery);