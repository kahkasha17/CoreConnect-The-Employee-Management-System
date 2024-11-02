"use client";

import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
    HiCalendar,
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiCurrencyRupee,
  HiInformationCircle,
  HiLogin,
  HiLogout,
  HiMenu,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUser,
  HiUsers,
} from "react-icons/hi";

import React from "react";

export const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {!isOpen && (
        <Button
          className="absolute top-4 left-4"
          onClick={() => setIsOpen(true)}
        >
          <HiMenu className="text-xl" />
        </Button>
      )}
      <Drawer backdrop={false} open={isOpen} onClose={handleClose}>
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={HiChartPie}>
                      Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="#"
                      icon={HiUser}
                    >
                      Profile
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiCurrencyRupee}>
                      Payroll
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiCalendar}>
                    Attendance & Leaves
                    </Sidebar.Item>
                     <Sidebar.Item
                      href="/authentication/sign-up"
                      icon={HiLogout}
                    >
                      Sign up
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item
                      href="https://github.com/themesberg/flowbite-react/"
                      icon={HiClipboard}
                    >
                      Document
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="https://flowbite-react.com/"
                      icon={HiCollection}
                    >
                      Benefit
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="https://github.com/themesberg/flowbite-react/issues"
                      icon={HiInformationCircle}
                    >
                      Help
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};
