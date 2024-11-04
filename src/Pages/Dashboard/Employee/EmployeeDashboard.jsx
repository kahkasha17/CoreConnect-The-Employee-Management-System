import React from 'react'
import { SideDrawer } from '../../../Components/SideDrawer'
import {
  HiBriefcase,
  HiCalendar,
  HiChartPie,
  HiClipboard,
  HiCurrencyRupee,
  HiInformationCircle,
  HiLogout,
  HiMenu,
  HiSearch,
  HiUser,
} from "react-icons/hi";


export const EmployeeDashboard = () => {

  
// Usage example:
const menuData = [
  {
    items: [
      { label: "Dashboard", href: "/", icon: HiChartPie },
      { label: "Profile", href: "#", icon: HiUser },
      { label: "Payroll", href: "#", icon: HiCurrencyRupee },
      { label: "Attendance & Leaves", href: "#", icon: HiCalendar },
      { label: "Sign up", href: "/authentication/sign-up", icon: HiLogout },
    ],
  },
  {
    items: [
      { label: "Document", href: "https://github.com/themesberg/flowbite-react/", icon: HiClipboard },
      { label: "Job", href: "https://flowbite-react.com/", icon: HiBriefcase },
      { label: "Help", href: "https://github.com/themesberg/flowbite-react/issues", icon: HiInformationCircle },
    ],
  },
];

// Render SideDrawer with menuData
  return (
    <SideDrawer menuItems={menuData}/>
  )
}
