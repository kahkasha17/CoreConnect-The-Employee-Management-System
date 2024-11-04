"use client";

import {Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import React from "react";
import { UserAvatar } from "./UserAvatar";
import { SearchBar } from "./SearchBar";

export const SideDrawer = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {!isOpen && (
        <Button gradientMonochrome="info"
          className="absolute top-4 left-4 z-10 "
          onClick={() => setIsOpen(true)}
        >
          <span className="text-xl">☰</span>
        </Button>
      )}
      <Drawer className="bg-gradient-to-r from-cyan-500 to-blue-400"  backdrop={false} open={isOpen} onClose={handleClose}>
        <Drawer.Header titleIcon={() => <></>} />
        <UserAvatar img="/Logo.png" name="Kahkasha Rafat Fatima" />

        <Drawer.Items >
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <SearchBar/>
                <Sidebar.Items >
                  {menuItems.map((group, index) => (
                    <Sidebar.ItemGroup  key={index}>
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
