import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 0L29.3333 6.66667H24L21.3333 0H18.6667L21.3333 6.66667H16L13.3333 0H10.6667L13.3333 6.66667H8L5.33333 0H2.66667C1.19391 0 0 1.19391 0 2.66667V22.6667C0 24.1394 1.19391 25.3333 2.66667 25.3333H29.3333C30.8061 25.3333 32 24.1394 32 22.6667V0H26.6667Z" fill="#FC4747"/>
        </svg>
      </div>

      <ul className="nav-icons">
        <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0H1C0.447715 0 0 0.447715 0 1V8C0 8.55228 0.447715 9 1 9H8C8.55228 9 9 8.55228 9 8V1C9 0.447715 8.55228 0 8 0Z" fill="#5A698F"/>
            <path d="M19 0H12C11.4477 0 11 0.447715 11 1V8C11 8.55228 11.4477 9 12 9H19C19.5523 9 20 8.55228 20 8V1C20 0.447715 19.5523 0 19 0Z" fill="#5A698F"/>
            <path d="M8 11H1C0.447715 11 0 11.4477 0 12V19C0 19.5523 0.447715 20 1 20H8C8.55228 20 9 19.5523 9 19V12C9 11.4477 8.55228 11 8 11Z" fill="#5A698F"/>
            <path d="M19 11H12C11.4477 11 11 11.4477 11 12V19C11 19.5523 11.4477 20 12 20H19C19.5523 20 20 19.5523 20 19V12C20 11.4477 19.5523 11 19 11Z" fill="#5A698F"/>
          </svg>
        </li>

        <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.9398 0H3.06018C1.37004 0 0 1.37004 0 3.06018V16.9398C0 18.63 1.37004 20 3.06018 20H16.9398C18.63 20 20 18.63 20 16.9398V3.06018C20 1.37004 18.63 0 16.9398 0ZM2 3.06018C2 2.47466 2.47466 2 3.06018 2H4V5H2V3.06018ZM2 7H4V10H2V7ZM2 12H4V15H2V12ZM3.06018 18C2.47466 18 2 17.5253 2 16.9398V17H4V18H3.06018ZM18 16.9398C18 17.5253 17.5253 18 16.9398 18H16V17H18V16.9398ZM18 12H16V15H18V12ZM18 7H16V10H18V7ZM16 2H16.9398C17.5253 2 18 2.47466 18 3.06018V5H16V2ZM6 2H14V18H6V2Z" fill="#5A698F"/>
          </svg>
        </li>

        <li className="active">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 5.5C20 3.84315 18.6569 2.5 17 2.5H13.4142L15.7071 0.207107L14.2929 -1.20711L11.0858 2.5H8.91421L5.70711 -1.20711L4.29289 0.207107L6.58579 2.5H3C1.34315 2.5 0 3.84315 0 5.5V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V5.5ZM18 7.5H2V5.5C2 4.94772 2.44772 4.5 3 4.5H17C17.5523 4.5 18 4.94772 18 5.5V7.5ZM2 17V9.5H18V17C18 17.5523 17.5523 18 17 18H3C2.44772 18 2 17.5523 2 17Z" fill="#FFFFFF"/>
          </svg>
        </li>

        <li>
          <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1H2C1.44772 1 1 1.44772 1 2V18.728C1 19.4842 1.8034 19.968 2.4661 19.5999L8.5 16.2477L14.5339 19.5999C15.1966 19.968 16 19.4842 16 18.728V2C16 1.44772 15.5523 1 15 1Z" stroke="#5A698F" strokeWidth="2" fill="none"/>
          </svg>
        </li>
      </ul>

      <div className="profile">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
      </div>
    </aside>
  );
};

export default Sidebar;