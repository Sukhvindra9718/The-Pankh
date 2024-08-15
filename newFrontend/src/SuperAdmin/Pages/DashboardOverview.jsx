import React, { useEffect, useState } from "react";
import "../../style/Dashboard.css";
import axios from "axios";

function DashboardOverview() {
  const urls = [
    "user/getuser",
    "common/getcontact",
    "common/getkeycontact",
    "v1/getbanner",
    "v1/getcarousal",
    "v1/getimage",
    "v1/getvideo",
    "v1/countNews",
    "v1/events",
    "v1/Donations",
  ];
  const [rowCount, setRowCount] = useState([]);

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
  useEffect(() => {
    const getAllCounts = async () => {
      try {
        const config = {
          headers: {
            Authorization: `${getTokenFromCookie()}`,
          },
        };
        // Use Promise.all to wait for all API calls
        const responses = await Promise.all(
          urls.map(async (url) => {
            const res = await axios.get(`http://localhost:3000/api/${url}/count`, config);
            return res.data;
          })
        );
        console.log(responses);
        // Extract relevant data from responses
        const arr = responses.map((data) => ({
          tableName: data.tableName,
          count: data.count,
        }));
        console.log(arr);
        setRowCount(arr);
      } catch (error) {
        console.log(error);
      }
    };

    return () => getAllCounts();
  }, []);

  return (
    <div className="Count-Container">
      {rowCount.length > 0 &&
        rowCount.map((data, index) => (
          <div key={index} className="Count-Card">
            <span>{data.tableName}</span>
            <span>{data.count}</span>
          </div>
        ))}
    </div>
  );
}

export default DashboardOverview;
