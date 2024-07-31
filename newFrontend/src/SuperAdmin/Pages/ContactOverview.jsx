import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";

const sortList = ["Newest", "Oldest"];
function ContactOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");


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

  const getAllContacts = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
      };

      const res = await axios.get(
        "http://localhost:3000/api/common/contact/all",
        config
      );
      if (res.data.success) {
        setData(res.data.contacts);
        setFilterData(res.data.contacts);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts();
    // eslint-disable-next-line
  }, [isDelete]);


  const handleDelete = async (id) => {
    console.log("delete", id);
    const confirm = window.confirm(
      "Are you sure you want to delete this ?"
    );

    if (confirm) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
      };
      const { data } = await axios.delete(`http://localhost:3000/api/common/contact/delete/${id}`,config);
      console.log(data);
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
      item.email.toLowerCase().includes(search.toLowerCase())
    );
    setSearch("");
    setFilterData(filterData1);
  };

  return (
    <div>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All Contacts</h1>
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search By Email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{fontSize: "1rem"}}
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
      {/* 
      <div className="table-container">
        <div className="header">
          <div className="header-item">
            <h2>Id</h2>
          </div>
          <div className="header-item">
            <h2>Name</h2>
          </div>
          <div className="header-item">
            <h2>Phone</h2>
          </div>
          <div className="header-item">
            <h2>Email</h2>
          </div>
          <div className="header-item">
            <h2>Action</h2>
          </div>
        </div>
        <div className="table-body">
          {filterData?.length > 0 &&
            data.map((item, index) => (
              <div key={index}>
                <div className="table-row">
                  <div className="body-item">
                    <h2>{item.id}</h2>
                  </div>
                  <div className="body-item">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="body-item">
                    <h2>{item.phone}</h2>
                  </div>
                  <div className="body-item">
                    <h2>{item.email}</h2>
                  </div>
                  <div className="body-item">
                    <div className="actions">
                      <AiFillEye
                        size={25}
                        onClick={() => handleShowImage(item.id)}
                      />
                      <AiFillEdit
                        size={25}
                        onClick={() => handleUpdate(item)}
                      />
                      <MdDelete
                        size={25}
                        onClick={() => handleDelete(item.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div> */}
      <div className="table-container">
        <div className="grid-container">
          <div className="grid-header">ID</div>
          <div className="grid-header">Name</div>
          <div className="grid-header">Email</div>
          <div className="grid-header">Phone</div>
          <div className="grid-header">Organization</div>
          <div className="grid-header">Designation</div>
          <div className="grid-header">Message</div>
          <div className="grid-header">Action</div>
          {filterData.map((contact) => (
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
                {contact.message}
                <span className="tooltip">{contact.message}</span>
              </div>
              <div className="grid-item" data-label="Message">
                <div className="action-icons">
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
    </div>
  );
}

export default ContactOverview;
