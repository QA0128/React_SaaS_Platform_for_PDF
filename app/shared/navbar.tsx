import React from "react";

const DashboardNavbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="fixed z-2 w-full flex justify-between items-center px-6 py-3 bg-white">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src="/assets/images/logo.png" alt="PDFRender Logo" className="z-2 w-[184px] h-[32px]" onClick={toggleSidebar}/>
      </div>

      {/* Right: User Avatar */}
      <div>
        <img
          src="/assets/user/avatar.jpg"
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default DashboardNavbar;
