import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SideDrawer } from "../../../Components/SideDrawer";
import {
  HiBriefcase,
  HiCalendar,
  HiChartPie,
  HiClipboard,
  HiCurrencyRupee,
  HiInformationCircle,
  HiLogout,
  HiUser,
} from "react-icons/hi";
import MainContent from "./MainContent";
import Profile from "../../Common/Profile";
import Payroll from "../../Common/Payroll";
import AttendanceandLeave from "../../Common/AttendanceandLeave";

export const EmployeeDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuData = [
    {
      items: [
        { label: "Dashboard", href: "/dashboard", icon: HiChartPie },
        { label: "Profile", href: "/profile", icon: HiUser },
        { label: "Payroll", href: "/payroll", icon: HiCurrencyRupee },
        { label: "Attendance & Leaves", href: "/attendance", icon: HiCalendar },
        { label: "Sign up", href: "/authentication/sign-up", icon: HiLogout },
      ],
    },
    {
      items: [
        {
          label: "Task",
          href: "https://github.com/themesberg/flowbite-react/",
          icon: HiClipboard,
        },
        {
          label: "Job",
          href: "https://flowbite-react.com/",
          icon: HiBriefcase,
        },
        {
          label: "Help",
          href: "https://github.com/themesberg/flowbite-react/issues",
          icon: HiInformationCircle,
        },
      ],
    },
  ];

  return (
    <Router>
      <div className="flex relative bg-sky-50">
        <SideDrawer
          menuItems={menuData}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        {/* Header */}
        <div className="flex-1 transition-all duration-300 flex flex-col">
          <div className={`p-5 ${isSidebarOpen ? "ml-80" : "ml-20"}`}>
            <h1 className="text-lg font-bold mb-6">Dashboard</h1>
          </div>
          {/* Main Content */}

          <div className={`p-4 ${isSidebarOpen ? "ml-80" : "ml-0"}`}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<MainContent />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/attendance" element={<AttendanceandLeave />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};
