import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiFillEdit,
  AiOutlinePlus,
  AiFillCloseCircle,
} from "react-icons/ai";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";
import Loader from "../../common/Loader";
import { toast } from "react-hot-toast";
const sortList = ["Newest", "Oldest"];
function ImagesOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [showPreview, setShowPreview] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [updateId, setUpdateId] = React.useState(null);
  const [loading,setLoading] = React.useState(false)
  

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

  const handleDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setFile(reader.result);
        setShowPreview(null);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  // Create Banner
  const handleUpload = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
      },
    };
    if (!title || !description || !file) {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true)
    try {
      const { data } = await axios.post(
        "http://165.227.97.26:3001/api/v1/image/upload",
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
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  const getAllImages = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.get(
        "http://165.227.97.26:3001/api/v1/images",
        config
      );
      setImages(data.images);
      setData(data.images);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Update Carousal
  const handleUpdate = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    if (!title || !description || !file) {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true)
    const Data = {
      title,
      description,
      file: file ? file : undefined,
    };
    try {
      const { data } = await axios.put(
        `http://165.227.97.26:3001/api/v1/image/${updateId}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setTitle("");
        setDescription("")
        setUpdateId("");
        setFile(null);
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  const handleShowPopup = (item) => {
    setTitle(item.title);
    setDescription(item.description)
    setShowPreview(item.fileurl);
    setUpdateId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
  };
  const handleClose = () => {
    setTitle("");
    setDescription("")
    setShowPreview(null);
    setUpdateId("");
    setIsUpdate(false);
    setFile(null);
    setUploadFormOpen(false);
  };
  useEffect(() => {
    getAllImages();
    // eslint-disable-next-line
  }, [isDelete]);


  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (confirm) {
      const config = {
        headers: {
          Authorization: `${getTokenFromCookie()}`,
          "Content-Type": "application/json",
        },
      };
      try {
        const { data } = await axios.delete(
          `http://165.227.97.26:3001/api/v1/image/${id}`,
          config
        );
        if (data.success) {
          setIsDelete(!isDelete);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSortOptionClick = (label) => {
    setSelectedSortValue(label);
    setShowSort(!showSort);
    switch (label) {
      case "Newest":
        setData(
          [...images].sort(
            (a, b) => new Date(b.createdat) - new Date(a.createdat)
          )
        );
        break;
      case "Oldest":
        setData(
          [...images].sort(
            (a, b) => new Date(a.createdat) - new Date(b.createdat)
          )
        );
        break;
      default:
        break;
    }
  };

  const handleSearch = () => {
    const filterData = images.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(filterData);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All Images</h1>
          <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
            <AiOutlinePlus size={25} style={{ cursor: "pointer" }} />
            <h2>Add Image</h2>
          </div>
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
          {data?.length > 0 &&
            data.map((item) => (
              <React.Fragment key={item.id}>
                <div className="grid-item" data-label="ID">
                  {item.id}
                </div>
                <div className="grid-item" data-label="Title">
                  {item.title}
                  <span className="tooltip">{item.title}</span>
                </div>
                <div className="grid-item" data-label="Description">
                  {item.description}
                  <span className="tooltip">{item.description}</span>
                </div>
                <div className="grid-item" data-label="Action">
                  <div className="action-icons">
                    <AiFillEdit
                      size={25}
                      onClick={() => handleShowPopup(item)}
                    />
                    <MdDelete
                      size={25}
                      onClick={() => handleDelete(item.id)}
                      color="red"
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
      {loading ? (<Loader/>) : (
        uploadFormOpen &&<div className="upload-form-container">
          <div className="upload-form">
            <div className="close-btn" onClick={() => handleClose()}>
              <AiFillCloseCircle size={30} />
            </div>
            <h1>Upload Image</h1>
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
              id="image"
              name="image"
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

export default ImagesOverview;
