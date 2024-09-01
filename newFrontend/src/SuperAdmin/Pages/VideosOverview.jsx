import React, { useEffect } from "react";
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
function VideosOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [videos, setVideos] = React.useState([]);
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [showPreview, setShowPreview] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [url,setUrl] = React.useState("");
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
    if(title == "" || description == "" || url == ""|| file == ""){
      return toast.error('Please fill all the fields');
    }
    setLoading(true)
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/video/upload",
        { title, description, url,file },
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setTitle("");
        setDescription("");
        setUrl("");
        setFile(null);
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  const getAllVideos = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.get(
        "http://localhost:3001/api/v1/videos",
        config
      );
      setVideos(data.videos);
      setData(data.videos);
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
    if(title == "" || description == "" || url == ""|| file == ""){
      return toast.error('Please fill all the fields');
    }
    setLoading(true)
    const Data = {
      title,
      description,
      url: url,
      file: file ? file : undefined,
    };
    try {
      const { data } = await axios.put(
        `http://localhost:3001/api/v1/video/${updateId}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setTitle("");
        setDescription("")
        setUpdateId("");
        setIsUpdate(false);
        setUrl("");
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
    setUrl(item.url);
    setUpdateId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
    setShowPreview(item.fileurl);
  };
  const handleClose = () => {
    setTitle("");
    setDescription("")
    setUrl("");
    setUpdateId("");
    setIsUpdate(false);
    setUploadFormOpen(false);
    setFile(null)
  };
  useEffect(() => {
    getAllVideos();
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
          `http://localhost:3001/api/v1/video/${id}`,
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
          [...videos].sort(
            (a, b) => new Date(b.createdat) - new Date(a.createdat)
          )
        );
        break;
      case "Oldest":
        setData(
          [...videos].sort(
            (a, b) => new Date(a.createdat) - new Date(b.createdat)
          )
        );
        break;
      default:
        break;
    }
  };

  const handleSearch = () => {
    const filterData = videos.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(filterData);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All videos</h1>
          <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
            <AiOutlinePlus size={25} style={{ cursor: "pointer" }} />
            <h2>Add Videos</h2>
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
      {loading ? (<Loader/>) :(
        uploadFormOpen &&<div className="upload-form-container">
          <div className="upload-form">
            <div className="close-btn" onClick={() => handleClose()}>
              <AiFillCloseCircle size={30} />
            </div>
            <h1>Upload Video</h1>
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
              id="banner"
              name="banner"
              accept="image/*"
              onChange={handleDataChange}
            />
            
            <input
              type="text"
              placeholder="Youtube video link"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
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

export default VideosOverview;
