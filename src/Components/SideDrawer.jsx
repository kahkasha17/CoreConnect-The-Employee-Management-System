"use client";

import { Avatar, Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import React from "react";

export const SideDrawer = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {!isOpen && (
        <Button gradientDuoTone="info"
          className="absolute top-4 left-4 z-10 "
          onClick={() => setIsOpen(true)}
        >
          <span className="text-xl">☰</span>
        </Button>
      )}
      <Drawer backdrop={false} open={isOpen} onClose={handleClose}>
        <Drawer.Header titleIcon={() => <></>} />
        <div className="flex flex-col items-center ">
          <Avatar img="/Logo.png" rounded size="xl" />
          <div className="text-center font-medium dark:text-white">
            <div>Jese Leos</div>
          </div>
        </div>

        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3  ">
                  <TextInput
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                    className="rounded-full px-4 py-2"
                  />
                </form>
                <Sidebar.Items>
                  {menuItems.map((group, index) => (
                    <Sidebar.ItemGroup key={index}>
                      {group.items.map((item) => (
                        <Sidebar.Item
                          key={item.label}
                          href={item.href}
                          icon={item.icon}
                        >
                          {item.label}
                        </Sidebar.Item>
                      ))}
                    </Sidebar.ItemGroup>
                  ))}
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};
