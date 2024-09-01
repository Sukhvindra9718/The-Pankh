import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";
import { AiFillEdit, AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
import Loader from "../../common/Loader";
import { toast } from "react-hot-toast";
const sortList = ["Newest", "Oldest"];
function EventsOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [showPreview, setShowPreview] = React.useState("");
  const [events, setevents] = React.useState({
    title: "",
    shortdescription: "",
    eventsdatetime: "",
    link: "",
  });
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [updateId, setUpdateId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
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
    if (e.target.name === "events") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile(reader.result);
          setShowPreview(null);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setevents({ ...events, [e.target.name]: e.target.value });
    }
  };

  // Create events
  const handleUpload = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
      },
    };
    if(!events.title || !events.shortdescription || !events.eventsdatetime || !file){
      toast.error("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/events/upload",
        { ...events, file },
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setevents({
          title: "",
          shortdescription: "",
          eventsdatetime: "",
          link: "",
        });
        setFile(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Update events
  const handleUpdate = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    if(!events.title || !events.shortdescription || !events.eventsdatetime || !file){
      toast.error("Please fill all fields");
      return;
    }
    const Data = {
      ...events,
      file: file ? file : undefined,
    };
    setLoading(true);
    try {
      const { data } = await axios.put(
        `http://localhost:3001/api/v1/events/${updateId}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setevents({
          title: "",
          shortdescription: "",
          longdesc: "",
          link: "",
        });
        setUpdateId("");
        setFile(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleShowPopup = (item) => {
    setevents({
      title: item.title,
      shortdescription: item.shortdescription,
      eventsdatetime: item.eventsdatetime,
      link: item.link,
    });
    setShowPreview(item.fileurl);
    setUpdateId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
  };
  const handleClose = () => {
    setevents({
      title: "",
      shortdescription: "",
      eventsdatetime: "",
    });
    setShowPreview(null);
    setUpdateId("");
    setIsUpdate(false);
    setFile(null);
    setUploadFormOpen(false);
  };

  // Read All events
  const getAllEvents = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/v1/events");
      console.log(res.data);
      if (res.data.success) {
        setData(res.data.events);
        setFilterData(res.data.events);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete events
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this ?");

    if (confirm) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
      };
      const { data } = await axios.delete(`http://localhost:3001/api/v1/events/${id}`, config);

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
        setFilterData([...data].sort((a, b) => new Date(b.createdat) - new Date(a.createdat)));
        break;
      case "Oldest":
        setFilterData([...data].sort((a, b) => new Date(a.createdat) - new Date(b.createdat)));
        break;
      default:
        break;
    }
  };

  const handleSearch = () => {
    const filterData1 = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearch("");
    setFilterData(filterData1);
  };

  useEffect(() => {
    getAllEvents();
    // eslint-disable-next-line
  }, [isDelete]);

  return (
    <div style={{ position: "relative" }}>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All events</h1>
          <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
            <AiOutlinePlus size={25} style={{ cursor: "pointer" }} />
            <h2>Add events</h2>
          </div>
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search By title"
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
                            selectedSortValue === item ? "dropdown-item selected" : "dropdown-item"
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
          <div className="grid-header">Date and Time</div>
          <div className="grid-header">Action</div>
          {filterData?.length > 0 &&
            filterData.map((events) => (
              <React.Fragment key={events.id}>
                <div className="grid-item" data-label="ID">
                  {events.id}
                </div>
                <div className="grid-item" data-label="Title">
                  {events.title}
                </div>
                <div className="grid-item" data-label="Events Date And Time">
                  {events.eventsdatetime}
                  <span className="tooltip">{events.eventsdatetime}</span>
                </div>
                <div className="grid-item" data-label="Action">
                  <div className="action-icons">
                    <AiFillEdit size={25} onClick={() => handleShowPopup(events)} />
                    <MdDelete size={25} color="red" onClick={() => handleDelete(events.id)} />
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>

      {loading ? (<Loader/>) :(
        uploadFormOpen && <div className="upload-form-container-2">
          <div className="upload-form">
            <div className="close-btn" onClick={() => handleClose()}>
              <AiFillCloseCircle size={30} />
            </div>
            <h1>Create events</h1>
            <div className="inputContainer">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={events.title}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Short Desc"
                name="shortdescription"
                value={events.shortdescription}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Link"
                name="link"
                value={events.link}
                onChange={handleDataChange}
              />
              <input
                type="datetime-local"
                placeholder="Event date and time"
                name="eventsdatetime"
                value={events.eventsdatetime}
                onChange={handleDataChange}
              />
              <input
                type="file"
                id="events"
                name="events"
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

export default EventsOverview;
