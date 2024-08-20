import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";
import { AiFillEdit, AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
import Loader from "../../common/Loader";
const sortList = ["Newest", "Oldest"];

function FundOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [showPreview, setShowPreview] = React.useState("");
  const [fund, setFund] = React.useState({
    title: "",
    description: "",
    goalprice: "",
    raisedprice: "",
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
    if (e.target.name === "fund") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile(reader.result);
          setShowPreview(null);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFund({ ...fund, [e.target.name]: e.target.value });
    }
  };

  // Create fund
  const handleUpload = async () => {

    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
      },
    };
    if (!fund.title || !fund.description || !fund.goalprice || !file || !fund.raisedprice) {
      alert("Please fill all the fields");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/fundDetails/upload",
        { ...fund, file },
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setFund({
          title: "",
          description: "",
          goalprice: "",
          raisedprice: ""
        });
        setFile(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Update fund
  const handleUpdate = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    if (!fund.title || !fund.description || !fund.goalprice || !file || !fund.raisedprice) {
      alert("Please fill all the fields");
      return;
    }
    const Data = {
      ...fund,
      file: file ? file : undefined,
    };
    setLoading(true);
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/fundDetails/${updateId}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setFund({
          title: "",
          description: "",
          longdesc: "",
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
    setFund({
      title: item.title,
      description: item.description,
      goalprice: item.goalprice,
    });
    setShowPreview(item.fileurl);
    setUpdateId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
  };
  const handleClose = () => {
    setFund({
      title: "",
      description: "",
      goalprice: "",
      raisedprice: "",
    });
    setShowPreview(null);
    setUpdateId("");
    setIsUpdate(false);
    setFile(null);
    setUploadFormOpen(false);
  };

  // Read All fund
  const getAllfund = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/fundDetails");
      console.log(res.data);
      if (res.data.success) {
        setData(res.data.fund);
        setFilterData(res.data.fund);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete fund
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this ?");

    if (confirm) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
      };
      const { data } = await axios.delete(`http://localhost:3000/api/v1/fundDetails/${id}`, config);

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
    getAllfund();
    // eslint-disable-next-line
  }, [isDelete]);

  return (
    <div style={{ position: "relative" }}>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All fund</h1>
          <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
            <AiOutlinePlus size={25} style={{ cursor: "pointer" }} />
            <h2>Add fund</h2>
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
          <div className="grid-header">Goal price</div>
          <div className="grid-header">Action</div>
          {filterData?.length > 0 &&
            filterData.map((fund) => (
              <React.Fragment key={fund.id}>
                <div className="grid-item" data-label="ID">
                  {fund.id}
                </div>
                <div className="grid-item" data-label="Title">
                  {fund.title}
                </div>
                <div className="grid-item" data-label="Short Desc">
                  {fund.goalprice}
                  <span className="tooltip">{fund.goalprice}</span>
                </div>
                <div className="grid-item" data-label="Action">
                  <div className="action-icons">
                    <AiFillEdit size={25} onClick={() => handleShowPopup(fund)} />
                    <MdDelete size={25} color="red" onClick={() => handleDelete(fund.id)} />
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
            <h1>Create fund</h1>
            <div className="inputContainer">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={fund.title}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={fund.description}
                onChange={handleDataChange}
              />
              <input
                type="number"
                placeholder="Goal price"
                name="goalprice"
                value={fund.goalprice}
                onChange={handleDataChange}
              />
              <input
                type="number"
                placeholder="Raised price"
                name="raisedprice"
                value={fund.raisedprice}
                onChange={handleDataChange}
              />
              <input
                type="file"
                id="fund"
                name="fund"
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

export default FundOverview;
