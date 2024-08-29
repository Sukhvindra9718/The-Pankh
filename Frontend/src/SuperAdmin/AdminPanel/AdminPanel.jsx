import React, {useEffect}  from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import '../../tyle/Dashboard.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [menuActive,setMenuActive]=React.useState(0)
  const [submenuActive,setSubmenuActive]=React.useState(-1)
  const navigate = useNavigate();


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

  const verifyToken = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    const {data} = await axios.post("http://165.227.97.26:3001/api/auth/verify",{}, config);

    if(data.msg === "Token is not valid" || data.msg === "Authorization denied" || data.msg === "Not authorized"){
      // Clear cookie
      document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      navigate("/login");
    }
  }
  useEffect(() => {
    verifyToken();
    // eslint-disable-next-line
  }, []);
  
  return (
    <div className="dashboard">
      <div className='sidebar'>
        <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} submenuActive={submenuActive} setSubmenuActive={setSubmenuActive}/>
      </div>
      <div className='dashboard-main'>
        <Main menuActive={menuActive} submenuActive={submenuActive}/>
      </div>
    </div>
  )
}

export default Dashboard
