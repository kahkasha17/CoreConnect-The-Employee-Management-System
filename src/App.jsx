import './App.css'
import React from 'react'
import Main from './Pages/Main'
import { EmployeeDashboard } from './Pages/Dashboard/Employee/EmployeeDashboard'

const App = () => {
  return (
    <>
   {/* <Navbar
  menuItems={[
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" }
  ]}
/> */}
{/* <Main/> */}
<EmployeeDashboard/>
   </>
  )
}

export default App
