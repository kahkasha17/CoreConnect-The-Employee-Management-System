import React from "react";
import { SideDrawer } from "../../../Components/SideDrawer";
import Footers from "../../../Components/Footers";
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0"> {/* Use gap-0 to eliminate space between columns */}
      <div className="col p-2 border-red-600 border"> {/* Optional: Adjust padding as needed */}
        <SideDrawer menuItems={menuData}  />
      </div>
      <div className="col p-2 border-red-600 border" >
      <h1 >hello</h1>
      </div>
    </div>

    
  </>
  );
};