import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";
import {
  AiFillEdit,
  AiOutlinePlus,
  AiFillCloseCircle,
} from "react-icons/ai";
import Loader from "../../common/Loader";
import { toast } from "react-hot-toast";
const sortList = ["Newest", "Oldest"];

function KeyContactsOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [id, setId] = React.useState("");
  const [loading,setLoading] = React.useState(false)
  const [keycontact, setKeycontact] = React.useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
  });

  // Get token from cookie
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

  // Handle Data Change
  const handleDataChange = (e) => {
    setKeycontact({ ...keycontact, [e.target.name]: e.target.value });
  };

  // Upload Key Contact
  const handleUpload = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    if (
      keycontact.name === "" ||
      keycontact.email === "" ||
      keycontact.phone === "" ||
      keycontact.organization === "" ||
      keycontact.designation === ""
    ) {
      toast.error("Please Fill All Fields");
      return;
    }
    setLoading(true)
    const Data = {
      name: keycontact.name,
      email: keycontact.email,
      phone: keycontact.phone,
      organization: keycontact.organization,
      designation: keycontact.designation,
    };

    try {
      const { data } = await axios.post(
        "https://thepankh.info/api/common//keycontact/register",
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setKeycontact({
          name: "",
          email: "",
          phone: "",
          organization: "",
          designation: "",
        });
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  // Get All Key Contacts
  const getAllContacts = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
      };

      const res = await axios.get(
        "https://thepankh.info/api/common//keycontact/all",
        config
      );
      if (res.data.success) {
        setData(res.data.keyContacts);
        setFilterData(res.data.keyContacts);
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
        "Content-Type": "application/json",
      },
    };
    if (
      keycontact.name === "" ||
      keycontact.email === "" ||
      keycontact.phone === "" ||
      keycontact.organization === "" ||
      keycontact.designation === ""
    ) {
      toast.error("Please Fill All Fields");
      return;
    }
    setLoading(true)
    const Data = {
      name: keycontact.name,
      email: keycontact.email,
      phone: keycontact.phone,
      organization: keycontact.organization,
      designation: keycontact.designation,
    };
    try {
      const { data } = await axios.put(
        `https://thepankh.info/api/common/keycontact/${id}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setId("");
        setKeycontact({
          name: "",
          email: "",
          phone: "",
          organization: "",
          designation: "",
        });
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  const handleShowPopup = (item) => {
    setId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
    setKeycontact({
      name: item.name,
      email: item.email,
      phone: item.phone,
      organization: item.organization,
      designation: item.designation,
    });
  };
  const handleClose = () => {
    setId("");
    setIsUpdate(false);
    setUploadFormOpen(false);
    setKeycontact({
      name: "",
      email: "",
      phone: "",
      organization: "",
      designation: "",
    });
  };

  // Delete Key Contact
  const handleDelete = async (id) => {
    console.log("delete", id);
    const confirm = window.confirm("Are you sure you want to delete this ?");

    if (confirm) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
      };
      const { data } = await axios.delete(
        `https://thepankh.info/api/common/keycontact/${id}`,
        config
      );
      console.log(data);
      if (data.success) {
        setIsDelete(!isDelete);
      }
    }
  };

  // Sort Option Click
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
      item.email.toLowerCase().includes(search.toLowerCase())
    );
    setSearch("");
    setFilterData(filterData1);
  };

  useEffect(() => {
    getAllContacts();
    // eslint-disable-next-line
  }, [isDelete]);

  return (
    <div style={{ position: "relative" }}>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All Key Contacts</h1>
          <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
            <AiOutlinePlus size={25} style={{ cursor: "pointer" }} />
            <h2>Add Key Contacts</h2>
          </div>
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search By Email"
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

      <div className="keycontact-table-container">
        <div className="grid-container">
          <div className="grid-header">ID</div>
          <div className="grid-header">Name</div>
          <div className="grid-header">Email</div>
          <div className="grid-header">Phone</div>
          <div className="grid-header">Organization</div>
          <div className="grid-header">Designation</div>
          <div className="grid-header">Action</div>
          {filterData?.length > 0 &&
            filterData.map((contact) => (
              <React.Fragment key={contact.id}>
                <div className="grid-item" data-label="ID">
                  {contact.id.substring(0, 15)}...
                  <span className="tooltip">{contact.id}</span>
                </div>
                <div className="grid-item" data-label="Name">
                  {contact.name}
                  <span className="tooltip">{contact.name}</span>
                </div>
                <div className="grid-item" data-label="Email">
                  {contact.email}
                  <span className="tooltip">{contact.email}</span>
                </div>
                <div className="grid-item" data-label="Phone">
                  {contact.phone}
                  <span className="tooltip">{contact.phone}</span>
                </div>
                <div className="grid-item" data-label="Organization">
                  {contact.organization}
                  <span className="tooltip">{contact.organization}</span>
                </div>
                <div className="grid-item" data-label="Designation">
                  {contact.designation}
                  <span className="tooltip">{contact.designation}</span>
                </div>
                <div className="grid-item" data-label="Message">
                  <div className="action-icons">
                    <AiFillEdit
                      size={25}
                      onClick={() => handleShowPopup(contact)}
                    />
                    <MdDelete
                      size={25}
                      color="red"
                      onClick={() => handleDelete(contact.id)}
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>

      {loading ? (<Loader/>): (
        uploadFormOpen && <div className="upload-form-container">
          <div className="upload-form">
            <div className="close-btn" onClick={() => handleClose()}>
              <AiFillCloseCircle size={30} />
            </div>
            <h1>Upload Carousal</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={keycontact.name}
              onChange={handleDataChange}
            />
            <input
              type="text"
              placeholder="Email"
              value={keycontact.email}
              name="email"
              onChange={handleDataChange}
            />
            <input
              type="text"
              placeholder="Phone"
              value={keycontact.phone}
              name="phone"
              onChange={handleDataChange}
            />
            <input
              type="text"
              placeholder="Organization"
              value={keycontact.organization}
              name="organization"
              onChange={handleDataChange}
            />
            <input
              type="text"
              placeholder="Designation"
              value={keycontact.designation}
              name="designation"
              onChange={handleDataChange}
            />

            {!isUpdate ? (
              <button onClick={handleUpload}>Submit</button>
            ) : (
              <button onClick={handleUpdate}>Update</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default KeyContactsOverview;
