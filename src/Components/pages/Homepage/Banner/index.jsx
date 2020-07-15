import React from 'react'
import Listbanner from './Listbanner'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import './index.scss'
class Banner extends React.Component {
    render() {
        return (
                <Carousel className='banner container'>
                {this.props.banner.map((item, index) =>
                    <Carousel.Item key={index}>
                        {item.title === 'HV_Motorbike_0307_3107' ?
                            <Link to='/reactCv-shopping/eventbanner'>
                                <Listbanner itemBanner={item} index={index} key={index} />
                            </Link>
                            : <Listbanner itemBanner={item} index={index} key={index} />
                        }
                    </Carousel.Item>
                )}
            </Carousel>
        )
    }
}
const mapStateToProps = state => ({
    banner: state.banner
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);