import React from 'react';
import './index.scss'
class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='container-footer'>
                    <div className='way-to-pay'>
                        <h4>Cách thức thanh toán</h4>
                        <ul className='list-img-wtp'>
                            <li>
                                <img src="assets/images-footer/wtp-1.png" alt="Master Card" />
                            </li>
                            <li>
                                <img src="assets/images-footer/wtp-2.png" alt="Visa" />
                            </li>
                            <li>
                                <img src="assets/images-footer/wtp-3.png" alt="Jcb" />
                            </li>
                            <li>
                                <img src="assets/images-footer/wtp-4.png" alt="Napas" />
                            </li>
                            <li>
                                <img src="assets/images-footer/wtp-5.png" alt="Vietcombank" />
                            </li>
                            <li>
                                <img src="assets/images-footer/wtp-6.png" alt="TP Bank" />
                            </li>
                            <li>
                                <img src="assets/images-footer/wtp-7.png" alt="Vietinbank" />
                            </li>
                        </ul>
                    </div>
                    <div className='friend-shipper'>
                        <h4>Đối tác vận chuyển</h4>
                        <ul className='list-img-fs'>
                            <li>
                                <img src="assets/images-footer/fs-1.png" alt="VietNam Post" />
                            </li>
                            <li>
                                <img src="assets/images-footer/fs-2.png" alt="Viettel Post" />
                            </li>
                            <li>
                                <img src="assets/images-footer/fs-3.png" alt="GHN Express" />
                            </li>
                            <li>
                                <img src="assets/images-footer/fs-4.png" alt="Ninja van" />
                            </li>
                            <li>
                                <img src="assets/images-footer/fs-5.png" alt="DHL" />
                            </li>
                            <li>
                                <img src="assets/images-footer/fs-6.png" alt="Best Inc" />
                            </li>
                            <li>
                                <img src="assets/images-footer/fs-7.png" alt="Ahamove" />
                            </li>
                            <li>
                                <img src="assets/images-footer/fs-8.png" alt="Grab" />
                            </li>
                            <li>
                                <img src="assets/images-footer/fs-9.png" alt="JT Express" />
                            </li>
                            <li>
                                <img src="assets/images-footer/fs-10.png" alt="Ship 60" />
                            </li>
                            <li>
                                <img src="assets/images-footer/fs-11.jpg" alt="Rong Thien" />
                            </li>
                            <li>
                                <img src="assets/images-footer/fs-12.jpg" alt="TTD Express" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='footline'>
                    <div className='container-footline'>
                    <p><span>Copyright 2020 </span> &copy; <span>Sendo.vn</span></p>
                    <p>The demo version is built on API Sendo</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer