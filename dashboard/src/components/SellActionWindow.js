import React, { useState,useContext } from "react";
// import {Link} from "react-router-d
import GeneralContext from "./GeneralContext";
import axios from "axios";
import "./SellActionWindow.css";
const SellActionWindow=({uid})=>{
    const [stockQuantity,setstockQuantity]=useState(1);
    const [stockPrice,setstockPrice]=useState(0.0);
    const { closeSellWindow } = useContext(GeneralContext);
    const handleSellClick=()=>{
        axios.post("http://localhost:3002/newOrder",{
            name:uid,
            qty:stockQuantity,
            price:stockPrice,
            mode:"SELL"
        }).then((res) => {
        alert(res.data);
        closeSellWindow();
    })
    .catch((err) => {
        alert(err.response?.data?.message || "Unable to sell");
        closeSellWindow();
    });
    };
    const handleCancelClick=()=>{
        closeSellWindow();
    };
    return(
    <div className="container" id="buy-window" draggable="true">
        <div className="regular-order">
            <div className="inputs">
                <fieldset>
                    <legend>Qty.</legend>
                    <input type="number" name="qty" id="qty" onChange={(e)=>setstockQuantity(Number(e.target.value))} value={stockQuantity}/>
                </fieldset>
                <fieldset>
                    <legend>Price</legend>
                    <input type="number" name="price" id="price" step='0.05' onChange={(e)=>setstockPrice(Number(e.target.value))} 
                    value={stockPrice}/>
                </fieldset>
            </div>
        </div>
        <div className="buttons">
            <span>Margin required ₹140.65</span>
            <div>
                <button className="btn btn-blue" onClick={handleSellClick}>Sell</button>
                <button to="" className="btn btn-grey" onClick={handleCancelClick} >Cancel</button>
            </div>
        </div>
    </div>
    );
}
export default SellActionWindow;