import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
        return (
            <div className='block-suggest'>
                <div className='title-block-suggest'>
                    <div><h4>{titleType}</h4></div>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={5.7}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
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