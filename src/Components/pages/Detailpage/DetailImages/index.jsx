import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_URL } from '../../../../apis'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getIndexImage} from '../../../../actions'
class DetailImages extends React.Component {

    render() {
        const { product, index } = this.props
        const getImage = (index) => {
            const indexImage = index
            this.props.getIndexImage(indexImage)

        }
        return (
            <Link to={`/detail?id=${product.id}&name=${product.name}&index=${index}`}>
                <img onClick={() => getImage(index)} style={{ width: '50px' }} src={IMAGE_URL + product.images[index]} />
            </Link>

        )
    }
}
const mapsStateToProps = state => ({
    indexImage: state.indexImage
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getIndexImage}, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(DetailImages);