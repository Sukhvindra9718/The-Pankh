import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";
import { AiFillEdit, AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
import Loader from "../../common/Loader";
const sortList = ["Newest", "Oldest"];

function VolunteerOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [showPreview, setShowPreview] = React.useState("");
  const [volunteer, setVolunteer] = React.useState({
    username: "",
    phonenumber: "",
    role: "",
    facebookurl: "",
    twitterurl: "",
    instagramurl: "",
    linkedinurl: "",
  });
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

  // Handle Image
  const handleDataChange = (e) => {
    if (e.target.name === "volunteer") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile(reader.result);
          setShowPreview(null);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setVolunteer({ ...volunteer, [e.target.name]: e.target.value });
    }
  };

  // Create Volunteer
  const handleUpload = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
      },
    };
    if(volunteer.username == "" || volunteer.phonenumber == "" || volunteer.role == "" || file == ""){
      return alert("Username, Phonenumber, Role & Image cannot be empty")
    }
    setLoading(true)
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/volunteer/upload",
        { ...volunteer, file },
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setVolunteer({
          username: "",
          phonenumber: "",
          role: "",
          facebookurl: "",
          twitterurl: "",
          instagramurl: "",
          linkedinurl: "",
        });
        setFile(null);
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  // Read All Volunteer
  const getAllVolunteers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/volunteers");

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

  // Update Volunteer
  const handleUpdate = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    if(volunteer.username == "" || volunteer.phonenumber == "" || volunteer.role == "" || file == ""){
      return alert("Username, Phonenumber, Role & Image cannot be empty")
    }
    setLoading(true)
    const Data = {
      ...volunteer,
      file: file ? file : undefined,
    };
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/volunteer/${updateId}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setVolunteer({
          username: "",
          phonenumber: "",
          role: "",
          facebookurl: "",
          twitterurl: "",
          instagramurl: "",
          linkedinurl: "",
        });
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
    setVolunteer({
      username: item.username,
      phonenumber: item.phonenumber,
      role: item.role,
      facebookurl: item.facebookurl,
      twitterurl: item.twitterurl,
      instagramurl: item.instagramurl,
      linkedinurl: item.linkedinurl,
    });
    setShowPreview(item.fileurl);
    setUpdateId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
  };
  const handleClose = () => {
    setVolunteer({
      username: "",
      phonenumber: "",
      role: "",
      facebookurl: "",
      twitterurl: "",
      instagramurl: "",
      linkedinurl: "",
    });
    setShowPreview(null);
    setUpdateId("");
    setIsUpdate(false);
    setFile(null);
    setUploadFormOpen(false);
  };

  // Delete Volunteer
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
        `http://localhost:3000/api/v1/volunteer/${id}`,
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
            <h2>Add Volunteer</h2>
          </div>
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search By name"
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
          <div className="grid-header">Full Name</div>
          <div className="grid-header">Role</div>
          <div className="grid-header">Action</div>
          {filterData?.length > 0 &&
            filterData.map((volunteer) => (
              <React.Fragment key={volunteer.id}>
                <div className="grid-item" data-label="ID">
                  {volunteer.id}
                </div>
                <div className="grid-item" data-label="Full Name">
                  {volunteer.username}
                </div>
                <div className="grid-item" data-label="Role">
                  {volunteer.role}
                  <span className="tooltip">{volunteer.role}</span>
                </div>
                <div className="grid-item" data-label="Action">
                  <div className="action-icons">
                    <AiFillEdit
                      size={25}
                      onClick={() => handleShowPopup(volunteer)}
                    />
                    <MdDelete
                      size={25}
                      color="red"
                      onClick={() => handleDelete(volunteer.id)}
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>

      {loading ? (<Loader/>):(
        uploadFormOpen && <div className="upload-form-container-2">
          <div className="upload-form">
            <div className="close-btn" onClick={() => handleClose()}>
              <AiFillCloseCircle size={30} />
            </div>
            {!isUpdate ? (<h1>Create Volunteer</h1>) : (<h1>Update Volunteer</h1>)}
            <div className="inputContainer">
              <input
                type="text"
                placeholder="Full name"
                name="username"
                value={volunteer.username}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Phone number"
                name="phonenumber"
                value={volunteer.phonenumber}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Role"
                name="role"
                value={volunteer.role}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Facebook Page URL"
                name="facebookurl"
                value={volunteer.facebookurl}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Instagram Page URL"
                name="instagramurl"
                value={volunteer.instagramurl}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Twitter Page URL"
                name="twitterurl"
                value={volunteer.twitterurl}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="LinkedIn Page URL"
                name="linkedinurl"
                value={volunteer.linkedinurl}
                onChange={handleDataChange}
              />
              <input
                type="file"
                id="volunteer"
                name="volunteer"
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

export default VolunteerOverview;
