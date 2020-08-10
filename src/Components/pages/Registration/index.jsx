import React from 'react'
import {wishUserNameFunc , wishPassWordFunc,wishEmailUser,regisNewUser,errMessRegistration} from '../../../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import './index.scss'
class Registration extends React.Component {
    onchangeUserRegistration = event =>{
        let value = event.target.value
        this.props.wishUserNameFunc(value)
    }
    onChangePassRegistration = event =>{
        let value = event.target.value
        this.props.wishPassWordFunc(value)
    }
    onChangeEmail = event =>{
        let value = event.target.value
        this.props.wishEmailUser(value)
    }
    submitFormRegistration = (event)=>{
        event.preventDefault()
        if(this.props.wishUserName.length === 0 && this.props.wishPassWord.length === 0 && this.props.wishEmail.length === 0){
            return this.props.errMessRegistration('bạn chưa điền thông tin đăng kí')
        }
        if(this.props.wishUserName.length === 0){
            return this.props.errMessRegistration('bạn chưa điền tên đăng nhập')
        }
        if(this.props.wishPassWord.length === 0){
            return this.props.errMessRegistration('bạn chưa điền mật khẩu')
        }
        if(this.props.wishEmail.length === 0){
            return this.props.errMessRegistration('bạn chưa nhập email')
        }
        if(this.props.wishUserName.length !==0 && this.props.wishPassWord.length !==0 && this.props.wishEmail.length !==0){
            this.props.regisNewUser(this.props.wishUserName , this.props.wishPassWord , this.props.wishEmail)
        }
    }
    render() {
        return (
            <div className='container-registration'  >
                <form className='form-regis' style={this.props.messageRegistration ==='Đăng kí thành công' ? {display : 'none'} : {display : 'flex'}}>
                    <input type="text" placeholder='Tên đăng nhập' onChange={this.onchangeUserRegistration} />
                    <input type="text" placeholder='Email của bạn' onChange={this.onChangeEmail} />
                    <input type='password' placeholder='Mật khẩu' onChange={this.onChangePassRegistration} />
                    <button onClick={this.submitFormRegistration}>Đăng kí</button>

                </form>
                <p className='err-mess-regis'>{this.props.messageRegistration} <Link to='/reactCv-shopping/login' style={this.props.messageRegistration === 'Đăng kí thành công' ? {display :'inline-block'} : {display : 'none'}}>Đăng nhập</Link></p>
                <div className='back-to-list'>
                    <Link to='reactCv-shopping/list'>Tiếp tục mua sắm nào</Link>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    user: state.user,
    wishUserName: state.wishUserName,
    wishPassWord: state.wishPassWord,
    loginStatus: state.loginStatus,
    messageLogin: state.messageLogin,
    wishEmail : state.wishEmail,
    messageRegistration : state.messageRegistration
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ wishUserNameFunc, wishPassWordFunc,wishEmailUser,regisNewUser,errMessRegistration }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration);