'use client';

import React, { useEffect, useState } from 'react';
import SidebarItem from '../components/sidebaritem';
import { useMediaQuery } from 'usehooks-ts';

const Sidebar = ({isOpen}:{isOpen:boolean}) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Prevent rendering until after first mount to avoid hydration issues
  if (!hasMounted) return null;

  return (
    <aside
      className={`fixed top-[56px] w-64 bg-white text-white flex flex-col ${!isMobile ? 'open' : (isOpen? 'open':'close')}`}
      style={{ height: `calc(100% - 56px)` }}
    >
      {/* Sidebar Menu Items */}
      <nav className="flex-grow space-y-2 mt-2 p-4">
        <SidebarItem icon="layout-grid" label="Dashboard" active />
        <SidebarItem icon="chart-no-axes-combined" label="Credits & Usage" />
        <SidebarItem icon="file-chart-column-increasing" label="History" />
        <SidebarItem icon="chart-pie" label="API Management" />
        <SidebarItem icon="dollar-sign" label="Subscription Plans" />
      </nav>

      {/* Footer Links */}
      <div className="p-4 space-y-2">
        <SidebarItem icon="settings" label="Settings" />
        <SidebarItem icon="headphones" label="Help Center" />
      </div>
    </aside>
  );
};

export default Sidebar;
