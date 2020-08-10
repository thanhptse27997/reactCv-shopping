import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { wishUserNameFunc, wishPassWordFunc, submitUser, wrongInfo ,messLogining,getProducts} from '../../../actions'
import './index.scss'
class Login extends React.Component {
    onChangeUserName = (event) => {
        let value = event.target.value
        this.props.wishUserNameFunc(value)
    }
    onChangePassWord = (event) => {
        let value = event.target.value
        this.props.wishPassWordFunc(value)
    }
    submitUser = (e) => {
        e.preventDefault()
        if(this.props.wishUserName.length === 0 && this.props.wishPassWord.length ===0){
            return this.props.messLogining('bạn chưa điền thông tin')
        }
        if(this.props.wishUserName.length === 0){
            return this.props.messLogining('Bạn chưa điền tên đăng nhập')
        }
        if(this.props.wishPassWord.length === 0){
            return this.props.messLogining('bạn chưa điền mật khẩu')
        }
        if(this.props.wishUserName.length !==0 && this.props.wishPassWord.length !==0){
            this.props.submitUser(this.props.wishUserName, this.props.wishPassWord)
        }
    }
    render() {
        if (this.props.loginStatus === true) {
            return <Redirect to='/reactCv-shopping/list' />
        }
        return (
            <div className='container-login' onSubmit={() => this.submitUser()}>
                <form className='form-user'>
                    <input type='text' placeholder='Tên đăng nhập' onChange={this.onChangeUserName} />
                    <input type='password' placeholder='Mật khẩu' onChange={this.onChangePassWord} />
                    <button onClick={this.submitUser}>đăng nhập</button>
                    <p className='recomend-regis'>Bạn chưa có tài khoản ? <Link to='/reactCv-shopping/registration'>Đăng kí</Link></p>
                    <p className='err-mess-login' >{this.props.messageLogin==='user logout'? '' : this.props.messageLogin}</p>
                </form>

                <div className='back-to-list'>
                    <Link to='reactCv-shopping/list'>Tiếp tục mua sắm nào</Link>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    products : state.products,
    query : state.query,
    page : state.page,
    user: state.user,
    wishUserName: state.wishUserName,
    wishPassWord: state.wishPassWord,
    loginStatus: state.loginStatus,
    messageLogin: state.messageLogin
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ wishUserNameFunc, wishPassWordFunc, submitUser, wrongInfo,messLogining,getProducts }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);