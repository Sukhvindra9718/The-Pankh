import React, { useEffect, useState } from "react";
import "../../style/Dashboard.css";
import axios from "axios";
import Loader from "../../common/Loader";
import { API_URL,PROD_URL,ENV } from "../../config";
function DashboardOverview() {
  const [rowCount, setRowCount] = useState([]);
  const [Loading, setLoading] = useState(false);
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

  const getAllCounts = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `${getTokenFromCookie()}`,
        },
      };

      const {data} = await axios.get(
        `${ENV === "dev" ? API_URL:PROD_URL}/api/common/getTableRow/count`,
        config
      );

      if(data.success){
        setRowCount(data.result);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCounts();
  }, []);

  return Loading ? (<Loader/>):(
    <div className="Count-Container">
      {rowCount.length > 0 &&
        rowCount.map((data, index) => (
          <div key={index} className="Count-Card" style={{cursor:"pointer"}}>
            <span>{data.tableName}</span>
            <span>{data.count}</span>
          </div>
        ))}
    </div>
  );
}

export default DashboardOverview;
