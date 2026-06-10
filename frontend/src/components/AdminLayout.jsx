import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';
import TopBar from './TopBar';

const AdminLayout = () => {
    return (
        <div className="flex h-screen w-full">
            <SideNav />
            <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative bg-background">
                <TopBar showSearch={true} />
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
