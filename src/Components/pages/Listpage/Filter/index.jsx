import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterProduct, getMinPrice, getMaxPrice, getProducts, getProductsFail } from '../../../../actions'
import { Link } from 'react-router-dom'
import './index.scss'

class Filter extends React.Component {
    state = {
        query: '',
        queryDefault: '',
        minPriceDefault: 0,
        maxPriceDefault: 0,
        errMgsFilter: 0,
    }

    minPrice = (event) => {
        const minPriceChange = event.target.value
        this.props.getMinPrice(minPriceChange * 1)
        this.setState({ ...this.state, minPriceDefault: minPriceChange })
    }
    maxPrice = (event) => {
        let maxPriceChange = event.target.value
        this.props.getMaxPrice(maxPriceChange * 1)
        this.setState({ ...this.state, maxPriceDefault: maxPriceChange })
    }
    handleChangeQuery = (event) => {
        const queryDefault = event.target.value
        this.setState({ ...this.state, queryDefault: queryDefault, query: queryDefault })
    }
    handleSearchByPrice = () => {
        if (this.state.queryDefault.length === 0) {
            this.props.getProductsFail('bạn chưa nhập đầy đủ thông tin !', this.props.errMsgTopInput)
        }
        if (this.state.minPriceDefault === 0) {
            this.props.getProductsFail('bạn chưa nhập đầy đủ thông tin ! ', this.props.errMsgTopInput)
        }
        if (this.state.maxPriceDefault === 0) {
            this.props.getProductsFail('bạn chưa nhập đầy đủ thông tin !', this.props.errMsgTopInput)
        }
        if (this.state.queryDefault.length !== 0 && this.state.minPriceDefault !== 0 && this.state.maxPriceDefault !== 0) {
            this.props.getProducts(this.state.query, 1, true, false, true)
            this.setState({ ...this.state, queryDefault: '', maxPriceDefault: 0, minPriceDefault: 0 })
        }
    }
    handleChangeFilter = (event) => {
        let value = event.target.value
        this.props.filterProduct(value)

    }
    render() {
        return (
            <div className='the-filter'>
                <form className='search-product-by-price' onSubmit={() => <Link to='/reactCv-shopping/list'>{this.handleSearchByPrice()}</Link>}>
                    <div className='input-filter'>
                        <input type="text" placeholder='sản phẩm theo giá' onChange={this.handleChangeQuery} value={this.state.queryDefault} required />

                    </div>

                    <div className='input-min-price'>
                        <input type="number" min='0' placeholder='Từ' onChange={this.minPrice} value={this.state.minPriceDefault} />
                    </div>
                    <div className='input-max-price'>
                        <input type="number" min='0' placeholder='Đến' onChange={this.maxPrice} value={this.state.maxPriceDefault} />
                    </div>
                    <div className='btn-submit-form'>
                        <Link to='/reactCv-shopping/list'><button onClick={this.handleSearchByPrice}>Tìm kiếm</button></Link>
                    </div>
                </form>

                <div className='select-filter' >
                    <div>
                        <select onChange={this.handleChangeFilter} value={this.props.valueFilter}>
                            <option value='default-filter'>Sắp xếp theo </option>
                            <option value='lowToHigh'>Giá thấp đến cao</option>
                            <option value='highToLow'>Giá cao đến thấp</option>
                            <option value="lowToHighRating">0 sao trở lên</option>
                            <option value="highToLowRating">5 sao trở xuống</option>
                            <option value="mostBuy">Mua nhiều nhất</option>
                        </select>
                    </div>
                </div>
                <div className='err-mess-filter'>
                    <p>{this.props.errMsg}</p>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    page: state.page,
    query: state.query,
    isFilter: state.isFilter,
    status: state.status,
    errMsg: state.errMsg,
    value: state.value,
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    selected: state.selected,
    valueFilter: state.valueFilter,
    errMsgTopInput: state.errMsgTopInput
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ filterProduct, getMinPrice, getMaxPrice, getProducts, getProductsFail }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);