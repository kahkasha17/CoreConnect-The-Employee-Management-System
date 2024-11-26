import React, { useState } from "react";
import UserAvatar from "../../Components/UserAvatar";

const Profile = () => {
  const [fields, setFields] = useState({
    personal: {
      name: "Kahkasha Rafat Fatima",
      dob: "17.11.2002",
      gender: "Female",
      maritalStatus: "Unmarried",
    },
    educational: {
      highestDegree: "Bachelor of Technology",
      university: "ABC University",
      graduationYear: "2023",
    },
    professional: {
      profile: "Software Engineer",
      department: "Development",
      email: "kahkasha@example.com",
      phone: "123-456-7890",
    },
  });

  const [editField, setEditField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const handleEditClick = (section, field) => {
    setEditField({ section, field });
    setTempValue(fields[section][field]);
  };

  const handleSaveClick = () => {
    const { section, field } = editField;
    setFields((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: tempValue,
      },
    }));
    setEditField(null);
  };

  const handleCancelClick = () => {
    setEditField(null);
  };

  const renderSection = (title, sectionKey, sectionFields) => (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {Object.entries(sectionFields).map(([key, value]) => (
          <div key={key}>
            <div className="flex flex-wrap items-center gap-4">
              <label className="text-gray-700 font-medium min-w-[120px] capitalize">
                {key.replace(/([A-Z])/g, " $1")}:
              </label>
              {editField?.section === sectionKey && editField?.field === key ? (
  <div className="flex flex-wrap items-center gap-4 w-full">
    <input
      type="text"
      value={tempValue}
      onChange={(e) => setTempValue(e.target.value)}
      className="flex-1 w-full min-w-[150px] px-2 py-1 border border-gray-300 rounded-md"
    />
    <div className="flex gap-2">
      <button
        onClick={handleSaveClick}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Save
      </button>
      <button
        onClick={handleCancelClick}
        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
      >
        Cancel
      </button>
    </div>
  </div>
) : (
  <>
    <span className="text-gray-900 flex-1 truncate">{value}</span>
    <button
      onClick={() => handleEditClick(sectionKey, key)}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    >
      Edit
    </button>
  </>
)}

            </div>
            <hr className="border-t border-gray-200 mt-2" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-slate-600 p-4 rounded-lg max-w-screen-xl mx-auto">
        <UserAvatar />
        <h1 className="text-white text-center">{fields.personal.name}</h1>
        <h6 className="text-white text-center">Employee ID: 2456789t76</h6>
      </div>

      <div className="p-6 w-full max-w-screen-xl mx-auto bg-white shadow-md rounded-lg mt-6">
        {renderSection("Personal Information", "personal", fields.personal)}
        {renderSection("Educational Information", "educational", fields.educational)}
        {renderSection("Professional Information", "professional", fields.professional)}
      </div>
    </>
  );
};

export default Profile;
