import { connect } from 'dva';
import { MaqiPagination } from '@/pages/orders/components';

const mapStateToProps = ({ orders, loading }) => ({
    tableData: orders.tableData,
    pageSize: orders.limit,
    nowPage: orders.nowPage,
    previous: orders.previous,
    next: orders.next,
    loading: loading.models["orders"],
})
const mapDispatchToProps = (dispatch) => ({
    getTableData: () => dispatch({
        type: 'orders/setTableData_e'
    }),
    previousPage: () => dispatch({
        type: 'orders/previousPage_e'
    }),
    nextPage: () => dispatch({
        type: 'orders/nextPage_e'
    }),
    setLimit: (value) => dispatch({
        type: 'orders/setLimit_r',
        payload: value,
    }),
})
@connect(mapStateToProps, mapDispatchToProps)
export default class OrdersPagination extends React.Component {
    render() {
        const { pageSize, nowPage, previous, next, getTableData, previousPage, nextPage, setLimit } = this.props;
        return (
            <MaqiPagination
                showSizeDefault={pageSize}
                showSizeSelect={[5, 10, 15, 20]}
                onShowSizeChange={
                    (value) => {
                        setLimit(value);
                        getTableData();
                    }
                }
                nowPage={nowPage}
                previousPage={previousPage}
                nextPage={nextPage}
                previousDisabled={previous === ''}
                nextDisabled={next === ''}
            />
        )
    }
}
