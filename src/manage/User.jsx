import DataTable from 'react-data-table-component';

const User = () => {
    
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
                ,paddingBottom : '20px'
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
            name: 'User ID',
            button: true,
            cell: (row) => (
                <div>
                    <div className='user-item flexing'>
                        <img src="/assets/images/user_image.png" alt="" />
                        <span>{row.user}</span>
                    </div>
                </div>
            ),
            width: "200px"
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
        },
        {
            name: 'Case Manager',
            selector: row => row.case,
        },
        {
            name: 'Therapist',
            selector: row => row.therapist,
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
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 2,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 3,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 4,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 5,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 6,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 7,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 8,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 9,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 9,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 9,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 9,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 9,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
        {
            id: 9,
            user: 'Beetlejuice',
            email: 'francescametts@gmail.com',
            phone: '(209)321-3039',
            case: 'Matthew Ellis',
            therapist: 'Kyle Gordon'
        },
    ]

    return (
        <div className="dashboard-user side_dashboard_container">
            <div className="row">
                <div className="col-md-12">
                    <div className="dashboardHeading">
                        <h2>Manage Users</h2>
                    </div>
                </div>
            </div>
            <div className="users-table">
                <div className="users-table-container">
                    <div className="user-table-head">
                        <div className="userHeading">
                            <h2>Users Lists</h2>
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

export default User;