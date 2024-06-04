import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaCircle } from 'react-icons/fa';
import LogoutIcon from '../images/Logout.png'
import { IoLogOut } from "react-icons/io5";

export default function NavBar({ show }) {
  return (
    <div className={show ? 'SideNav active' : 'SideNav'}>
      <ul>
        <li>
          <Link to='/myaccount'>
            <FaUserAlt size="0.65em" /> My Account
          </Link>
        </li>
        <li>
          <Link to='/emergencyprocedures'>
            <FaCircle size="0.65em"  /> Emergency Procedures
          </Link>
        </li>
        <li>
          <Link to='/scenarios'>
            <FaCircle size="0.65em" /> Scenarios
          </Link>
        </li>
        <li>
          <Link to='/cfi'>
            <FaCircle size="0.65em" /> CFI
          </Link>
        </li>
      </ul>
      {/* <div className='alllogout'>
      <IoLogOut size = "1.5em" className='LogOutSize' /> Logout
      </div> */}
    </div>
  );
}
