import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../Style/Dashboard.scss";
import axios from "axios";
import {
  AiFillEye,
  AiFillEdit,
  AiOutlinePlus,
  AiFillCloseCircle,
} from "react-icons/ai";
const sortList = ["Newest", "Oldest"];

function CarousalOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [showPreview, setShowPreview] = React.useState(null);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [id, setId] = React.useState("");

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
    if (e.target.name === "carousal") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile(reader.result);
          setShowPreview(null);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Create Carousal
  const handleUpload = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/carousal/upload",
        { title, description, file },
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setTitle("");
        setDescription("");
        setFile(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Read Carousal
  const getAllCarousals = async () => {
    try {
      const config = {
        headers: {
          Authorization: `${getTokenFromCookie()}`,
        },
      };

      const res = await axios.get(
        "http://localhost:3000/api/v1/carousals",
        config
      );

      if (res.data.success) {
        setData(res.data.carousal);
        setFilterData(res.data.carousal);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update Carousal
  const handleUpdate = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        'Content-Type': 'application/json'
      },
    };

    const Data = {
      title,
      description,
      file : file ? file : undefined
    }
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/carousal/${id}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setTitle("");
        setDescription("");
        setId("");
        setFile(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleShowPopup = (item) => {
    setTitle(item.title);
    setDescription(item.description);
    setShowPreview(item.fileurl);
    setId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
  };
  const handleClose = () => {
    setTitle("");
    setDescription("");
    setShowPreview(null);
    setId("");
    setIsUpdate(false);
    setFile(null);
    setUploadFormOpen(false);
  };

  // Delete Carousal
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
        `http://localhost:3000/api/v1/carousal/${id}`,
        config
      );

      if (data.success) {
        setIsDelete(!isDelete);
      }
    }
  };

  // Filter and Sort
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

  // Search
  const handleSearch = () => {
    const filterData1 = data.filter((item) =>
      item.pagename.toLowerCase().includes(search.toLowerCase())
    );
    setSearch("");
    setFilterData(filterData1);
  };

  useEffect(() => {
    getAllCarousals();
    // eslint-disable-next-line
  }, [isDelete]);

  return (
    <div style={{ position: "relative" }}>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All Carousals</h1>
          <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
            <AiOutlinePlus size={25} style={{ cursor: "pointer" }} />
            <h2>Add Carousal</h2>
          </div>
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search By Page name"
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
          <div className="grid-header">Description</div>
          <div className="grid-header">Action</div>
          {filterData?.length > 0 &&
            filterData.map((carousal) => (
              <React.Fragment key={carousal.id}>
                <div className="grid-item" data-label="ID">
                  {carousal.id}
                </div>
                <div className="grid-item" data-label="Title">
                  {carousal.title}
                </div>
                <div className="grid-item" data-label="Description">
                  {carousal.description}
                  <span className="tooltip">{carousal.description}</span>
                </div>
                <div className="grid-item" data-label="Action">
                  <div className="action-icons">
                    <AiFillEye
                      size={25}
                      onClick={() => handleShowImage(carousal.id)}
                    />
                    <AiFillEdit
                      size={25}
                      onClick={() => handleShowPopup(carousal)}
                    />
                    <MdDelete
                      size={25}
                      color="red"
                      onClick={() => handleDelete(carousal.id)}
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>

      {uploadFormOpen && (
        <div className="upload-form-container">
          <div className="upload-form">
            <div className="close-btn" onClick={() => handleClose()}>
              <AiFillCloseCircle size={30} />
            </div>
            <h1>Upload Carousal</h1>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="file"
              id="carousal"
              name="carousal"
              accept="image/*"
              onChange={handleDataChange}
            />
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

export default CarousalOverview;
