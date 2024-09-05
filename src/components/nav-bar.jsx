import React from 'react';

const NavBar = ({ children }) => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">My Cool App</div>
      <div className="flex gap-4">
        {children}
      </div>
    </nav>
  );
};

export default NavBar;