import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_URL } from '../../../../apis'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getIndexImage} from '../../../../actions'
import './index.scss'
class DetailImages extends React.Component {

    render() {
        const { product, index } = this.props
        const getImage = (index) => {
            const indexImage = index
            this.props.getIndexImage(indexImage)

        }
        return (
            <Link to={`/detail?id=${product.id}&name=${product.name}&index=${index}`} className='img-detail'>
                <img onClick={() => getImage(index)} src={IMAGE_URL + product.images[index]} alt={product.name} />
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