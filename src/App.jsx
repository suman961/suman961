import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [check, setCheck] = useState(null);
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { name, contact, company };

    // Correctly update the data array
    setData([...data, newEntry]);

    // Clear input fields after submission
    setName("");
    setContact("");
    setCompany("");
    setCheck(null)
  };

  const Check = (e) => {
    setCheck (true);
  };
  return (
    <div>
      {/* Form Section */}
      <div className="m-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            className="border w-[70%] p-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <input
            type="text"
            className="border w-[70%] p-2 my-4"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your contact"
          />
          <input
            type="text"
            className="border w-[70%] p-2 my-4"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter your company"
          />
          <div className="flex items-center gap-2">
            <label htmlFor="">favorite</label>
            <input type="checkbox" onClick={Check} />
          </div>
          <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-400">
            Submit
          </button>
        </form>
      </div>

      <div className="w-[70%] m-8 border-t-2 pt-4">
        <h3 className="text-lg font-bold mb-4">Submitted Entries</h3>
       <ul>
          {data.map((entry, index) => (
            <li key={index} className="p-2 border-b my-5 bg-emerald-300">
              <p className="text-black-500 my-2 font-bold">
                <strong>Name:</strong> {entry.name}
              </p>
              <p>
                <strong>Contact:</strong> {entry.contact}
              </p>
              <p>
                <strong>Company:</strong> {entry.company}
              </p>
              {check == true ? <p className="bg-red-400">Favourite</p> : ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
