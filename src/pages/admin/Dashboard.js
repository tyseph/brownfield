import { useState } from 'react';
import Sidebar from "./adminComponents/Sidebar";
import Content from './adminComponents/Content';
import './adminComponents/componentscss.css'

const Dashboard = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  return (
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(!showSidebar);
        }}
        showSidebar={showSidebar}
      />
      <Content
        onSidebarHide={() => {
          onSetShowSidebar(!showSidebar);
        }}
      />
    </div>
  );
}

export default Dashboard;