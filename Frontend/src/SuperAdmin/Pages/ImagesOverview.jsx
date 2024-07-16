import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/global";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../Style/Dashboard.scss";
import axios from "axios";
import Upload from "../../Components/Upload";

const sortList = ["Newest", "Oldest"];
function ImagesOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const { images, getAllImages } = useGlobalContext();
  const [UploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [isUpload, setIsUpload] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAllImages();
    console.log(images);
    setData(images);
    // eslint-disable-next-line
  }, [isDelete, isUpload]);

  const handleShowImage = (id) => {
    navigate(`/images/${id}`);
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
      const { data } = await axios.delete(`/api/image/${id}`);
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
    <div>
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
            data.map((item) => (
              <React.Fragment key={item.id}>
                <div className="grid-item" data-label="ID">
                  {item.id}
                </div>
                <div className="grid-item" data-label="Page Name">
                  {item.title}
                  <span className="tooltip">{item.title}</span>
                </div>
                <div className="grid-item" data-label="File Name">
                  {item.description}
                  <span className="tooltip">{item.description}</span>
                </div>
                <div className="grid-item" data-label="Action">
                  <div className="action-icons">
                    <AiFillEye
                      size={25}
                      onClick={() => handleShowImage(item.id)}
                    />
                    <AiFillEdit size={25} onClick={() => handleUpdate(video)} />
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
      {UploadFormOpen && (
        <Upload
          setIsUpload={setIsUpload}
          setUploadFormOpen={setUploadFormOpen}
          Uploadtitle={"Image"}
          UploadType={"Image"}
        />
      )}
    </div>
  );
}

export default ImagesOverview;
