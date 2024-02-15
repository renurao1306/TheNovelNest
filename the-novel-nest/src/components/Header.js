import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from "./Sidebar";

function Header(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1001 }}>
            <div className="header-container" style={{ height: '60px', background: "linear-gradient(to right, #feada6 70%, #f5efef 100%)", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className='menu-container' style={{ padding: '10px', margin: '10px' }} onClick={toggleSidebar}>
                    <MenuIcon />
                </div>

                {sidebarOpen && <Sidebar />}

                <div className='logo-container' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <img src="./images/logo1.png" height='50px' />
                    <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '30px', wordSpacing: '20px', margin: '30px' }}>
                        The Novel Nest
                    </span>
                </div>
                <div className='search-container' style={{ padding: '10px', margin: '10px', display: 'flex', alignItems: 'center' }}>
                    <input type='text' placeholder='Search' style={{ height: '30px' }} />
                    <button><SearchIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Header;
