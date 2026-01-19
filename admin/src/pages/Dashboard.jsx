import React from "react";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-center items-center">
        <div className="flex items-center gap-4">
          <img
            src="../assets/images/Oau_logo.png"
            alt=""
            className="h-12 w-12 object-cover"
          />
          <div>
            <h1 className="text-xl font-semibold">Obafemi Awolowo University</h1>
            <p className="text-sm text-left text-gray-500">Hostel Management Portal</p>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
          <nav>
            <ul>
              <li className="p-4 hover:bg-gray-200">
                <a href="#dashboard" className="flex items-center">
                  <span className="ml-4">Dashboard</span>
                </a>
              </li>
              <li className="p-4 bg-gray-200">
                <a href="#bedspace" className="flex items-center">
                  <span className="ml-4">Bedspace Allocation</span>
                </a>
              </li>
              <li className="p-4 hover:bg-gray-200">
                <a href="#hall-records" className="flex items-center">
                  <span className="ml-4">Hall Records</span>
                </a>
              </li>
              <li className="p-4 hover:bg-gray-200">
                <a href="#students" className="flex items-center">
                  <span className="ml-4">Student Records</span>
                </a>
              </li>
              <li className="p-4 hover:bg-gray-200">
                <a href="#admins" className="flex items-center">
                  <span className="ml-4">Admins</span>
                </a>
              </li>
              <li className="p-4 hover:bg-gray-200">
                <a href="#activity" className="flex items-center">
                  <span className="ml-4">Activity</span>
                </a>
              </li>
              <li className="p-4 hover:bg-gray-200">
                <a href="#logout" className="flex items-center">
                  <span className="ml-4">Logout</span>
                </a>
              </li>
            </ul>
          </nav>
          <footer className="text-center text-sm text-gray-500">
            &copy; 2024 Obafemi Awolowo University
          </footer>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Dropdown */}
          <div className="mb-6">
            <select
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Angola Hall">Angola Hall</option>
              <option value="Mozambique Hall">Mozambique Hall</option>
              <option value="Awolowo Hall">Awolowo Hall</option>
            </select>
          </div>

          {/* Hall Details */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-lg text-left font-semibold mb-4">Hall of Residence Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Sex:</span>
                <span className="font-medium">Male</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Hall Capacity:</span>
                <span className="font-medium">880</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Blocks:</span>
                <span className="font-medium">11 (A-J)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Hall Warden:</span>
                <span className="font-medium">Meet D. Grahams</span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-auto bg-white shadow rounded-lg">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Block</th>
                  <th className="px-4 py-2">Carrying Capacity</th>
                  <th className="px-4 py-2">Allocated Bedspaces</th>
                  <th className="px-4 py-2">Unallocated Bedspaces</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { block: "A", capacity: 80, allocated: 78, unallocated: 2 },
                  { block: "B", capacity: 80, allocated: 56, unallocated: 24 },
                  { block: "C", capacity: 80, allocated: 80, unallocated: 0 },
                  { block: "D", capacity: 80, allocated: 12, unallocated: 68 },
                  { block: "E", capacity: 80, allocated: 0, unallocated: 80 },
                  { block: "F", capacity: 80, allocated: 60, unallocated: 20 },
                  { block: "H", capacity: 80, allocated: 80, unallocated: 0 },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{row.block}</td>
                    <td className="px-4 py-2">{row.capacity}</td>
                    <td className="px-4 py-2">{row.allocated}</td>
                    <td className="px-4 py-2">{row.unallocated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
