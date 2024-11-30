import './App.css'
import React from 'react'
import Main from './Pages/Main'
import { EmployeeDashboard } from './Pages/DashBoards/Employee/EmployeeDashboard'
import AdminDashboard from './Pages/DashBoards/Admin/AdminDashboard'
import ManagerDashboard from './Pages/DashBoards/Manager/ManagerDashboard'

const App = () => {
  return (
    <>

{/* <Main/> */}
{/* <EmployeeDashboard/>  */}
{/* <AdminDashboard/> */}
<ManagerDashboard/>
   </>
  )
}

export default App
