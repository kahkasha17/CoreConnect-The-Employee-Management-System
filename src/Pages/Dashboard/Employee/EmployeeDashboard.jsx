import React, { useState } from "react";
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
import { MainContent } from "./MainContent";

export const EmployeeDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
        { label: "Task", href: "https://github.com/themesberg/flowbite-react/", icon: HiClipboard },
        { label: "Job", href: "https://flowbite-react.com/", icon: HiBriefcase },
        { label: "Help", href: "https://github.com/themesberg/flowbite-react/issues", icon: HiInformationCircle },
      ],
    },
  ];

  return (
    <div className="h-screen flex overflow-hidden relative bg-sky-50">
      {/* Sidebar */}
      <SideDrawer menuItems={menuData} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-80" : "ml-20" // Increased margin-left when sidebar is open
        } p-4`}
      >
        <MainContent/>
      </div>
    </div>
  );
};
