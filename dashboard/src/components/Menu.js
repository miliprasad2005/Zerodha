import React,{useState,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
function Menu(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    useEffect(() => {

    axios.get(
        "http://localhost:3002/me",
        {
            withCredentials: true
        }
    )
    .then((response) => {

        if (response.data.success) {
            setUsername(response.data.user.username);
        }

    })
    .catch((error) => {
        console.log(error);
    });

}, []);
    const [selectedMenu,setselectedMenu]=useState(0);
    const [isProfileDropDownOpen,setisProfileDropDownOpen]=useState(false);
    const handleMenuClick=(index)=>{
        setselectedMenu(index);
    }
    const handleProfileClick=(index)=>{
        setisProfileDropDownOpen(!isProfileDropDownOpen);
    }
    const handleLogout = async () => {

    try {

        const response = await axios.get(
            "http://localhost:3002/logout",
            {
                withCredentials: true
            }
        );

        if (response.data.success) {
            alert("Logout successful!");
            navigate("/login");
        }

    } catch (error) {

        console.log(error);
        alert("Logout failed");

    }
};
    const MenuClass="menu";
    const activeMenuClass="menu selected";
   return(
    <div className="menu-container">
        <div className="menus">
        <img src="logo.png" style={{width:"50px"}} />
        <ul>
            <li>
                <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
                <p className={selectedMenu===0?activeMenuClass:MenuClass}>Dashboard</p>
                </Link>
            </li>
            <li>
                <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}>
                <p className={selectedMenu===1?activeMenuClass:MenuClass}>Orders</p>
                </Link>
            </li>
            <li>
                <Link style={{textDecoration:"none"}} to="/holding" onClick={()=>handleMenuClick(2)}>
                <p className={selectedMenu===2?activeMenuClass:MenuClass}>Holdings</p>
                </Link>
            </li>
            <li>
                <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}>
                <p className={selectedMenu===3?activeMenuClass:MenuClass}>Positions</p>
                </Link>
            </li>
            <li>
                <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}>
                <p className={selectedMenu===4?activeMenuClass:MenuClass}>Funds</p>
                </Link>
            </li>
            <li>
                <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClick(5)}>
                <p className={selectedMenu===5?activeMenuClass:MenuClass}>Apps</p>
                </Link>
            </li>
        </ul>
        <hr/>
       <div className="profile" onClick={handleProfileClick}>
    <div className="avatar">ZU</div>
    <p className="username">{username}</p>
</div>

{isProfileDropDownOpen && (
    <div className="profile-dropdown">
        <button onClick={handleLogout}>
            Logout
        </button>
    </div>
)}
 </div>
    </div>
   );
}
export default Menu;