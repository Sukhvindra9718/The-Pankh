import React from "react";
import { BiHelpCircle, BiSolidDashboard } from "react-icons/bi";
import "../../Style/Dashboard.scss";
import { FaCaretDown, FaCaretLeft, FaVideo, FaImage } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
import { GiKnightBanner } from "react-icons/gi";
import { BiCarousel } from "react-icons/bi";


function Sidebar({
  menuActive,
  setMenuActive,
  submenuActive,
  setSubmenuActive,
}) {
  const [showGallery, setShowGallery] = React.useState(false);

  return (
    <div>
      <div className="sidebar-logo">
        <img className="sidebar-img" src="./Logo.jpeg" alt="Logo" />
      </div>

      <div className="sidebar-menu">
        <div
          className={
            menuActive === 0
              ? "sidebar-menu-item selected"
              : "sidebar-menu-item"
          }
          onClick={() => setMenuActive(0)}
        >
          <BiSolidDashboard
            fill={menuActive === 0 ? "#fff" : "#717171"}
            size={30}
          />
          <h4>Dashboard</h4>
        </div>

        <div
          className={
            menuActive === 1
              ? "sidebar-menu-item selected"
              : "sidebar-menu-item"
          }
          onClick={() => setMenuActive(1)}
        >
          <div style={{ width: "90%", display: "flex", gap: "1rem" }}>
            <GrGallery
              fill={menuActive === 1 ? "#fff" : "#717171"}
              stroke={menuActive === 1 ? "#fff" : "#717171"}
              size={30}
            />
            <h4>Gallery</h4>
          </div>
          <div
            style={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {showGallery && (
              <FaCaretDown
                fill={menuActive === 1 ? "#fff" : "#717171"}
                size={30}
                onClick={() => setShowGallery(false)}
              />
            )}
            {!showGallery && (
              <FaCaretLeft
                fill={menuActive === 1 ? "#fff" : "#717171"}
                size={30}
                onClick={() => setShowGallery(true)}
              />
            )}
          </div>
        </div>
        {menuActive === 1 && showGallery && (
          <div className="submenu" id="gallery">
            <div
              className={
                submenuActive === 0
                  ? "sidebar-submenu-item sub-selected"
                  : "sidebar-submenu-item"
              }
              onClick={() => setSubmenuActive(0)}
            >
              <FaVideo
                fill={submenuActive === 0 ? "#fff" : "#717171"}
                size={30}
              />
              <h4>Videos</h4>
            </div>
            <div
              className={
                submenuActive === 1
                  ? "sidebar-submenu-item sub-selected"
                  : "sidebar-submenu-item"
              }
              onClick={() => setSubmenuActive(1)}
            >
              <FaImage
                fill={submenuActive === 1 ? "#fff" : "#717171"}
                size={30}
              />
              <h4>Images</h4>
            </div>
          </div>
        )}
        <div
          className={
            menuActive === 2
              ? "sidebar-menu-item selected"
              : "sidebar-menu-item"
          }
          onClick={() => setMenuActive(2)}
        >
          <MdContacts
            fill={menuActive === 2 ? "#fff" : "#717171"}
            size={30}
          />
          <h4>Contact Query</h4>
        </div>
      
        <div
          className={
            menuActive === 3
              ? "sidebar-menu-item selected"
              : "sidebar-menu-item"
          }
          onClick={() => setMenuActive(3)}
        >
          <GiKnightBanner 
            fill={menuActive === 3 ? "#fff" : "#717171"}
            size={30}
          />
          <h4>Banner</h4>
        </div>
        <div
          className={
            menuActive === 4
              ? "sidebar-menu-item selected"
              : "sidebar-menu-item"
          }
          onClick={() => setMenuActive(4)}
        >
          <MdContacts
            fill={menuActive === 4 ? "#fff" : "#717171"}
            size={30}
          />
          <h4>Key Contacts</h4>
        </div>
        <div
          className={
            menuActive === 5
              ? "sidebar-menu-item selected"
              : "sidebar-menu-item"
          }
          onClick={() => setMenuActive(5)}
        >
          <BiCarousel
            fill={menuActive === 5 ? "#fff" : "#717171"}
            size={30}
          />
          <h4>Carousal</h4>
        </div>
      </div>

      <div className="sidebar-footer">
        <BiHelpCircle fill="#717171" size={30} />
        <h4>Help</h4>
      </div>
    </div>
  );
}

export default Sidebar;
