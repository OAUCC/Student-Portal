import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

// Sidebar Link Component
const SidebarLink = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li
      className={`p-4 rounded-lg ${
        isActive ? "bg-gray-200 font-bold" : "hover:bg-gray-100"
      }`}
    >
      <Link to={to} className="flex items-center">
        <span className="material-icons">{icon}</span>
        <span className="ml-4">{label}</span>
      </Link>
    </li>
  );
};

const Home = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-center items-center">
        <div className="flex items-center gap-4">
          <img
            src="/Student-Portal/admin/public/Oau_logo.png"
            alt=""
            className="h-12 w-12 object-cover"
          />
          <div>
            <h1 className="text-xl font-semibold">
              Obafemi Awolowo University
            </h1>
            <p className="text-sm text-left text-gray-500">Hostel Management Portal</p>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
          <nav>
            <ul>
              <SidebarLink to="/dashboard" label="Dashboard" />
              <SidebarLink
                to="/allocation"
                label="Bedspace Allocation"
              />
              <SidebarLink
                to="/records"
                label="Hall Records"
              />
              <SidebarLink
                to="/student"
                label="Student Records"
              />
              <SidebarLink
                to="/admins"
                label="Admins"
              />
              <SidebarLink to="/activity" label="Activity" />
              <SidebarLink to="/logout" label="Logout" />
            </ul>
          </nav>
          <footer className="text-center text-sm text-gray-500">
            &copy; 2024 Obafemi Awolowo University
          </footer>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Outlet />
          <div>
            <h2 className="text-xl font-bold justify-center">Welcome to the Admin Portal</h2>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
