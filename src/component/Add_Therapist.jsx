const Add_Therapist = () => {
    return (
        <div className="mainDashboard side_dashboard_container">
            <div className="row">
                <div className="col-md-12">
                    <div className="dashboardHeading arrowbefore">
                        <img src="/assets/images/Icon ionic-ios-arrow-back.svg" alt="" />
                        <h2>Add Therapist</h2>
                    </div>
                </div>
            </div>
            <div className="users-table set3">
                <div className="users-table-container">
                    <div className="user-table-head">
                        <div className="userHeading">
                            <h2>Therapist Details</h2>
                        </div>
                    </div>

                    <form className="form-login set2">
                        <div className="therapist_category">
                            <input type="text" name="uname" placeholder="Therapist Name" />
                        </div>
                        <div className="therapist_name">
                            <input type="text" name="uname" placeholder="Therapist Category" />
                        </div>
                        <div className="therapist_category">
                            <input type="text" name="uname" placeholder="Experiences" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="buttonSet">
                <a className="bttn setb" href="">Cancel</a>
                <a className="bttn bttn-bg" href="">Save</a>
            </div>
        </div>
    );
}

export default Add_Therapist;