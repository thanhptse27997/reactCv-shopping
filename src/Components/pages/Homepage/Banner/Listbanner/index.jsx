import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class Listbanner extends React.Component{
    render(){
        let {itemBanner} = this.props 
        return(
            <div>
                <img src={itemBanner.image} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    banner : state.banner
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Listbanner);