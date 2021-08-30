import React, { useState, useRef, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from "react-icons";
function Navbar() {
  // const el = useRef();
  // const [isOpen, setOpen] = useState(false);
  // const handleCloseModal = e => {
  //   if (isOpen && (!el.current || !el.current.contains(e.target)))
  //     setOpen(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleCloseModal);
  //   return () => {
  //     window.removeEventListener("click", handleCloseModal);
  //   };
  // }, []);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* 네비게이션 토글 코드*/}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <div className="navbar-toggle"></div>
            {/* SidebarData를 순서대로 담기*/}
            <div className="nav-item-zone">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <a href={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
