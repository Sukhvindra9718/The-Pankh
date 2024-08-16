import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";
import { AiFillEdit, AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
const sortList = ["Newest", "Oldest"];

function BankDetailsOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [showPreview, setShowPreview] = React.useState("");
  const [BankDetails, setBankDetails] = React.useState({
    id: "",
    ifsccode: "",
    accountnumber: "",
    branchname: "",
    upiid: "",
  });
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [updateId, setUpdateId] = React.useState(null);

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
    if (e.target.name === "BankDetails") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile(reader.result);
          setShowPreview(null);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setBankDetails({ ...BankDetails, [e.target.name]: e.target.value });
    }
  };

  // Create BankDetails
  const handleUpload = async () => {
    console.log(BankDetails);
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/BankDetails/upload",
        { ...BankDetails, file },
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setBankDetails({
          id: "",
          ifsccode: "",
          accountnumber: "",
          branchname: "",
          upiid: "",
        });
        setFile(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update BankDetails
  const handleUpdate = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };

    const Data = {
      ...BankDetails,
      file: file ? file : undefined,
    };
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/BankDetails/${updateId}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setBankDetails({
          ifsccode: "",
          accountnumber: "",
          branchname: "",
          upiid: "",
        });
        setUpdateId("");
        setFile(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowPopup = (item) => {
    setBankDetails({
      id: item.id,
      ifsccode: item.ifsccode,
      accountnumber: item.accountnumber,
      branchname: item.branchname,
      upiid: item.upiid,
    });
    setShowPreview(item.fileurl);
    setUpdateId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
  };
  const handleClose = () => {
    setBankDetails({
      ifsccode: "",
      accountnumber: "",
      branchname: "",
      upiid: "",
    });
    setShowPreview(null);
    setUpdateId("");
    setIsUpdate(false);
    setFile(null);
    setUploadFormOpen(false);
  };

  // Read All BankDetails
  const getAllBankDetails = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/BankDetails");
      console.log(res.data);
      if (res.data.success) {
        setData(res.data.BankDetails);
        setFilterData(res.data.BankDetails);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete BankDetails
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this ?");

    if (confirm) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
      };
      const { data } = await axios.delete(`http://localhost:3000/api/v1/BankDetails/${id}`, config);

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
      item.username.toLowerCase().includes(search.toLowerCase())
    );
    setSearch("");
    setFilterData(filterData1);
  };

  useEffect(() => {
    getAllBankDetails();
    // eslint-disable-next-line
  }, [isDelete]);

  return (
    <div style={{ position: "relative" }}>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All BankDetails</h1>
          { filterData.length === 0 &&
            <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
              <AiOutlinePlus size={25} style={{ cursor: "pointer" }} />
              <h2>Add BankDetails</h2>
            </div>
          }
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search By BankDetails name"
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
          <div className="grid-header">UPI ID</div>
          <div className="grid-header">IFSC code</div>
          <div className="grid-header">Account Number</div>
          <div className="grid-header">Action</div>
          {filterData?.length > 0 &&
            filterData.map((BankDetails) => (
              <React.Fragment key={BankDetails.id}>
                <div className="grid-item" data-label="ID">
                  {BankDetails.upiid}
                </div>
                <div className="grid-item" data-label="ifsccode">
                  {BankDetails.ifsccode}
                </div>
                <div className="grid-item" data-label="accountnumber">
                  {BankDetails.accountnumber}
                  <span className="tooltip">{BankDetails.accountnumber}</span>
                </div>
                <div className="grid-item" data-label="Action">
                  <div className="action-icons">
                    <AiFillEdit size={25} onClick={() => handleShowPopup(BankDetails)} />
                    <MdDelete size={25} color="red" onClick={() => handleDelete(BankDetails.id)} />
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>

      {uploadFormOpen && (
        <div className="upload-form-container-2">
          <div className="upload-form">
            <div className="close-btn" onClick={() => handleClose()}>
              <AiFillCloseCircle size={30} />
            </div>
            <h1>Create Donation</h1>
            <div className="inputContainer">
              <input
                type="text"
                placeholder="UPI id"
                name="upiid"
                value={BankDetails.upiid}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="IFSC code"
                name="ifsccode"
                value={BankDetails.ifsccode}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Account Number"
                name="accountnumber"
                value={BankDetails.accountnumber}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Branch Name"
                name="branchname"
                value={BankDetails.branchname}
                onChange={handleDataChange}
              />
              <input
                type="file"
                id="BankDetails"
                name="BankDetails"
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

export default BankDetailsOverview;
