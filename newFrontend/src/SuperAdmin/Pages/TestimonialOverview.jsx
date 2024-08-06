import React, { useEffect } from "react";
import { GrSort } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "../../style/Dashboard.css";
import axios from "axios";
import { AiFillEdit, AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
const sortList = ["Newest", "Oldest"];

function TestimonialOverview() {
  const [isDelete, setIsDelete] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);
  const [selectedSortValue, setSelectedSortValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [uploadFormOpen, setUploadFormOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [showPreview, setShowPreview] = React.useState("");
  const [testimonial, setTestimonial] = React.useState({
    name: "",
    comment: "",
    role: "",
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
    if (e.target.name === "testimonial") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile(reader.result);
          setShowPreview(null);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setTestimonial({ ...testimonial, [e.target.name]: e.target.value });
    }
  };

  // Create testimonial
  const handleUpload = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/testimonial/upload",
        { ...testimonial, file },
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setTestimonial({
          name: "",
          comment: "",
          role: "",
        });
        setFile(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Read All testimonial
  const getAllTestimonials = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/testimonials");

      if (res.data.success) {
        setData(res.data.testimonial);
        setFilterData(res.data.testimonial);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update testimonial
  const handleUpdate = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };

    const Data = {
      ...testimonial,
      file: file ? file : undefined,
    };
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/testimonial/${updateId}`,
        Data,
        config
      );

      if (data.success) {
        setUploadFormOpen(false);
        setIsDelete(!isDelete);
        setTestimonial({
          name: "",
          comment: "",
          role: "",
        });
        setUpdateId("");
        setFile(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleShowPopup = (item) => {
    setTestimonial({
      name: item.name,
      comment: item.comment,
      role: item.role,
    });
    setShowPreview(item.fileurl);
    setUpdateId(item.id);
    setIsUpdate(true);
    setUploadFormOpen(true);
  };
  const handleClose = () => {
    setTestimonial({
      name: "",
      comment: "",
      role: "",
    });
    setShowPreview(null);
    setUpdateId("");
    setIsUpdate(false);
    setFile(null);
    setUploadFormOpen(false);
  };

  // Delete testimonial
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
        `http://localhost:3000/api/v1/testimonial/${id}`,
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
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filterData1);
  };

  useEffect(() => {
    getAllTestimonials();
    // eslint-disable-next-line
  }, [isDelete]);
  return (
    <div style={{ position: "relative" }}>
      <div className="filter-membership-container">
        <div className="header-table">
          <h1>All Testimonial</h1>
          <div className="add-btn" onClick={() => setUploadFormOpen(true)}>
            <AiOutlinePlus size={25} style={{ cursor: "pointer" }} />
            <h2>Add testimonial</h2>
          </div>
        </div>
        <div className="filter-membership-item">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search By testimonial name"
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
            filterData.map((testimonial) => (
              <React.Fragment key={testimonial.id}>
                <div className="grid-item" data-label="ID">
                  {testimonial.id}
                </div>
                <div className="grid-item" data-label="Full Name">
                  {testimonial.name}
                </div>
                <div className="grid-item" data-label="Role">
                  {testimonial.role}
                  <span className="tooltip">{testimonial.role}</span>
                </div>
                <div className="grid-item" data-label="Action">
                  <div className="action-icons">
                    <AiFillEdit
                      size={25}
                      onClick={() => handleShowPopup(testimonial)}
                    />
                    <MdDelete
                      size={25}
                      color="red"
                      onClick={() => handleDelete(testimonial.id)}
                    />
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
            {!isUpdate ? (
              <h1>Create testimonial</h1>
            ) : (
              <h1>Update testimonial</h1>
            )}
            <div className="inputContainer">
              <input
                type="text"
                placeholder="Full name"
                name="name"
                value={testimonial.name}
                onChange={handleDataChange}
              />
              <input
                type="text"
                placeholder="Role"
                name="role"
                value={testimonial.role}
                onChange={handleDataChange}
              />
            </div>
            <textarea
              placeholder="Comment"
              name="comment"
              value={testimonial.comment}
              onChange={handleDataChange}
            />
            <input
              type="file"
              id="testimonial"
              name="testimonial"
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
      )}
    </div>
  );
}

export default TestimonialOverview;
