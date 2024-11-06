"use client";

import { Button, Drawer, Sidebar } from "flowbite-react";
import { useState, useEffect } from "react";
import React from "react";
import { UserAvatar } from "./UserAvatar";
import { SearchBar } from "./SearchBar";

export const SideDrawer = ({ menuItems, isOpen, setIsOpen }) => {
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (!hasInitialized) {
        setIsOpen(window.innerWidth >= 768); // Open on desktop, closed on mobile
        setHasInitialized(true); // Mark as initialized
      } else if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    handleResize(); // Initial check on mount

    window.addEventListener("resize", handleResize); // Listen for screen resize
    return () => window.removeEventListener("resize", handleResize);
  }, [hasInitialized, setIsOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Toggle Button for opening sidebar on mobile */}
      {!isOpen && (
        <Button
          gradientMonochrome="info"
          className="absolute top-4 left-4 z-10"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-xl">☰</span>
        </Button>
      )}
      
      {/* Sidebar Drawer */}
      <Drawer
        className="bg-gradient-to-r from-cyan-500 to-blue-400"
        backdrop={false}
        open={isOpen}
        onClose={handleClose}
      >
        <Drawer.Header titleIcon={() => <></>} />
        <UserAvatar img="/Logo.png" name="Kahkasha Rafat Fatima" />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <SearchBar />
                <Sidebar.Items>
                  {menuItems.map((group, index) => (
                    <Sidebar.ItemGroup key={index}>
                      {group.items.map((item) => (
                        <Sidebar.Item
                          key={item.label}
                          href={item.href}
                          icon={item.icon}
                          onClick={handleClose} // Close sidebar when an item is clicked
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
