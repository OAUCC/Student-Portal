import React, { useState } from "react";

const BedspaceAllocation = () => {
  const [activePage, setActivePage] = useState("default");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleInputClick = () => {
  //   setActivePage("custom");
  // };

  const handlePageChange = (page) => {
    setActivePage(activePage === page ? "default" : page);
    setStep(1);
  };

  const handleNextStep = () => {
    // if (step < 3) {
    //   setStep(step + 1);
    // } else {
    //   setIsModalOpen(false);
    //   setStep(1);
    // }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    setStep ((prevStep) => prevStep + 1) 
    }, 2000);
  }

  return (
    <div className="h-fit flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="w-full bg-white border-b-2 border-gray-400 shadow-md px-6 py-4 flex justify-center items-center">
        <img
          src="../assets/images/Oau_logo.png"
          alt=""
          className="h-12 w-auto"
        />
        <div>
          <h1 className="text-xl font-bold">Obafemi Awolowo University</h1>
          <p className="text-l font-semibold text-left">
            Hostel Management Portal
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r-2 border-b-2 border-gray-400 shadow-md p-4 flex flex-col justify-between">
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

        {/* Main Section */}
        <main className="flex-1 p-6">
          {/* Buttons for Page Switching */}
          <div className="mb-6 flex gap-4">
            <button
              onClick={() => handlePageChange("custom") & setIsModalOpen(true)}
              className={`px-4 py-2 rounded-lg shadow-md ${
                activePage === "custom"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
            >
              Custom Allocation
            </button>
            <button
              onClick={() => handlePageChange("bulk")}
              className={`px-4 py-2 rounded-lg shadow-md ${
                activePage === "bulk"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
            >
              Bulk Allocation
            </button>
          </div>

          {activePage === "default" && (
            <div>
              {/*default page content*/}
              <div className="mb-6">
                <div>
                  <div className="mb-6">
                    {/* Hall Dropdown */}
                    <div className="mb-4">
                      <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="Angola Hall">Angola Hall</option>
                        <option value="Mozambique Hall">Mozambique Hall</option>
                        <option value="Awolowo Hall">Awolowo Hall</option>
                        <option value="Fajuyi Hall">Fajuyi Hall</option>
                      </select>
                    </div>

                    {/* Block and Room Dropdowns */}
                    <div className="flex gap-4">
                      <select className="w-1/2 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                      </select>
                      <select className="w-1/2 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-auto bg-white shadow rounded-lg my-20">
                    <table className="table-auto w-full text-left border-collapse">
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
                          <td className="px-4 py-2">1</td>
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
                          <td className="px-4 py-2">1</td>
                          <td className="px-4 py-2">2</td>
                          <td className="px-4 py-2">
                            <select className="border-none bg-transparent focus:ring-2 focus:ring-blue-500 rounded">
                              <option value="Occupied">Occupied</option>
                              <option value="Unoccupied">Unoccupied</option>
                              <option value="Reserved">Reserved</option>
                            </select>
                          </td>
                          <td className="px-4 py-2">
                            <input
                              onClick={"custom"}
                              className="rounded-lg"
                              placeholder="Matric No."
                              readOnly
                            ></input>
                          </td>
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
                </div>
              </div>
            </div>
          )}

          {activePage === "custom" && (
            <div>
              {/* Custom Allocation Page Content */}
              <h2 className="text-xl text-left font-semibold mb-4">
                Custom Allocation
              </h2>

              {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                    {loading && (
                      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
                      </div>
                    )}

                    {step === 1 && !loading && (
                      <div>
                        <div className="mb-4">
                          <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="Male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <input
                            className="w-full border border-gray-500 rounded-lg px-4 py-2 text-left"
                            type="text"
                            placeholder="CSC/2018/094"
                          />
                        </div>
                        {/*Request Button*/}
                        <div className="flex justify-end mt-6">
                          <button
                            onClick={handleNextStep}
                            className="px-6 py-2 bg-white text-blue-600 border-blue-700 rounded shadow hover:bg-blue-300"
                          >
                            Assign Bedspace
                          </button>
                        </div>
                      </div>
                    )}
                    {step === 2 && !loading && (
                      <div>
                        <div className="p-4 bg-white shadow rounded-lg">
                          <div className="mb-4">
                            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div className="mb-4">
                            <input
                              type="text"
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="CSC/2018/094"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <img
                              src="/Student-Portal/admin/src/assets/images/Oau_logo.png"
                              alt=""
                              className="w-16 h-16 rounded-full object-cover"
                            />
                          </div>
                          <div className="grid grid-cols-2 justify-center gap-4 text-center">
                            <div>
                              <p className="text-sm font-medium text-gray-500">
                                Name
                              </p>
                              <p className="font-semibold text-gray-900">
                                Syndrome D. Own
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">
                                Matric No
                              </p>
                              <p className="font-semibold text-gray-900">
                                CSC/2018/094
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">
                                Department
                              </p>
                              <p className="font-semibold text-gray-900">
                                Computer Science
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">
                                Level
                              </p>
                              <p className="font-semibold text-gray-900">300</p>
                            </div>
                          </div>
                          {/*Request Button*/}
                          <div className="flex justify-end mt-6">
                            <button
                              onClick={handleNextStep}
                              className="px-6 py-2 bg-white text-blue-600 border-blue-700 rounded shadow hover:bg-blue-300"
                            >
                              Assign Bedspace
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {step === 3 && !loading && (
                      <div>
                        <div className="p-6 bg-white shadow rounded-lg">
                          <div className="border-b pb-4 mb-4">
                            <h3 className="text-lg font-semibold mb-2">
                              Occupant
                            </h3>
                            <div className="flex items-center gap-4">
                              <img
                                src="/path-to-image.jpg"
                                alt="User"
                                className="w-16 h-16 rounded-full object-cover"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm font-medium text-gray-500">
                                  Name
                                </p>
                                <p className="font-semibold text-gray-900">
                                  Syndrome D. Own
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-500">
                                  Matric No
                                </p>
                                <p className="font-semibold text-gray-900">
                                  CSC/2018/094
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-500">
                                  Department
                                </p>
                                <p className="font-semibold text-gray-900">
                                  Computer Science
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-500">
                                  Level
                                </p>
                                <p className="font-semibold text-gray-900">
                                  300
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Bedspace
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm font-medium text-gray-500">
                                  Hall
                                </p>
                                <p className="font-semibold text-gray-900">
                                  Angola Hall
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-500">
                                  Block
                                </p>
                                <p className="font-semibold text-gray-900">A</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-500">
                                  Room
                                </p>
                                <p className="font-semibold text-gray-900">1</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-500">
                                  Bed
                                </p>
                                <p className="font-semibold text-gray-900">1</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end mt-6">
                            <button
                              onClick={() => setIsModalOpen(false)}
                              className="px-6 py-2 bg-white text-blue-600 border-blue-700 rounded shadow hover:bg-blue-300"
                            >
                              Assign Bedspace
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {activePage === "bulk" && (
            <div>
              {/* Bulk Allocation Page Content */}
              <h2 className="text-xl text-left font-semibold mb-4">
                Bedspace Allocation/Bulk Allocation
              </h2>
              <div className="bg-white p-6 rounded-lg shadow">
                {/* Halls Section */}
                <h3 className="text-lg text-left font-medium mb-6">
                  Halls (available bedspaces)
                  <p className="text-sm font-light text-left">
                    Enter no of bedspaces to be available for balloting
                  </p>
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Alumni Hall (820)
                    <input
                      type="number"
                      className="ml-auto w-32 border rounded px-2 py-1"
                      defaultValue="300"
                    />
                  </label>{" "}
                  <br />
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Akintola Hall
                    (1020)
                    <input
                      type="number"
                      className="ml-auto w-32 border rounded px-2 py-1"
                      defaultValue="300"
                    />
                  </label>{" "}
                  <br />
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Angola Hall (920)
                    <input
                      type="number"
                      className="ml-auto w-32 border rounded px-2 py-1"
                      defaultValue="300"
                    />
                  </label>
                  {/* Add more halls as necessary */}
                </div>
                <div className="mb-8 mt-8 gap-4 text-left">
                  <p>
                    Total number of bedspaces to be made available for bulk
                    allocation: <span className="font-bold">2400</span>
                  </p>
                </div>

                {/* Sharing Formula Section */}
                <div className="grid grid-cols-2  gap-8 items-center mb-4">
                  <label className="text-lg font-semibold flex items-center">
                    Sharing Formula
                  </label>
                  <select className="grid col-span-1 w-64 border rounded-lg py-2">
                    <option value="percentage">by Percentage</option>
                  </select>
                  <div className="grid grid-cols-2 col-span-12 gap-4 mb-6">
                    <label className="flex  items-center">
                      <input type="checkbox" className="mr-2" /> Freshers
                      <input
                        type="number"
                        className="ml-auto w-32 border rounded px-2 py-1"
                        defaultValue="35"
                      />
                    </label>{" "}
                    <br />
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" /> Part 2
                      <input
                        type="number"
                        className="ml-auto w-32 border rounded px-2 py-1"
                        defaultValue="15"
                      />
                    </label>
                    <br /> <br />
                    {/* Faculty Section */}
                    <h3 className="text-lg text-left font-medium gap-4 mb-2">
                      Faculty
                    </h3>{" "}
                    <br />
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />{" "}
                        Administration
                      </label>{" "}
                      <br />
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> Agriculture
                      </label>{" "}
                      <br />
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> Arts
                      </label>{" "}
                      <br />
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> Education
                      </label>{" "}
                      <br />
                      <label className="flex text-nowrap text-left items-center">
                        <input type="checkbox" className="mr-2" /> Enviromental
                        Design and Management
                      </label>{" "}
                      <br />
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> Law
                      </label>
                      {/* Add more faculties as necessary */}
                    </div>
                    {/* Add more sharing formula options as necessary */}
                  </div>
                </div>

                {/* Request Button */}
                <div className="flex justify-end mt-6">
                  <button className="px-6 py-2 bg-white text-blue-600 border-blue-700 rounded shadow hover:bg-blue-300">
                    Request Bulk Allocation
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default BedspaceAllocation;