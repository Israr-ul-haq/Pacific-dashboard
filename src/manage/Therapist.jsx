import DataTable from 'react-data-table-component';

const Therapist = () => {

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
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Experince',
            selector: row => row.experince,
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
            name: 'Name 1',
            email: 'johns methew@gmail.com',
            experince: '02 Years'
        },
        {
            id: 2,
            name: 'Name 1',
            email: 'johns methew@gmail.com',
            experince: '02 Years'
        },
        {
            id: 3,
            name: 'Name 1',
            email: 'johns methew@gmail.com',
            experince: '02 Years'
        },
        {
            id: 4,
            name: 'Name 1',
            email: 'johns methew@gmail.com',
            experince: '02 Years'
        },
        {
            id: 5,
            name: 'Name 1',
            email: 'johns methew@gmail.com',
            experince: '02 Years'
        }
    ]


    return (
        <div className="dashboard-user side_dashboard_container">
            <div className="row">
                <div className="col-md-12">
                    <div className="dashboardHeading setting">
                        <h2>Manage Therapist</h2>
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
                            <h2>Therapist List</h2>
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

export default Therapist;