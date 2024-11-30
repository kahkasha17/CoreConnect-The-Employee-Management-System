import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
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
import Help from "../../Common/Help";
import Job from "../../Common/Job";
import Payroll from "../../Common/Payroll";
import AttendanceandLeave from "../../Common/AttendanceandLeave";
import Employess from "../../Common/Employess";
import Footers from "../../../Components/Footers";

const DashboardContent = ({ isSidebarOpen }) => {
  // Map of routes to header titles
  const headerTitles = {
    "/ManagerDashboard": "Dashboard",
    "/profile": "Profile",
    "/payroll": "Payroll",
    "/attendance": "Attendance & Leaves",
    "/authentication/sign-up": "Sign Up",
    "/Employess": "Employees",
    "/job": "Job",
    "/help": "Help",
  };

  const location = useLocation();

  return (
    <>
      {/* Header */}
      <div className={`p-5 ${isSidebarOpen ? "ml-80" : "ml-20"}`}>
        <h1 className="text-lg font-bold mb-6">
          {headerTitles[location.pathname] || "Dashboard"}
        </h1>
      </div>

      {/* Routes */}
      <div className={`p-4 ${isSidebarOpen ? "ml-80" : "ml-0"}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/ManagerDashboard" />} />
          <Route path="/ManagerDashboard" element={<MainContent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/attendance" element={<AttendanceandLeave />} />
          <Route path="/help" element={<Help />} />
          <Route path="/job" element={<Job />} />
          <Route path="/Employess" element={<Employess />} />
        </Routes>
      </div>
    </>
  );
};

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
          label: "Employess",
          href: "/Employess",
          icon: HiClipboard,
        },
        {
          label: "Job",
          href: "/job",
          icon: HiBriefcase,
        },
        {
          label: "Help",
          href: "/help",
          icon: HiInformationCircle,
        },
      ],
    },
  ];

  return (
    <Router>
      <div  className="flex relative bg-gradient-to-r from-cyan-100 to-blue-250">
        {/* Sidebar */}
        <SideDrawer
          menuItems={menuData}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

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
          <DashboardContent isSidebarOpen={isSidebarOpen} />
        </div>
      </div>

      {/* Footer */}
      <div
        className={`p-0 transition-all duration-300 ${
          isSidebarOpen && window.innerWidth >= 768 ? "ml-80" : "ml-0"
        } ${window.innerWidth < 768 && isSidebarOpen ? "hidden" : "block"}`}
      >
        <Footers />
      </div>
    </Router>
  );
};

export default ManagerDashboard;
