import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";
// import Upload from "../../Components/Upload";

const sortList = ["Newest", "Oldest"];

function VideosOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [videos,setVideos] = React.useState([]);
  const [UploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [isUpload, setIsUpload] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // getAllVideos();
    setTimeout(() => {
      setData(videos);
    }, 1000);
    // eslint-disable-next-line
  }, [isDelete, isUpload]);

  const handleShowVideo = (id) => {
    navigate(`/videos/${id}`);
  };

  const handleUpdate = (item) => {
    navigate(`/video/update/${item.id}`);
  };

  const handleDelete = async (id) => {
    console.log("delete", id);
    const confirm = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (confirm) {
      const { data } = await axios.delete(`/api/video/${id}`);
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
            <h2>Add Video</h2>
          </div>
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
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
          <div className="grid-header">Page Name</div>
          <div className="grid-header">File Name</div>
          <div className="grid-header">Action</div>
          {data?.length > 0 &&
            data.map((video) => (
              <React.Fragment key={video.id}>
                <div className="grid-item" data-label="ID">
                  {video.id}
                </div>
                <div className="grid-item" data-label="Page Name">
                  {video.title}
                  <span className="tooltip">{video.title}</span>
                </div>
                <div className="grid-item" data-label="File Name">
                  {video.description}
                  <span className="tooltip">{video.description}</span>
                </div>
                <div className="grid-item" data-label="Action">
                  <div className="action-icons">
                    <AiFillEye size={25} onClick={() => handleShowVideo(video.id)}/>
                    <AiFillEdit size={25} onClick={() => handleUpdate(video)} />
                    <MdDelete size={25} onClick={() => handleDelete(video.id)} color="red"/>
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
      {/* {UploadFormOpen && (
        <Upload
          setIsUpload={setIsUpload}
          setUploadFormOpen={setUploadFormOpen}
          Uploadtitle={"Video"}
          UploadType={"video"}
        />
      )} */}
    </div>
  );
}

export default VideosOverview;
