import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// import HomePage from './main/pages/HomePage';
import BlogSection from './main/component/Blogs';
import BlogPage from './main/pages/BlogPage';
import HomePage from './main/pages/Attendence/HomePage';
import UtsavPage from './main/pages/HomePage';
import { Login } from './main/component/LandingPage/Login';
import AdminLoginForm from './admin/component/AdminLoginForm';
import { Sidebar } from './admin/component/Sidebar';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/utsav" element={<UtsavPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/admin/att" element={<AdminLoginForm />} />
          <Route path="/jjig/panel/dashboard" element={<Sidebar />} />

          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
