import React from "react";
import { BiHelpCircle, BiSolidDashboard } from "react-icons/bi";
import "../../style/Dashboard.css";
import { FaCaretDown, FaCaretLeft, FaVideo, FaImage } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
import { GiKnightBanner } from "react-icons/gi";
import { BiCarousel } from "react-icons/bi";

function Sidebar({ menuActive, setMenuActive, submenuActive, setSubmenuActive }) {
  const [showGallery, setShowGallery] = React.useState(false);

  return (
    <div>
      <div className="sidebar-logo">
        <img className="sidebar-img" src="./assets/images/Logo.jpeg" alt="Logo" />
      </div>

      <div className="sidebar-menu">
        <div
          className={menuActive === 0 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(0)}
        >
          <BiSolidDashboard fill={menuActive === 0 ? "#fff" : "#717171"} size={30} />
          <h4>Dashboard</h4>
        </div>

        <div
          className={menuActive === 1 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
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
                submenuActive === 0 ? "sidebar-submenu-item sub-selected" : "sidebar-submenu-item"
              }
              onClick={() => setSubmenuActive(0)}
            >
              <FaVideo fill={submenuActive === 0 ? "#fff" : "#717171"} size={30} />
              <h4>Videos</h4>
            </div>
            <div
              className={
                submenuActive === 1 ? "sidebar-submenu-item sub-selected" : "sidebar-submenu-item"
              }
              onClick={() => setSubmenuActive(1)}
            >
              <FaImage fill={submenuActive === 1 ? "#fff" : "#717171"} size={30} />
              <h4>Images</h4>
            </div>
          </div>
        )}
        <div
          className={menuActive === 2 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(2)}
        >
          <MdContacts fill={menuActive === 2 ? "#fff" : "#717171"} size={30} />
          <h4>Contact Query</h4>
        </div>

        <div
          className={menuActive === 3 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(3)}
        >
          <GiKnightBanner fill={menuActive === 3 ? "#fff" : "#717171"} size={30} />
          <h4>Banner</h4>
        </div>
        <div
          className={menuActive === 4 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(4)}
        >
          <MdContacts fill={menuActive === 4 ? "#fff" : "#717171"} size={30} />
          <h4>Key Contacts</h4>
        </div>
        <div
          className={menuActive === 5 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(5)}
        >
          <BiCarousel fill={menuActive === 5 ? "#fff" : "#717171"} size={30} />
          <h4>Carousal</h4>
        </div>
        <div
          className={menuActive === 6 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(6)}
        >
          <BiCarousel fill={menuActive === 6 ? "#fff" : "#717171"} size={30} />
          <h4>Volunteer</h4>
        </div>
        <div
          className={menuActive === 7 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(7)}
        >
          <BiCarousel fill={menuActive === 7 ? "#fff" : "#717171"} size={30} />
          <h4>News</h4>
        </div>
        <div
          className={menuActive === 8 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(8)}
        >
          <BiCarousel fill={menuActive === 8 ? "#fff" : "#717171"} size={30} />
          <h4>Testimonial</h4>
        </div>
        <div
          className={menuActive === 9 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(9)}
        >
          <BiCarousel fill={menuActive === 9 ? "#fff" : "#717171"} size={30} />
          <h4>events</h4>
        </div>
        <div
          className={menuActive === 10 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(10)}
        >
          <BiCarousel fill={menuActive === 10 ? "#fff" : "#717171"} size={30} />
          <h4>Projects</h4>
        </div>
        <div
          className={menuActive === 11 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(11)}
        >
          <BiCarousel fill={menuActive === 11 ? "#fff" : "#717171"} size={30} />
          <h4>Funds</h4>
        </div>

        <div
          className={menuActive === 12 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(12)}
        >
          <BiCarousel fill={menuActive === 12 ? "#fff" : "#717171"} size={30} />
          <h4>Donations</h4>
        </div>
        <div
          className={menuActive === 13 ? "sidebar-menu-item selected" : "sidebar-menu-item"}
          onClick={() => setMenuActive(13)}
        >
          <BiCarousel fill={menuActive === 13 ? "#fff" : "#717171"} size={30} />
          <h4>Bank Details</h4>
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
