import React from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
class Introduce extends React.Component {
    render() {
        return (
            <div className='introduce-page'>
                <h4 className='text-intro-author'>
                    Hi, I am thanhPham - student of NC and author of this project.
                </h4>
                <div className='block-intro-project'>
                    <p>The demo version is built on API Sendo with the most basic functions of a shopping website.</p>
                    <p>API Sendo used to free for my school until I saw Cors Policy on Console. That means they have taken the copyright back and I can't know exactly Url of the API to get data of other pages.</p>
                </div>

                <div className='detail-project'>
                    <h4>About detail of project :</h4>
                    <div className='pages-project'>
                        <p>Pages :</p>
                        <ul className='pages'>
                            <li>Home page</li>
                            <li>List page</li>
                            <li>Detail page</li>
                            <li>Cart page</li>
                            <li>Login page</li>
                            <li>Registration page</li>
                        </ul>
                    </div>
                    <div className='functions-project'>
                        <p>Functions :</p>
                        <ul className='functions'>
                            <li>Searching products</li>
                            <li>Add to cart</li>
                            <li>Filter products</li>
                            <li>And some small functions...</li>
                        </ul>
                    </div>
                </div>

                <div className='note'>
                    <p>Because I am a newbie so I don't have ideas to build perfect version.</p>
                    <p>Thanks for reading.</p>
                </div>
                <div className='back-to-list'>
                    <Link to='/reactCv-shopping/list'>Back To List</Link>
                </div>
            </div>
        )
    }
}

export default Introduce