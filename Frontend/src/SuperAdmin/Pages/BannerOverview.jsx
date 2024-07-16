import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../Style/Dashboard.scss";
import axios from "axios";
import { AiFillEye, AiFillEdit, AiOutlinePlus } from 'react-icons/ai'
const sortList = ["Newest", "Oldest"];
function BannerOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");


  const getTokenFromCookie = () => {
    const name = "token=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
 
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const getAllBanners = async () => {
    try {
      const config = {
        headers: {
          Authorization: `${getTokenFromCookie()}`,
        },
      };

      const res = await axios.get(
        "http://localhost:3000/api/v1/banners",
        config
      );

      if (res.data.success) {
        setData(res.data.banner);
        setFilterData(res.data.banner);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

 


  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this ?"
    );

    if (confirm) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
      };
      const { data } = await axios.delete(`http://localhost:3000/api/v1/banner/${id}`,config);

      if (data.success) {
        setIsDelete(!isDelete);
      }
    }
  };

  const handleUpdate = (item) => {
    navigate(`/banner/update/${item.id}`);
  };

  const handleSortOptionClick = (label) => {
    setSelectedSortValue(label);
    setShowSort(!showSort);
    switch (label) {
      case "Newest":
        setFilterData(
          [...data].sort(
            (a, b) => new Date(b.createdat) - new Date(a.createdat)
          )
        );
        break;
      case "Oldest":
        setFilterData(
          [...data].sort(
            (a, b) => new Date(a.createdat) - new Date(b.createdat)
          )
        );
        break;
      default:
        break;
    }
  };

  const handleSearch = () => {
    const filterData1 = data.filter((item) =>
      item.pagename.toLowerCase().includes(search.toLowerCase())
    );
    setSearch("");
    setFilterData(filterData1);
  };

  useEffect(() => {
    getAllBanners();
    // eslint-disable-next-line
  }, [isDelete]);
  return (
    <div>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All Banners</h1>
          <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
            <AiOutlinePlus size={25} style={{ cursor: 'pointer' }} />
            <h2>Add Banner</h2>
          </div>
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search By Page name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{fontSize: "1rem"}}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <div className="filter-container">
              <GrSort
                size={25}
                onClick={() => setShowSort(!showSort)}
                style={{ cursor: "pointer" }}
              />
              {showSort === true && (
                <div className="filter-dropdown">
                  <div>
                    {sortList &&
                      sortList.map((item, index) => (
                        <div
                          className={
                            selectedSortValue === item
                              ? "dropdown-item selected"
                              : "dropdown-item"
                          }
                          key={index}
                          onClick={() => handleSortOptionClick(item)}
                        >
                          {item}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="banner-table-container">
        <div className="grid-container">
          <div className="grid-header">ID</div>
          <div className="grid-header">Page Name</div>
          <div className="grid-header">File Name</div>
          <div className="grid-header">Action</div>
          {filterData?.length > 0 && filterData.map((banner) => (
            <React.Fragment key={banner.id}>
              <div className="grid-item" data-label="ID">
                {banner.id}
              </div>
              <div className="grid-item" data-label="Page Name">
                {banner.pagename}
              </div>
              <div className="grid-item" data-label="File Name">
                {banner.filename}
                <span className="tooltip">{banner.filename}</span>
              </div>
              <div className="grid-item" data-label="Action">
                <div className="action-icons">
                  <AiFillEye
                    size={25}
                    onClick={() => handleShowImage(banner.id)}
                  />
                  <AiFillEdit
                    size={25}
                    onClick={() => handleUpdate(banner.id)}
                  />
                  <MdDelete
                    size={25}
                    color="red"
                    onClick={() => handleDelete(banner.id)}
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerOverview;
