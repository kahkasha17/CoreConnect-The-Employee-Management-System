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
import  MainContent  from "./MainContent";

const AdminDashboard = () => {const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuData = [
    {
      items: [
        { label: "Dashboard", href: "/", icon: HiChartPie },
        { label: "Profile", href: "/", icon: HiUser },
        { label: "Payroll", href: "#", icon: HiCurrencyRupee },
        { label: "Attendance & Leaves", href: "#", icon: HiCalendar },
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
    <>
      <div className="flex relative bg-sky-50">
        <SideDrawer
          menuItems={menuData}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        {/* Main Container */}
        <div className="flex-1 transition-all duration-300 flex flex-col">
          <div className={`p-4 ${isSidebarOpen ? "ml-80" : "ml-20"}`}>
            <h1 className="text-lg font-bold">Dashboard</h1>
          </div>

          <div
            className={`p-4 transition-all duration-300 ${
              isSidebarOpen ? "ml-80" : "ml-0"
            }`}
          >
            <MainContent/>
          </div>
        </div>
      </div>
    </>
  );

}

export default AdminDashboard
