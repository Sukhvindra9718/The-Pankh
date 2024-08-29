import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";
import { AiFillEdit, AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import Loader from "../../common/Loader";
import { toast } from "react-hot-toast";
const sortList = ["Newest", "Oldest"];

function DonationsOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [showPreview, setShowPreview] = React.useState("");
  const [Donations, setDonations] = React.useState({
    id: "",
    fullname: "",
    email: "",
    phonenumber: "",
    country: "",
    amount: "",
    utrnumber: "",
    donationdatetime: "",
    remarks: "",
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
    if (e.target.name === "Donations") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile(reader.result);
          setShowPreview(null);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setDonations({ ...Donations, [e.target.name]: e.target.value });
    }
  };

  // Create Donations
  const handleUpload = async () => {
    console.log(Donations);
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
      },
    };
    if(Donations.fullname === "" || Donations.email === "" || Donations.phonenumber === "" || Donations.country === "" || Donations.amount === "" || Donations.utrnumber === "" || file == ""){
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://165.227.97.26/api/v1/Donation/upload",
        { ...Donations, file },
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setDonations({
          id: "",
          fullname: "",
          email: "",
          phonenumber: "",
          country: "",
          amount: "",
          utrnumber: "",
          donationdatetime: "",
          remarks: "",
        });
        setFile(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Update Donations
  const handleUpdate = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    if(Donations.fullname === "" || Donations.email === "" || Donations.phonenumber === "" || Donations.country === "" || Donations.amount === "" || Donations.utrnumber === "" || file == ""){
      toast.error("Please fill all the fields");
      return;
    }
    const Data = {
      ...Donations,
      file: file ? file : undefined,
    };
    setLoading(true);
    try {
      const { data } = await axios.put(
        `http://165.227.97.26/api/v1/Donation/${updateId}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setDonations({
          fullname: "",
          email: "",
          phonenumber: "",
          country: "",
          amount: "",
          utrnumber: "",
          donationdatetime: "",
          remarks: "",
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
    setDonations({
      id: item.id,
      fullname: item.fullname,
      email: item.email,
      phonenumber: item.phonenumber,
      country: item.country,
      amount: item.amount,
      utrnumber: item.utrnumber,
      donationdatetime: item.donationdatetime,
      remarks: item.remarks,
    });
    setShowPreview(item.fileurl);
    setUpdateId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
  };
  const handleClose = () => {
    setDonations({
      fullname: "",
      email: "",
      phonenumber: "",
      country: "",
      amount: "",
      utrnumber: "",
      donationdatetime: "",
    });
    setShowPreview(null);
    setUpdateId("");
    setIsUpdate(false);
    setFile(null);
    setUploadFormOpen(false);
  };

  // Read All Donations
  const getAllDonations = async () => {
    try {
      const res = await axios.get("http://165.227.97.26/api/v1/Donations");
      console.log(res.data);
      if (res.data.success) {
        setData(res.data.Donations);
        setFilterData(res.data.Donations);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Donations
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this ?");

    if (confirm) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
      };
      const { data } = await axios.delete(`http://165.227.97.26/api/v1/Donation/${id}`, config);

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
      item.fullname.toLowerCase().includes(search.toLowerCase())
    );
    setSearch("");
    setFilterData(filterData1);
  };

  useEffect(() => {
    getAllDonations();
    // eslint-disable-next-line
  }, [isDelete]);

  return (
    <div style={{ position: "relative" }}>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All Donations</h1>
          <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
            <AiOutlinePlus size={25} style={{ cursor: "pointer" }} />
            <h2>Add Donations</h2>
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
        <div className="grid-container-dynamic">
          <div className="grid-header-container">
            <div className="grid-header">FullName</div>
            <div className="grid-header">Amount</div>
            <div className="grid-header">UTR Number</div>
            <div className="grid-header">Screenshot</div>
            <div className="grid-header">Date and Time</div>
            <div className="grid-header">Action</div>
          </div>
          {filterData?.length > 0 &&
            filterData.map((Donations) => (
              <React.Fragment key={Donations.id}>
                <div className="grid-item-container">
                  <div className="grid-item" data-label="ID">
                    {Donations.fullname}
                  </div>
                  <div className="grid-item" data-label="Amount">
                    {Donations.amount}
                  </div>
                  <div className="grid-item" data-label="UTR Number">
                    {Donations.utrnumber}
                  </div>
                  <div className="grid-item" style={{textAlign: "center"}} data-label="Screenshot">
                    <a href={Donations.fileurl}target="_blank" rel="noopener noreferrer">
                      <FaRegEye />
                    </a>
                  </div>
                  <div className="grid-item" data-label="Donation Date Time">
                    {Donations.donationdatetime}
                    <span className="tooltip">{Donations.donationdatetime}</span>
                  </div>
                  <div className="grid-item" data-label="Action">
                    <div className="action-icons">
                      <AiFillEdit size={25} onClick={() => handleShowPopup(Donations)} />
                      <MdDelete size={25} color="red" onClick={() => handleDelete(Donations.id)} />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>

      {loading ? (<Loader/>): (
        uploadFormOpen && <div className="upload-form-container-2">
          <div className="upload-form">
            <div className="close-btn" onClick={() => handleClose()}>
              <AiFillCloseCircle size={30} />
            </div>
            <h1>Create Donation</h1>
            <div className="inputContainer">
              <input
                type="text"
                placeholder="Full name"
                name="fullname"
                value={Donations.fullname}
                onChange={handleDataChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={Donations.email}
                onChange={handleDataChange}
              />
              <input
                type="number"
                placeholder="Phone Number"
                name="phonenumber"
                value={Donations.phonenumber}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={Donations.country}
                onChange={handleDataChange}
              />
              <input
                type="number"
                placeholder="Amount"
                name="amount"
                value={Donations.amount}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="UTR Number"
                name="utrnumber"
                value={Donations.utrnumber}
                onChange={handleDataChange}
              />
              <input
                type="file"
                id="Donations"
                name="Donations"
                accept="image/*"
                onChange={handleDataChange}
              />
              <textarea
                type="text"
                placeholder="Remarks"
                name="remarks"
                value={Donations.remarks}
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

export default DonationsOverview;
