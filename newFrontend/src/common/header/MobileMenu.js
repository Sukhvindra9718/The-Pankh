import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { CgChevronDown, CgChevronLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const menuData = [
  {
    title: "Home",
    path: "/",
    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,
  },
  {
    title: "About",
    path: "/about",
  },

  {
    title: "Pages",
    path: "#",

    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,

    subNav: [
      {
        title: "Team",
        path: "/team",
        cName: "sub-nav",
      },
      {
        title: "Projects",
        path: "/projects",
      },
      {
        title: "Testimonial",
        path: "/testimonials",
      },
    ],
  },
  {
    title: "Gallery",
    path: "#",

    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,

    subNav: [
      {
        title: "Images",
        path: "/images",
        cName: "sub-nav",
      },
      {
        title: "Videos",
        path: "/videos",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Donation",
    path: "#",

    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,

    subNav: [
      {
        title: "Donation",
        path: "/donation",
        cName: "sub-nav",
      },
      {
        title: "Donate Now",
        path: "/donate-now",
      },
    ],
  },

  {
    title: "Blog",
    path: "/blogs",
  },

  {
    title: "Contact",
    path: "/contact",
  },
];

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    background: #ff6f0f;
    color: #fff;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  color: #fff;
  font-weight: 400;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  &:hover,
  &:active {
    background: #ff6f0f;
    cursor: pointer;
    color: #fff;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink
        to={process.env.PUBLIC_URL + `${item.path}`}
        onClick={item.subNav && showSubnav}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((data, index) => (
          <DropdownLink
            to={process.env.PUBLIC_URL + `${data.path}`}
            key={index}
          >
            {item.icon}
            <SidebarLabel>{data.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

const NavIcon = styled(Link)`
  color: #ff6f0f;
  font-size: 2rem;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const SidebarNav = styled.nav`
  background-color: #001d23;
  width: 300px;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
  box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 99999;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const MobileMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <>
        <NavIcon to="#" style={{ justifyContent: "flex-end" }}>
          <AiOutlineBars onClick={showSidebar} />
        </NavIcon>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <div className="mobile-nav__content">
              <div className="logo-box">
                <Link to={process.env.PUBLIC_URL + `/`} aria-label="logo image">
                  <img
                    src={publicUrl + "assets/images/resources/footer-logo.png"}
                    width="155"
                    alt=""
                  />
                </Link>
              </div>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose
                  style={{
                    color: "white",
                    fontSize: "18px",
                    justifyContent: "flex-start",
                  }}
                  onClick={showSidebar}
                />
              </NavIcon>
              {menuData.map((item, index) => (
                <SubMenu item={item} key={index} />
              ))}
              <ul className="mobile-nav__contact list-unstyled">
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <a href="mailto:mail@thepankh.info">mail@thepankh.info</a>
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a href="tel:666-888-0000">0120-6055473</a>
                </li>
              </ul>
              <div className="mobile-nav__top">
                <div className="mobile-nav__social">
                  <a href="https://twitter.com/">
                    <span className="fab fa-twitter"></span>
                  </a>
                  <a href="https://www.facebook.com/society.pankh05">
                    <span className="fab fa-facebook-square"></span>
                  </a>
                  <a href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7224380283993612288/?actorCompanyId=97907319/">
                    <span className="fab fa-linkedin"></span>
                  </a>
                  <a href="https://www.instagram.com/pankhsociety/">
                    <span className="fab fa-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
          </SidebarWrap>
        </SidebarNav>
      </>
    </>
  );
};

export default MobileMenu;
