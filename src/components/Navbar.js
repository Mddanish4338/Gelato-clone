import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaBars, FaTimes } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";
import { GiCircleCage } from "react-icons/gi";
import { MdHeadsetMic } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import logo from "../assest/gelato_logo_black.svg";

const dropdownData = [
  {
    title: 'Products',
    subitems: ['Product 1', 'Product 2', 'Product 3'],
  },
  {
    title: 'Start Selling',
    subitems: ['Option 1', 'Option 2'],
  },
  {
    title: 'Tools & apps',
    subitems: ['Tool 1', 'Tool 2'],
  },
  {
    title: 'Pricing',
    subitems: ['Price 1', 'Price 2'],
  },
  {
    title: 'Resources',
    subitems: ['Resource 1', 'Resource 2'],
  },
  {
    title: 'GelatoConnect',
    subitems: ['Connect 1', 'Connect 2'],
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="Nav">
        <section>
          <img className="Nav_logo" src={logo} alt="Logo" />
        </section>
        <section>
          <ul className="Nav_list">
            <li><button className="Nav_item_button"><MdHeadsetMic size={20} />&nbsp; Contact us</button></li>
            <li><button className="Nav_item_button"><GiCircleCage size={20} />&nbsp; IN/INR</button></li>
            <li><button className="Nav_item_button"><FaCartShopping size={20} />&nbsp; Cart</button></li>
            <li><button className="Nav_item_button"><TiUser size={20} />&nbsp; Sign in </button></li>
            <li><button className="Signup_button">Sign up for free</button></li>
          </ul>
        </section>
       
        <section className="Hamburger_Icon" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </section>
      </div>

      {isMobileMenuOpen && (
        <div className="Mobile_Sidebar">
          <ul className="Mobile_Nav_List">
            <li><MdHeadsetMic size={20} />&nbsp; Contact us</li>
            <li><GiCircleCage size={20} />&nbsp; IN/INR</li>
            <li><FaCartShopping size={20} />&nbsp; Cart</li>
            <li><TiUser size={20} />&nbsp; Sign in</li>
            <li className="Mobile_Signup"><button className="Signup_button">Sign up for free</button></li>
            <div className="Nav_dropdown_mobile">
              <ul className="ul_dropdown">
                {dropdownData.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleDropdownToggle(index)}
                    className="dropdown"
                  >
                    {item.title}
                    {activeDropdown === index ? <FaAngleUp /> : <FaAngleDown />}
                    {activeDropdown === index && (
                      <ul className="dropdown-menu">
                        {item.subitems.map((subitem, subIndex) => (
                          <li key={subIndex}>{subitem}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
