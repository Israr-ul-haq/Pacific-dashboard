import DataTable from 'react-data-table-component';

const Payment = () => {

    const customStyles = {
        headCells: {
            style: {
                fontSize: '14px',
                fontWeight: '400',
                color: '#B1B1B1',
                backgroundColor: '#07396C'
            },
        },
        cells: {
            style: {
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '400',
                backgroundColor: '#04305D'
                , paddingBottom: '20px'
            },
        },
        headRow: {
            style: {
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '400',
                border: 'none !important',
                // paddingBottom : '15px'
            },
        },
    };
    const columns = [
        {
            name: 'Payment ID',
            selector: row => row.paymentId,
        },
        {
            name: 'Amount',
            selector: row => row.amount,
        },
        {
            name: 'Date',
            selector: row => row.date,
        },
        {
            name: 'Status',
            button: true,
            cell: (row) => (
                <div>
                    <div className='user-item circle'>
                       <p>Canceled</p>
                    </div>
                </div>
            )
        },
        {
            name: 'Action',
            button: true,
            cell: (row) => (
                <div>
                    <div className='user-item'>
                        <img src="/assets/images/More.svg" alt="" />
                    </div>
                </div>
            )
        }
    ];
    const data = [
        {
            id: 1,
            paymentId: '#273237',
            amount: '$ 3544',
            date: '28 April 2021'
        },
        {
            id: 2,
            paymentId: '#273237',
            amount: '$ 3544',
            date: '28 April 2021'
        },
        {
            id: 3,
            paymentId: '#273237',
            amount: '$ 3544',
            date: '28 April 2021'
        },
        {
            id: 4,
            paymentId: '#273237',
            amount: '$ 3544',
            date: '28 April 2021'
        },
        {
            id: 5,
            paymentId: '#273237',
            amount: '$ 3544',
            date: '28 April 2021'
        }
    ]


    return (
        <div className="dashboard-user side_dashboard_container">
            <div className="row">
                <div className="col-md-12">
                    <div className="dashboardHeading setting">
                        <h2>Manage Payment</h2>
                        <div className='btn'>
                            <a href="#">Add</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="users-table">
                <div className="users-table-container">
                    <div className="user-table-head">
                        <div className="userHeading">
                            <h2>Payment Lists</h2>
                        </div>
                        <div className="user-table-filter">
                            <img src="/assets/images/Filter Icon.png" alt="" />
                            <span className="filter">Filter</span>
                        </div>
                    </div>
                    <div className='user-table-body'>
                        <DataTable
                            columns={columns}
                            data={data}
                            selectableRows
                            customStyles={customStyles}
                            pagination
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;