import React from 'react'
import {
  BrowserRouter as
    Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

//
import Login from "./pase/login"
import Home from "./pase/home"

import Work from "./pase/workbench"
import Work1 from "./pase/workbench/index/index"
import Notice from "./pase/workbench/notice"
import Task from "./pase/workbench/task"
import Schedule from "./pase/workbench/schedule"
import Journal from "./pase/workbench/journal"
import Examine from "./pase/workbench/examine"
import AddressBook from "./pase/workbench/addressBook"

import Crm from "./pase/crm"
import Ko from "./pase/ko"
import Second from "./pase/second"

import "./App.css"




// 未登录时返回登录页面
export default function App () {
  function Auth (props) {
    let isLogin = sessionStorage.getItem("authKey")
    if (!isLogin) {
      return <Navigate to="/login" />
    }
    return (
      <>{props.children}</>
    )
  }
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth><Home /></Auth>}>

          <Route index element={<Navigate to="/workbench" />} />

          <Route path="workbench" element={<Work />} >
            <Route index element={<Navigate to="/workbench/index" />} />
            <Route path="index" element={<Work1 />} />
            <Route path="Notice" element={<Notice />} />
            <Route path="task" element={<Task />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="journal" element={<Journal />} />
            <Route path="examine" element={<Examine />} />
            <Route path="addressBook" element={<AddressBook />} />

          </Route>

          <Route path="crm" element={<Crm />} />
          <Route path="ko" element={<Ko />} />
          <Route path="second" element={<Second />} />

        </Route>
      </Routes>
    </Router>
  )
}