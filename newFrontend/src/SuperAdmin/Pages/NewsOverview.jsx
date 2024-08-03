import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";
import { AiFillEdit, AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
const sortList = ["Newest", "Oldest"];

function NewsOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [showPreview, setShowPreview] = React.useState("");
  const [news, setNews] = React.useState({
    title: "",
    shortdesc: "",
    longdesc: "",
  });
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [updateId, setUpdateId] = React.useState(null);

  // Get Token from Cookie
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

  // Handle Image
  const handleDataChange = (e) => {
    if (e.target.name === "news") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile(reader.result);
          setShowPreview(null);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setNews({ ...news, [e.target.name]: e.target.value });
    }
  };

  // Create news
  const handleUpload = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/news/upload",
        { ...news, file },
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setNews({
          title: "",
          shortdesc: "",
          longdesc: "",
        });
        setFile(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Read All news
  const getAllVolunteers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/news");

      if (res.data.success) {
        setData(res.data.volunteers);
        setFilterData(res.data.volunteers);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update news
  const handleUpdate = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };

    const Data = {
      ...news,
      file: file ? file : undefined,
    };
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/news/${updateId}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setNews({
          title: "",
          shortdesc: "",
          longdesc: "",
        });
        setUpdateId("");
        setFile(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleShowPopup = (item) => {
    setNews({
      title: item.title,
      shortdesc: item.shortdesc,
      longdesc: item.longdesc,
    });
    setShowPreview(item.fileurl);
    setUpdateId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
  };
  const handleClose = () => {
    setNews({
      title: "",
      shortdesc: "",
      longdesc: "",
    });
    setShowPreview(null);
    setUpdateId("");
    setIsUpdate(false);
    setFile(null);
    setUploadFormOpen(false);
  };

  // Delete news
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this ?");

    if (confirm) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
      };
      const { data } = await axios.delete(
        `http://localhost:3000/api/v1/news/${id}`,
        config
      );

      if (data.success) {
        setIsDelete(!isDelete);
      }
    }
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
      item.username.toLowerCase().includes(search.toLowerCase())
    );
    setSearch("");
    setFilterData(filterData1);
  };

  useEffect(() => {
    getAllVolunteers();
    // eslint-disable-next-line
  }, [isDelete]);
  return (
    <div style={{ position: "relative" }}>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All Volunteers</h1>
          <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
            <AiOutlinePlus size={25} style={{ cursor: "pointer" }} />
            <h2>Add news</h2>
          </div>
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search By news name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ fontSize: "1rem" }}
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
          <div className="grid-header">Title</div>
          <div className="grid-header">Short Desc</div>
          <div className="grid-header">Action</div>
          {filterData?.length > 0 &&
            filterData.map((news) => (
              <React.Fragment key={news.id}>
                <div className="grid-item" data-label="ID">
                  {news.id}
                </div>
                <div className="grid-item" data-label="Title">
                  {news.title}
                </div>
                <div className="grid-item" data-label="Short Desc">
                  {news.shortdesc}
                  <span className="tooltip">{news.shortdesc}</span>
                </div>
                <div className="grid-item" data-label="Action">
                  <div className="action-icons">
                    <AiFillEdit
                      size={25}
                      onClick={() => handleShowPopup(news)}
                    />
                    <MdDelete
                      size={25}
                      color="red"
                      onClick={() => handleDelete(news.id)}
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>

      {uploadFormOpen && (
        <div className="upload-form-container-2">
          <div className="upload-form">
            <div className="close-btn" onClick={() => handleClose()}>
              <AiFillCloseCircle size={30} />
            </div>
            <h1>Create news</h1>
            <div className="inputContainer">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={news.title}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Short Desc"
                name="shortdesc"
                value={news.shortdesc}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Long Desc"
                name="longdesc"
                value={news.longdesc}
                onChange={handleDataChange}
              />
              <input
                type="file"
                id="news"
                name="news"
                accept="image/*"
                onChange={handleDataChange}
              />
            </div>

            <div className="preview-image">
              {file && <img src={file} alt="preview" />}
              {showPreview && <img src={showPreview} alt="preview" />}
            </div>
            {!isUpdate ? (
              <button onClick={handleUpload}>Upload</button>
            ) : (
              <button onClick={handleUpdate}>Update</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsOverview;
