import DataTable from 'react-data-table-component';

const Lesson = () => {

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
            name: 'Lesson ID',
            selector: row => row.lessonTitle,
        },
        {
            name: 'Video',
            button: true,
            cell: (row) => (
                <div>
                    <div className='user-item'>
                        <img src="/assets/images/lessons/LessonVideoImage.png" alt="" />
                    </div>
                </div>
            )
        },
        {
            name: 'Video Title',
            selector: row => row.videoTitle,
        },
        {
            name: 'Category',
            selector: row => row.category,
        },
        {
            name: 'Duration',
            selector: row => row.duration,
        },
        {
            name: 'Type',
            button: true,
            cell: (row) => (
                <div>
                    <div className='user-item'>
                        <img src="/assets/images/lessons/fileType.png" alt="" />
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
            lessonTitle: 'Lesson Title',
            videoTitle: 'Healthy Lifestyle Training',
            category: 'Pilates',
            duration: '6:00'
        },
        {
            id: 2,
            lessonTitle: 'Lesson Title',
            videoTitle: 'Healthy Lifestyle Training',
            category: 'Pilates',
            duration: '6:00'
        },
        {
            id: 3,
            lessonTitle: 'Lesson Title',
            videoTitle: 'Healthy Lifestyle Training',
            category: 'Pilates',
            duration: '6:00'
        },
        {
            id: 4,
            lessonTitle: 'Lesson Title',
            videoTitle: 'Healthy Lifestyle Training',
            category: 'Pilates',
            duration: '6:00'
        },
        {
            id: 5,
            lessonTitle: 'Lesson Title',
            videoTitle: 'Healthy Lifestyle Training',
            category: 'Pilates',
            duration: '6:00'
        },
   
    ]


    return (
        <div className="dashboard-user side_dashboard_container">
            <div className="row">
                <div className="col-md-12">
                    <div className="dashboardHeading setting">
                        <h2>Manage Lessons</h2>
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
                            <h2>Lesson Lists</h2>
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

export default Lesson;