import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import './index.scss'

class ShortcutWidget extends React.Component {
    render() {
        let {typesHome} = this.props
        let result = []
        for(let i in typesHome){
            if(typesHome[i].type === 'ShortcutWidget'){
                result = typesHome[i].data.list
            }
        }
        console.log('list icon shortcut ',result)
        return (
            <div className='list-icon-shortcut'>
                {result.map((item,index)=>
                   <a href={item.url} target="_blank" rel="noopener noreferrer" className='icon' key={index}>
                        <img src={item.image} alt={item.title}/>
                        <span>{item.title}</span>
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
    ...bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShortcutWidget);