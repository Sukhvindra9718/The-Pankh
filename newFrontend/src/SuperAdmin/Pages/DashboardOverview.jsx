import React, { useEffect, useState } from "react";
import "../../style/Dashboard.css";
import axios from "axios";

function DashboardOverview() {
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

        const {data} = await axios.get(
          `http://165.227.97.26:3001/api/common/getTableRow/count`,
          config
        );

        if(data.success){
          setRowCount(data.result);
        }

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
          <div key={index} className="Count-Card" style={{cursor:"pointer"}}>
            <span>{data.tableName}</span>
            <span>{data.count}</span>
          </div>
        ))}
    </div>
  );
}

export default DashboardOverview;
