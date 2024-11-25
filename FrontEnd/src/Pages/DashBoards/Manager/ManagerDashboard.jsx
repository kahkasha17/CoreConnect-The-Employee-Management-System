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
import Footers from "../../../Components/Footers";

export const ManagerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuData = [
    {
      items: [
        { label: "Dashboard", href: "/ManagerDashboard", icon: HiChartPie },
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
        {/* Sidebar */}
        <SideDrawer
          menuItems={menuData}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        {/* Backdrop for Mobile View */}
        {isSidebarOpen && window.innerWidth < 768 && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
            onClick={() => setIsSidebarOpen(false)} // Close sidebar when backdrop is clicked
          ></div>
        )}

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 flex flex-col ${
            isSidebarOpen && window.innerWidth < 768 ? "hidden" : "block"
          }`}
        >
          {/* Header */}
          <div className={`p-5 ${isSidebarOpen ? "ml-80" : "ml-20"}`}>
            <h1 className="text-lg font-bold mb-6">Dashboard</h1>
          </div>

          {/* Routes */}
          <div className={`p-4 ${isSidebarOpen ? "ml-80" : "ml-0"}`}>
          <Routes>
              <Route path="/" element={<Navigate to="/ManagerDashboard" />} />
              <Route path="/ManagerDashboard" element={<MainContent />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/attendance" element={<AttendanceandLeave />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
  className={`p-0 transition-all duration-300 ${
    isSidebarOpen && window.innerWidth >= 768 ? "ml-80" : "ml-0" // Add margin-left when sidebar is open (desktop view)
  } ${window.innerWidth < 768 && isSidebarOpen ? "hidden" : "block"}`} // Hide footer on mobile when sidebar is open
>
  <Footers />
</div>


        
    </Router>
  );
};
export default ManagerDashboard;
