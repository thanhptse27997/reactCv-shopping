import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import Carousel from 'react-bootstrap/Carousel'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// import Swiper from "swiper";
// import "swiper/css/swiper.css";
// import "./CoverFlowCarousel.css";
import './index.scss'
import Countdown from 'react-countdown';


class FlashDealWidget extends React.Component {
    render() {
        const { typesHome } = this.props
        let result = []
        let timeFls
        let titleFls

        for (let i in typesHome) {
            if (typesHome[i].type === 'FlashDealWidget') {
                result = typesHome[i].data.list
                timeFls = typesHome[i].data.end_time
                titleFls = typesHome[i].data.title
            }
        }
        // console.log('kiểu', typeof timeFls)
        let milisTimeFls = timeFls * 1000
        // let timeMoment = Date.now()
        // let timeFlashing = timeFls * 1000 - timeMoment
        // let hours, minutes, seconds
        // let hours = Math.trunc(timeFlashing / (3600000))
        // let minutes = Math.trunc((timeFlashing % 3600000) / 60000)
        // let seconds = Math.trunc(((timeFlashing % 360000) % 60000) / 1000)
        // console.log('time hiện tại', timeMoment)
        // console.log('timeEnd trên api sendo', timeFls)
        // console.log('hiệu của timeEnd sendo - timeMoment = ', timeFlashing)
        // console.log('giờ = hiệu / 3600000', Math.trunc(timeFlashing / (3600000)))
        // console.log('dư của giờ = ', timeFlashing % 3600000)
        // console.log('phút = dư của giờ / 60000 = ', Math.trunc((timeFlashing % 3600000) / 60000))
        // console.log('dư của phút = ', (timeFlashing % 3600000) % 60000)
        // console.log('giây = dư của phút / 1000 = ', Math.trunc(((timeFlashing % 360000) % 60000) / 1000))
        // console.log('mili s time', milisTimeFls)
        SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);
        // let x = window.innerWidth
        // let objBreak = {}
        // let breakpoints = ()=>{
        //     if(x <= 991){
        //        return  objBreak = {
        //             slidesPerView: 3.23,
        //             spaceBetween: 40
        //         }
        //     }
        // }
        let breakpoints = {
            576: {
                slidesPerView: 2.45,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3.23,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 4.3,
                spaceBetween: 40
            },
            1200: {
                spaceBetween: 50,
                slidesPerView: 5.16
            }
        }
        const responsive = {
            // superLargeDesktop: {
            //   // the naming can be any, depends on you.
            //   breakpoint: { max: 4000, min: 3000 },
            //   items: 5
            // },
            // desktop: {
            //   breakpoint: { max: 3000, min: 1024 },
            //   items: 3
            // },
            // tablet: {
            //   breakpoint: { max: 1024, min: 464 },
            //   items: 2
            // },
            mobile: {
                breakpoint: { max: 575, min: 480 },
                items: 2,
                slidesToSlide: 2
            },
            smallerMobile:{
                breakpoint: { max: 500, min: 320 },
                items: 1,
                slidesToSlide: 1
            }
        };
        const renderer = ({ hours, minutes, seconds }) => {
            return (
                <div className='block-countdown'>
                    <span>{hours}</span>
                    <span>{minutes}</span>
                    <span>{seconds}</span>
                </div>
            )
        }
        return (
            <div className='flash-sale-content'>
                <div className='block-title-time-end-fls'>
                    <div className='dont-know'>
                        <div className='title-fls'>
                            <h4>{titleFls}</h4>
                        </div>
                        {isNaN(milisTimeFls) === false && <Countdown date={milisTimeFls} renderer={renderer} />}
                    </div>
                </div>
                <Swiper

                    navigation
                    breakpoints={breakpoints}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {result.map((item, index) =>
                        <SwiperSlide key={index}>
                            <div className='product-fls' style={item.sale_stock_number === item.buy_number ? { opacity: '0.5' } : { opacity: '1' }}>
                                <Link to={`/detail?id=${item.product_id}&name=${item.name}&index=${index}`}>
                                    <img src={item.img_url_mob} alt={item.name} />
                                    <span className='recomend-detail'>Xem chi tiết</span>
                                </Link>
                                <p className='price-fls'>{item.final_price.toLocaleString()}đ</p>
                                <span className='promo-fls'>-{item.promotion_percent}%</span>
                                <p className='total-products-fls'><span style={{ width: item.stock_percent + '%' }} className='total-quantity-sold'></span><span className='status-moment'>{item.stock_description}</span><img className='img-sale' style={item.stock_description === "Sắp hết" ? { display: 'block' } : { display: 'none' }} src='https://media3.scdn.vn/img3/2019/1_16/vE4Gfx.png' alt='icon-sale' /></p>
                                <img className='clear-all' src='https://media3.scdn.vn/img2/2018/8_6/CET2Q5.png' alt='Hết hàng' style={item.sale_stock_number === item.buy_number ? { display: 'block' } : { display: 'none' }} />
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>

                <Carousel
                    className='products-mobile' 
                    responsive={responsive}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    // ssr={true}
                    customTransition="all 0.5s"
                    transitionDuration={500}
                >
                    {result.map((item, index) =>
                        <div key={index} className='product-mobile' style={item.sale_stock_number === item.buy_number ? { opacity: '0.5' } : { opacity: '1' }}>
                            <Link to={`/detail?id=${item.product_id}&name=${item.name}&index=${index}`}>
                                <img src={item.img_url_mob} alt={item.name} />
                                <span className='recomend-detail'>Xem chi tiết</span>
                            </Link>
                            <p className='price-fls'>{item.final_price.toLocaleString()}đ</p>
                            <span className='promo-fls'>-{item.promotion_percent}%</span>
                            <p className='total-products-fls'><span style={{ width: item.stock_percent + '%' }} className='total-quantity-sold'></span><span className='status-moment'>{item.stock_description}</span><img className='img-sale' style={item.stock_description === "Sắp hết" ? { display: 'block' } : { display: 'none' }} src='https://media3.scdn.vn/img3/2019/1_16/vE4Gfx.png' alt='icon-sale' /></p>
                            <img className='clear-all' src='https://media3.scdn.vn/img2/2018/8_6/CET2Q5.png' alt='Hết hàng' style={item.sale_stock_number === item.buy_number ? { display: 'block' } : { display: 'none' }} />
                        </div>
                    )}
                </Carousel>

            </div >
            // style={{maxWidth : item.sale_stock_number +'%'}}
            // check witdh của thẻ span trong total products flash sale , important
            //  style={item.stock_number - item.buy_number <= 50? {background : '#fd7e14'} : {background : '#FF7F50'}}
            // check khi sản phẩm gần hết
            //<i style={item.sale_stock_number - item.buy_number <=10? {display : 'flex'} : {display : 'none'}} className="fab fa-gripfire icon-warning"></i>

        )
    }
}
// need to check css total-products-fls
// check func flash sale time

const mapStateToProps = state => ({
    typesHome: state.typesHome
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashDealWidget);