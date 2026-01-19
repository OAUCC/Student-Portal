import React from "react";

const HallRecords = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md px-6 py-4 flex justify-center items-center">
      <img
          src="/Student-Portal/admin/src/assets/images/Oau_logo.png"
          alt=""
          className="h-12 w-auto"
        />
        <div>
          <h1 className="text-xl font-semibold">Obafemi Awolowo University</h1>
          <p className="text-sm text-left text-gray-500">Hostel Management Portal</p>
        </div>
      </header>

      {/* Main Content */}
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
              <li className="p-4 hover:bg-gray-200">
                <a href="#bedspace" className="flex items-center">
                  <span className="ml-4">Bedspace Allocation</span>
                </a>
              </li>
              <li className="p-4 bg-gray-200">
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

        {/* Main Section */}
        <main className="flex-1 p-6">
          {/* Filters */}
          <div className="mb-6">
            <select
              className="w-full mb-4 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Angola Hall">Angola Hall</option>
              <option value="Mozambique Hall">Mozambique Hall</option>
              <option value="Awolowo Hall">Awolowo Hall</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <select
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Block A">Block A</option>
                <option value="Block B">Block B</option>
              </select>
              <select
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Room 1">Room 1</option>
                <option value="Room 2">Room 2</option>
              </select>
            </div>
          </div>

           {/* Table */}
           <div className="overflow-auto bg-white shadow rounded-lg">
            <table className="table-auto w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Room</th>
                  <th className="px-4 py-2">Bed</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Occupant</th>
                  <th className="px-4 py-2">Condition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">A1</td>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">
                    <select className="border-none bg-transparent focus:ring-2 focus:ring-blue-500 rounded">
                      <option value="Occupied">Occupied</option>
                      <option value="Unoccupied">Unoccupied</option>
                      <option value="Reserved">Reserved</option>
                    </select>
                  </td>
                  <td className="px-4 py-2">EEG/2018/094</td>
                  <td className="px-4 py-2">
                    <select className="border-none bg-transparent focus:ring-2 focus:ring-blue-500 rounded">
                      <option value="Good">Good</option>
                      <option value="Faulty">Faulty</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">A1</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">
                    <select className="border-none bg-transparent focus:ring-2 focus:ring-blue-500 rounded">
                      <option value="Occupied">Occupied</option>
                      <option value="Unoccupied">Unoccupied</option>
                      <option value="Reserved">Reserved</option>
                    </select>
                  </td>
                  <td className="px-4 py-2">NIL</td>
                  <td className="px-4 py-2">
                    <select className="border-none bg-transparent focus:ring-2 focus:ring-blue-500 rounded">
                      <option value="Good">Good</option>
                      <option value="Faulty">Faulty</option>
                    </select>
                  </td>
                </tr>
                {/* Add more rows as necessary */}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HallRecords;
