import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";
import { AiFillEdit, AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
import Loader from "../../common/Loader";
import { toast } from "react-hot-toast";
const sortList = ["Newest", "Oldest"];

function UserOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [showPreview, setShowPreview] = React.useState("");
  const [user, setUser] = React.useState({
    username: "",
    phonenumber: "",
    password: "",
    role: "",
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
    if (e.target.name === "user") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile(reader.result);
          setShowPreview(null);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  // Create user
  const handleUpload = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
      },
    };

    if (
      user.username == "" ||
      user.phonenumber == "" ||
      user.role == "" ||
      user.password == ""
    ) {
      return toast.error("Please fill all the fields");
    }
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://165.227.97.26:3001/api/auth/register",
        { ...user, file },
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setUser({
          username: "",
          phonenumber: "",
          password: "",
          role: "",
        });
        setFile(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Read All user
  const getAllUsers = async () => {
    try {
      const config = {
        headers: {
          Authorization: `${getTokenFromCookie()}`,
        },
      };
      const res = await axios.get(
        "http://165.227.97.26:3001/api/v1/getallusers",
        config
      );

      if (res.data.success) {
        setData(res.data.users);
        setFilterData(res.data.users);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update user
  const handleUpdate = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    if (
      user.username == "" ||
      user.phonenumber == "" ||
      user.role == "" ||
      user.password == ""
    ) {
      return toast.error("Please fill all the fields");
    }
    setLoading(true);
    const Data = {
      ...user,
      file: file ? file : undefined,
    };
    try {
      const { data } = await axios.put(
        `http://165.227.97.26:3001/api/v1/user/update/${updateId}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setUser({
          username: "",
          phonenumber: "",
          password: "",
          role: "",
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
    setUser({
      username: item.username,
      phonenumber: item.phonenumber,
      role: item.role,
    });
    setShowPreview(item.fileurl);
    setUpdateId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
  };
  const handleClose = () => {
    setUser({
      username: "",
      phonenumber: "",
      role: "",
    });
    setShowPreview(null);
    setUpdateId("");
    setIsUpdate(false);
    setFile(null);
    setUploadFormOpen(false);
  };

  // Delete user
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
        `http://165.227.97.26:3001/api/user/delete/${id}`,
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
    getAllUsers();
    // eslint-disable-next-line
  }, [isDelete]);
  return (
    <div style={{ position: "relative" }}>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All User</h1>
          <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
            <AiOutlinePlus size={25} style={{ cursor: "pointer" }} />
            <h2>Add user</h2>
          </div>
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search By username"
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
        <div className="grid-container-dynamic">
          <div className="grid-header-container">
            <div className="grid-header">ID</div>
            <div className="grid-header">Username</div>
            <div className="grid-header">Phonenumber</div>
            <div className="grid-header">Role</div>
            <div className="grid-header">Action</div>
            </div>
            <div className="grid-item-container">
            {filterData?.length > 0 &&
              filterData.map((user) => (
                <React.Fragment key={user.id}>
                  <div className="grid-item" data-label="ID">
                    {user.id}
                  </div>
                  <div className="grid-item" data-label="Username">
                    {user.username}
                  </div>
                  <div className="grid-item" data-label="phonenumber">
                    {user.phonenumber}
                  </div>
                  <div className="grid-item" data-label="Role">
                    {user.role}
                    <span className="tooltip">{user.role}</span>
                  </div>
                  <div className="grid-item" data-label="Action">
                    <div className="action-icons">
                      <AiFillEdit
                        size={25}
                        onClick={() => handleShowPopup(user)}
                      />
                      <MdDelete
                        size={25}
                        color="red"
                        onClick={() => handleDelete(user.id)}
                      />
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        uploadFormOpen && (
          <div className="upload-form-container-2">
            <div className="upload-form">
              <div className="close-btn" onClick={() => handleClose()}>
                <AiFillCloseCircle size={30} />
              </div>
              {!isUpdate ? <h1>Create user</h1> : <h1>Update user</h1>}
              <div className="inputContainer">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={user.username}
                  onChange={handleDataChange}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phonenumber"
                  value={user.phonenumber}
                  onChange={handleDataChange}
                />
                <input
                  type="text"
                  placeholder="Role eg. (superadmin, admin, user)"
                  name="role"
                  value={user.role}
                  onChange={handleDataChange}
                />
                {!isUpdate && (
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleDataChange}
                  />
                )}
              </div>
              <input
                type="file"
                id="user"
                name="user"
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
        )
      )}
    </div>
  );
}

export default UserOverview;
