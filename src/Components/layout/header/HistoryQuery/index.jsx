import React from 'react'
import DetailQuery from './DetailQuery'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getProducts } from '../../../../actions'
import './index.scss'
class HistoryQuery extends React.Component {
    render() {

        return (
            <table >
                <tbody>
                    {this.props.historyQuery.map((item, index) =>
                        <tr key={index}>
                            <td>
                                <DetailQuery detailQuery={item} index={index} key={index} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

const mapsStateToProps = state => ({
    historyQuery: state.historyQuery,
    isFocus: state.isFocus
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProducts }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(HistoryQuery);