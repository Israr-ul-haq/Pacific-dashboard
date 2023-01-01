import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="Dashboard">
            <div class="sidenav">
                <div className="sidebar-container">
                    <div className="sidebar-img">
                        <img src="/assets/images/Dashboard/Pacific Shores Logo MASTER HIGH DEF.png" alt="" />
                    </div>
                    <div className="sidebar-icons">
                        <Link className="Color-icon" to="/dashboard/"><img src="/assets/images/Dashboard/Dashboard Icon.svg" alt="" /></Link>
                        <Link to="/manage-user"><img src="/assets/images/Dashboard/User List.svg" alt="" /></Link>
                        <Link to="/manage-lesson"><img src="/assets/images/Dashboard/Lessons.svg" alt="" /></Link>
                        <Link to="/manage-therapist"><img src="/assets/images/Dashboard/Therapist.svg" alt="" /></Link>
                        <Link to="/manage-case-manager"><img src="/assets/images/Dashboard/Case manager.svg" alt="" /></Link>
                        <Link className="manage-payments" to="/manage-payment"><img src="/assets/images/Dashboard/manage payments.svg" alt="" /></Link>
                    </div>
                </div>
            </div>
            <div className="side_dashboard_container">
                <div className="Main_dash_icon">
                    <div><img src="/assets/images/Dashboard/search.png" alt="" /></div>
                    <div className="align"><img src="/assets/images/Dashboard/notifications.png" alt="" />
                        <img className="profile" src="/assets/images/Dashboard/Profile.png" alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;