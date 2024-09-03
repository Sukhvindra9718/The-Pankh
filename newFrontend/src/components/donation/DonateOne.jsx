import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-hot-toast";

const DonateOne = () => {
  const [file, setFile] = React.useState("");
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
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setDonations({ ...Donations, [e.target.name]: e.target.value });
    }

    console.log(Donations.country);
  };

  // Create Donations
  const handleUpload = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
      },
    };
    if (!Donations.amount || !Donations.fullname || !Donations.email || !Donations.phonenumber || !Donations.country || !Donations.remarks) {
      toast.error("Please fill all the fields!");
      return;
    }
    if(!Donations.utrnumber && !file) {
      toast.error("Please upload payment screenshot or enter UTR number!");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/Donation/upload",
        { ...Donations, file },
        config
      );

      if (data.success) {
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
        toast.success("Donation successful!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Donation failed!");
    }
  };

  const [BankDetails, setBankDetails] = useState({
    id: "",
    ifsccode: "",
    accountnumber: "",
    branchname: "",
    upiid: "",
    fileurl: "",
  });
  // Read All BankDetails
  const getAllBankDetails = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/v1/BankDetails");
      if (res.data.success) {
        if (res.data.BankDetails.length !== 0) {
          setBankDetails(res.data.BankDetails[0]);
        }
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBankDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="donate-now">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="donate-now__left">
              <div className="donate-now__enter-donation">
                <h3 className="donate-now__title">Enter Your Donation</h3>
                <div className="donate-now__enter-donation-input">
                  <select className="selectpicker">
                    <option>₹</option>
                    <option>रु</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    name="amount"
                    value={Donations.amount}
                    onChange={handleDataChange}
                  />
                </div>
              </div>
              <div className="donate-now__personal-info-box">
                <h3 className="donate-now__title">Personal Info</h3>
                <form className="donate-now__personal-info-form">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="donate-now__personal-info-input">
                        <input
                          type="text"
                          placeholder="Full name"
                          name="fullname"
                          value={Donations.fullname}
                          onChange={handleDataChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="donate-now__personal-info-input">
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={Donations.email}
                          onChange={handleDataChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="donate-now__personal-info-input">
                        <input
                          type="number"
                          placeholder="Phone Number"
                          name="phonenumber"
                          value={Donations.phonenumber}
                          onChange={handleDataChange}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="donate-now__personal-info-input">
                        <Form.Select
                          className="selectpicker"
                          onChange={handleDataChange}
                          aria-label="Default select example"
                          name="country"
                        >
                          <option value="" selected disabled>
                            Country
                          </option>
                          <option value="India">India</option>
                          <option value="Nepal">Nepal</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="donate-now__personal-info-input">
                        <input
                          type="text"
                          placeholder="UTR Number"
                          name="utrnumber"
                          value={Donations.utrnumber}
                          onChange={handleDataChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className="donate-now__personal-info-input"
                        style={{ backgroundColor: "rgb(255, 111, 15, 0.1)" }}
                      >
                        <label htmlFor="Donations">Upload Payment Screenshot</label>
                        <input
                          type="file"
                          id="Donations"
                          name="Donations"
                          accept="image/*"
                          onChange={handleDataChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="donate-now__personal-info-input donate-now__personal-info-message-box">
                        <textarea
                          type="text"
                          placeholder="Remarks"
                          name="remarks"
                          value={Donations.remarks}
                          onChange={handleDataChange}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="donate-now__payment-info">
                <h3 className="donate-now__title">Bank details</h3>
                <div className="donate-now__payment-info-form">
                  <div className="row">
                    <div className="col-xl-6">
                      <div
                        className="donate-now__payment-info-input"
                        style={{ display: "flex", gap: "20px" }}
                      >
                        <span class="section-title__tagline">IFSC Code</span>
                        <p class="about-one__text" style={{ color: "black" }}>
                          {BankDetails?.ifsccode}
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className="donate-now__payment-info-input"
                        style={{ display: "flex", gap: "20px" }}
                      >
                        <span class="section-title__tagline">Account number</span>
                        <p class="about-one__text" style={{ color: "black" }}>
                          {BankDetails?.accountnumber}
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className="donate-now__payment-info-input"
                        style={{ display: "flex", gap: "20px" }}
                      >
                        <span class="section-title__tagline">Bank Name</span>
                        <p class="about-one__text" style={{ color: "black" }}>
                          {BankDetails?.branchname}
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className="donate-now__payment-info-input"
                        style={{ display: "flex", gap: "20px" }}
                      >
                        <span class="section-title__tagline">UPI ID</span>
                        <p class="about-one__text" style={{ color: "black" }}>
                          {BankDetails?.upiid}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="donate-now__payment-info-btn-box">
                    <button className="thm-btn donate-now__payment-info-btn" onClick={handleUpload}>
                      Donate now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="donate-now__right">
              <div className="donate-now__causes">
                <div className="donate-now__causes-img">
                  <span class="section-title__tagline">QR Code</span>
                  <img src={BankDetails.fileurl} alt="" />
                </div>
                <div className="donate-now__causes-content-box">
                  <div className="donate-now__causes-content">
                    <div
                      className="donate-now__payment-info-input"
                      style={{ display: "flex", gap: "20px" }}
                    >
                      <span class="section-title__tagline">UPI ID</span>
                      <p class="about-one__text" style={{ color: "black" }}>
                        {BankDetails.upiid}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateOne;
