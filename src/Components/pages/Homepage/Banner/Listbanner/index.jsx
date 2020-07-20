import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Listbanner extends React.Component {
    render() {
        let { itemBanner } = this.props
        let urlBanner
        switch (itemBanner.title) {

            case 'VJSERVICEFEE':
                urlBanner = `https://www.sendo.vn/tien-ich/ve-may-bay/?ref=home_slider_desktop`
                break;

            case 'HA_KitchenMachine_TangLoNuong699K_1307_2207\t':
                urlBanner = `https://www.sendo.vn/su-kien/deal-bep-sale-to-gia-chi-mot-nua/?ref=home_slider_desktop`
                break;

            case 'FA_EventT703_Quý ông lịch lãm':
                urlBanner = `https://www.sendo.vn/su-kien/nguoi-ay-la-anh/?ref=home_slider_desktop`
                break;

            case 'DGS-CHIẾT KHẤU 5%':
                urlBanner = `https://www.sendo.vn/tien-ich/nap-tien/?ref=home_slider_desktop`
                break;

            case 'HL_EventT703_Sắm sửa cuối tháng, deal xịn nhà sang':
                urlBanner = `https://www.sendo.vn/su-kien/sam-sua-cuoi-thang-deal-xin-nha-sang/?ref=home_slider_desktop`
                break;

            case 'EL_EventT702_Mua điện thoại có quà':
                urlBanner = `https://www.sendo.vn/su-kien/de-la-xu-the/?ref=home_slider_desktop`
                break;

            case 'ALL_FlashSale_FA_2007':
                urlBanner = `https://www.sendo.vn/flash-sale/?category_group_id=50210322&ref=home_slider_desktop`
                break;

            case 'FPT SHOP':
                urlBanner = `https://www.sendo.vn/su-kien/cong-nghe-gia-soc/?ref=home_slider_desktop`
                break;

            case 'TKB_EventT0703_Senmart':
                urlBanner = `https://www.sendo.vn/su-kien/senmart/?ref=home_slider_destop`
                break;

            case 'FA_EventT703_nangdaopho':
                urlBanner = `https://www.sendo.vn/su-kien/nang-xuat-chieu-dien-dep/?ref=home_slider_desktop`
                break;

            case 'HB_EventT703_Bí kíp đẹp cùng sao':
                urlBanner = `https://www.sendo.vn/su-kien/lam-dep-cung-sao/?ref=home_slider_desktop`
                break;

            case 'HV_Motorbike_0307_3107':
                urlBanner = `https://www.sendo.vn/su-kien/deal-soc-xe-may/?ref=home_slider_desktop`
                break;

            case 'FA_BRDT07_VREA&EDEN':
                urlBanner = `https://www.sendo.vn/su-kien/vera-eden-chinh-hang-khuyen-mai/?ref=mall_slider_desktop`
                break;

            case 'ƯU ĐÃI VPBANK':
                urlBanner = `https://www.sendo.vn/su-kien/uu-dai-vpbank/?ref=home_slider_desktop`
                break;
            default:
                break;
        }
        return (
            <a href={urlBanner} target="_blank" rel="noopener noreferrer">
                <img src={itemBanner.image} alt ={itemBanner.title}/>
            </a >
        )
    }
}

const mapStateToProps = state => ({
    banner: state.banner
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Listbanner);