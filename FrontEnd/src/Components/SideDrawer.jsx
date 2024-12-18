import { Button, Drawer, Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import SearchBar from "./SearchBar"
export const SideDrawer = ({ menuItems, isOpen, setIsOpen }) => {
  const [hasInitialized, setHasInitialized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (!hasInitialized) {
        setIsOpen(window.innerWidth >= 768); // Open by default on desktop
        setHasInitialized(true);
      }
    };

    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize); // Listen for screen resize

    return () => window.removeEventListener("resize", handleResize);
  }, [hasInitialized, setIsOpen]);

  return (
    <>
      {/* Toggle Button */}
      <Button
        gradientMonochrome="cyan"
        className={`absolute top-4 left-4 z-10 ${
          isOpen ? "hidden" : "block"
        }`} // Show button only when sidebar is closed
        onClick={() => setIsOpen(true)} // Open the sidebar
      >
        <span className="text-xl">☰</span>
      </Button>

      {/* Sidebar Drawer */}
      <Drawer
        className="bg-gradient-to-r from-cyan-200 to-blue-300"
        backdrop={false}
        open={isOpen}
        onClose={() => setIsOpen(false)} // Close the sidebar
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
                          icon={item.icon}
                          onClick={() => {
                            navigate(item.href); // Navigate programmatically
                            if (window.innerWidth < 768) setIsOpen(false); // Close only on mobile
                          }}
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