const Edit_Lessons = () => {
    return (
        <div className="mainDashboard side_dashboard_container">
            <div className="row">
                <div className="col-md-12">
                    <div className="dashboardHeading arrowbefore">
                        <img src="/assets/images/Icon ionic-ios-arrow-back.svg" alt="" />
                        <h2>Edit Lesson</h2>
                    </div>
                </div>
            </div>
            <div className="users-table set3">
                <div className="users-table-container">
                    <div className="user-table-head">
                        <div className="userHeading">
                            <h2>Lesson Details</h2>
                        </div>
                    </div>

                    <form className="form-login set2 setlesson">
                        <div className="therapist_category">
                            <input type="text" name="uname" placeholder="Lesson No" />
                        </div>
                        <div className="therapist_name setLessonLogo">
                            <input type="text" name="uname" placeholder="Lesson Type" />
                        </div>
                    </form>
                    <div className="lessonDescr">
                        <textarea name="comment" form="usrform" placeholder="Description"></textarea>
                    </div>
                    <div className="user-table-head">
                        <div className="userHeading">
                            <h2>Upload Lesson Detail's</h2>
                        </div>
                    </div>
                    <div className="buttonSet lessonDetailsBtn">
                        <a className="uploadBtn setb" href="">
                            <img src="/assets/images/Upload Video Icon.svg" alt="" /></a>
                        <a className="uploadBtn" href="">
                            <img src="/assets/images/Upload Document.svg" alt="" /></a>
                    </div>

                </div>
            </div>
            <div className="buttonSet">
                <a className="bttn setb" href="">Cancel</a>
                <a className="bttn bttn-bg" href="">Update</a>
            </div>
        </div>
    );
}

export default Edit_Lessons;