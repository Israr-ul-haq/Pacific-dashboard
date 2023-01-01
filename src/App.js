import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Sidebar from './Sidebar/Sidebar.jsx';
import Layout from './Layout';
import Dashboard from './dashboard/Dashboard';
import User from './manage/User';
import Lesson from './manage/Lesson';
import Therapist from './manage/Therapist';
import Manager from './manage/Manager';
import Payment from './manage/Payment';
import AddTherapist from './component/Add_Therapist';
import AddCaseManager from './component/Add_CaseManager';
import CaseManagerDetails from './component/Case_ManagerDetails';
import CaseManagerDetailsss from './component/CaseManagerDetailsss';
import ViewLesson from './component/ViewLesson';
import UserDetail from './component/UserDetail';
import AddLessons from './component/Add_Lessons';
import EditLessons from './component/Edit_Lessons';
import EditUser from './component/Edit_User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>}></Route>
        <Route path="/manage-user" element={<Layout><User /> </Layout>}></Route>
        <Route path="/manage-lesson" element={<Layout><Lesson /></Layout>}></Route>
        <Route path="/manage-therapist" element={<Layout><Therapist /></Layout>}></Route>
        <Route path="/manage-case-manager" element={<Layout><Manager /></Layout>}></Route>
        <Route path="/manage-payment" element={<Layout><Payment /> </Layout>}></Route>
        <Route path="/add-therapist" element={<Layout><AddTherapist /></Layout>}></Route>
        <Route path="/add-case-manager" element={<Layout><AddCaseManager /> </Layout>}></Route>
        <Route path="/case-manager-details" element={<Layout><CaseManagerDetails /> </Layout>}></Route>
        <Route path="/case-manager-detailsss" element={<Layout><CaseManagerDetailsss /></Layout>}></Route>
        <Route path="/viewlesson" element={<Layout><ViewLesson /></Layout>}></Route>
        <Route path="/user-detail" element={<Layout><UserDetail /></Layout>}></Route>
        <Route path="/add-lessons" element={<Layout><AddLessons/></Layout>}></Route>
        <Route path="/edit-lessons" element={<Layout><EditLessons/></Layout>}></Route>
        <Route path="/edit-user" element={<Layout><EditUser/></Layout>}></Route>
      </Routes>
    </div>
  );
}

export default App;