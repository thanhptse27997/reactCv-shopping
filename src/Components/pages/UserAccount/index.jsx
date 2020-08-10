import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import './index.scss'

class UserAccount extends React.Component {
    render() {
        return (
            <div className='info-user'>
                {this.props.userLogged.map((item, index) =>
                    <div key={index}>
                        <p><span>Username : </span>{item.name}</p>
                        <p><span>Password : </span>{item.password}</p>
                    </div>
                )}
                <div className='back-to-list'>
                    <Link to='reactCv-shopping/list'>Tiếp tục mua sắm nào</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userLogged: state.userLogged
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);