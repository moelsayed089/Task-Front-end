import { Menu, Text } from "lucide-react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";

const sidebarItems = [{ icon: Text, label: "Posts", to: "/posts" }];

const Sidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const Sidebar = (
    <div className="w-64 bg-white dark:bg-black/95 shadow-sm border-r  flex flex-col h-full">
      <div className="py-6 border-b flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"></div>
          <span className="text-lg tracking-wide font-semibold dark:text-white text-gray-800">
            Dashboard System
          </span>
        </div>
      </div>

      <nav className="mt-6 flex-1 overflow-y-auto">
        {sidebarItems.map((item, index) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={index}
              to={item.to}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center space-x-3 px-6 py-3 transition-colors duration-200 rounded-r-full ${
                isActive
                  ? "bg-gray-900 dark:bg-gray-800 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 flex items-center justify-between border-t dark:text-white text-xs text-gray-500">
        Dashboard v1.0
        <ModeToggle />
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-black/95">
      <div
        className={`fixed inset-0 bg-black/30 bg-opacity-40 z-40 md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      />

      <div
        className={`fixed z-50 md:static h-full transition-transform duration-300 md:translate-x-0 bg-white ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {Sidebar}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="md:hidden flex items-center justify-between p-4 md:p-8 border-b border-gray-200">
          <button onClick={toggleSidebar}>
            <Menu className="w-6 h-6 dark:text-white text-gray-700 hover:cursor-pointer" />
          </button>
          <span className="text-lg tracking-wide font-semibold dark:text-white text-gray-800">
            Dashboard System
          </span>
        </div>

        <div className="p-4 md:p-8 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
