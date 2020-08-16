import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Link } from 'react-router-dom'
import { getProducts } from '../../../../actions'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './index.scss'
class LandingWidget extends React.Component {
    searchBySuggest = (event) => {
        this.props.getProducts(event.target.value, 1, true);
    }
    render() {
        let { typesHome } = this.props
        let result = []
        let titleType = ''
        for (let i in typesHome) {
            if (typesHome[i].type === 'LandingWidget') {
                result = typesHome[i].data.list
                titleType = typesHome[i].data.title
            }
        }
        SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
        let breakpoints = {
            576: {
                slidesPerView: 2.45,
                spaceBetween: 50
            },
            768: {
                slidesPerView: 3.23,
                spaceBetween: 50
            },
            992: {
                slidesPerView: 4.3,
                spaceBetween: 50
            },
            1200: {
                spaceBetween: 50,
                slidesPerView: 5.12
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
        return (
            <div className='block-suggest'>
                <div className='title-block-suggest'>
                    <div><h4>{titleType}</h4></div>
                </div>
                <Swiper
                    navigation
                    breakpoints={breakpoints}
                >
                    {result.map((item, index) =>
                        <SwiperSlide key={index}>
                            <div className='suggest' key={index}>
                                <img src={item.image} alt={item.title} />
                                <Link to='/reactCv-shopping/list' className='link-suggest' ><button onClick={this.searchBySuggest} value={item.title}>Xem chi tiết</button></Link>
                                <span>{item.title}</span>
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
                        <div className='suggest' key={index}>
                            <img src={item.image} alt={item.title} />
                            <Link to='/reactCv-shopping/list' className='link-suggest' ><button onClick={this.searchBySuggest} value={item.title}>Xem chi tiết</button></Link>
                            <span>{item.title}</span>
                        </div>
                    )}
                </Carousel>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    typesHome: state.typesHome
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingWidget);