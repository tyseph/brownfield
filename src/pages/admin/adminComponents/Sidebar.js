// import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import { useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Icon from "./Icon";
import IconButton from "./IconButton";
import MenuItem from "./MenuItem";
import Image from "./Image";
import './componentscss.css'
import LiveTime from "./LiveTime";
import { Navigate } from 'react-router-dom';

const sidebarItems = [
  [
    { id: '0', title: 'Dashboard', notifications: false },
    { id: '1', title: 'Flight Management', notifications: false },
    { id: '2', title: 'View Bookings', notifications: false },
    // { id: '3', title: 'Passenger Details', notifications: false },
  ],
  [
    { id: '4', title: 'Tasks', notifications: false },
    { id: '5', title: 'Reports', notifications: false },
    { id: '6', title: 'Settings', notifications: false },
  ],
];

const Sidebar = ({ onSidebarHide, showSidebar, onMenuClick, selected }) => {

  const navigate = useNavigate();

  const { dashOffset, indicatorWidth, precentage } = useSpring({
    dashOffset: 26.015,
    indicatorWidth: 70,
    precentage: 77,
    from: { dashOffset: 113.113, indicatorWidth: 0, precentage: 0 },
    config: config.molasses,
  });

  const handleLogout = () => {

    localStorage.clear()
    navigate('/login')
  }

  return (
    <div
      className={
        `fixed inset-y-0 left-0 bg-gray-900 w-full sm:w-20 xl:w-60 sm:flex flex-col z-10
        ${showSidebar ? '' : 'hidden'}`}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <IconButton className="w-10 h-10" 
          onClick={() => navigate('/')}/>
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-gray-200">
            Brownfield Airlines
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <IconButton
            icon="res-react-dash-sidebar-close"
            className="block sm:hidden"
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        {/* <div className="w-full p-3 h-24 sm:h-20 xl:h-24 hidden sm:block flex-shrink-0">
          <div className="bg-sidebar-card-top rounded-xl w-full h-full flex items-center justify-start sm:justify-center xl:justify-start px-3 sm:px-0 xl:px-3">
            <Icon path="res-react-dash-sidebar-card" className="w-9 h-9 " />
            <div className="block sm:hidden xl:block ml-3">
              <div className="text-sm font-bold text-gray-9900">Sales House</div>
              <div className="text-sm">General Item</div>
            </div>
            <div className="block sm:hidden xl:block flex-grow" />
            <Icon
              path="res-react-dash-sidebar-card-select"
              className="block sm:hidden xl:block w-5 h-5"
            />
          </div>
        </div> */}
        {sidebarItems[0].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={onMenuClick}
            selected={selected}
          />
        ))}
        {/* <div className="mt-8 mb-0 font-bold px-3 block sm:hidden xl:block">
          SHORTCUTS
        </div>
        {sidebarItems[1].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))} */}
        <div className="flex-grow" />
        <LiveTime />
      </div>
      <center className='w-full px-3 flex space-y-2'>
        <button className="w-full text-md
               bg-transparent
               border-2 border-gray-800 py-2 px-4
               transition-colors ease-out
               duration-500 text-white

               rounded-lg
               hover:from-white hover:to-red-300 
               hover:text-white hover:border-red uppercase tracking-wide" onClick={handleLogout}>Logout</button>
      </center>

    </div>
  );
}

export default Sidebar;