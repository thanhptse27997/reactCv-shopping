import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import './index.scss'

class BannerEventWidget extends React.Component{
    render(){
        let {typesHome} = this.props
        let result = []
        for(let i in typesHome){
            if(typesHome[i].type === 'BannerEventWidget'){
                result = typesHome[i].data.list
            }
        }
        return(
            <div className='banner-event'>
                {result.map((item,index)=>
                    <a href={item.url} className='link-to-event' target="_blank" rel="noopener noreferrer" key={index}>
                        <img src={item.image} alt={item.name} />
                    </a>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    typesHome : state.typesHome
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BannerEventWidget);