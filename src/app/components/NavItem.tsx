import React, { useState } from 'react';

interface DropdownItem {
  label: string;
  path: string;
}

interface NavItemProps {
  label: string;
  onClick: () => void;
  dropdownItems?: DropdownItem[];
}

const NavItem: React.FC<NavItemProps> = ({ label, onClick, dropdownItems = [] }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative group">
      <button
        className="text-slate-700 hover:bg-teal-300 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out block w-full text-left"
        onMouseEnter={toggleDropdown}
        onMouseLeave={closeDropdown}
        onClick={onClick}
      >
        {label}
      </button>
      {isDropdownOpen && dropdownItems.length > 0 && (
        <div className="absolute left-0 mt-2 w-48 bg-slate-200-800 rounded-md shadow-lg z-10">
          <div className="py-1">
            {dropdownItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="block px-4 py-2 text-sm text-slate-200 hover:bg-teal-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
