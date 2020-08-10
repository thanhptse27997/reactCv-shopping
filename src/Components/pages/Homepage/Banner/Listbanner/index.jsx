import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Listbanner extends React.Component {
    render() {
        let { itemBanner } = this.props
        return (
            <a href={itemBanner.url} target="_blank" rel="noopener noreferrer">
                <img src={itemBanner.image} alt ={itemBanner.title}/>
            </a >
        )
    }
}

const mapStateToProps = state => ({
    banner: state.banner
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Listbanner);