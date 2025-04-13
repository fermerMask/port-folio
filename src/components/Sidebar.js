import React from "react";

const Sidebar = ({ setActiveTab }) => {
    return (
      <div className="w-48 bg-gray-800 p-4 border-r border-gray-700">
        <h2 className="text-green-400 mb-4">Explorer</h2>
        <ul>
          <li onClick={() => setActiveTab('about')} className="cursor-pointer hover:text-green-300">About</li>
          <li onClick={() => setActiveTab('works')} className="cursor-pointer hover:text-green-300">Work</li>
          <li onClick={() => setActiveTab('socials')} className="cursor-pointer hover:text-green-300">Socials</li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  