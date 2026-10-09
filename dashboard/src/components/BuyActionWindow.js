import React, { useState,useContext } from "react";
// import {Link} from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import "./BuyActionWindow.css";
const BuyActionWindow=({uid})=>{
    const [stockQuantity,setstockQuantity]=useState(1);
    const [stockPrice,setstockPrice]=useState(0.0);
    const { closeBuyWindow } = useContext(GeneralContext);
    const handleBuyClick=()=>{
        axios.post("http://localhost:3002/newOrder",{
            name:uid,
            qty:stockQuantity,
            price:stockPrice,
            mode:"BUY"
        }).then((res) => {
        alert(res.data);
        closeBuyWindow();
    })
    .catch((err) => {
        alert(err.response?.data?.message || "Unable to buy");
    });
    }
    const handleCancelClick=()=>{
        closeBuyWindow();
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
                <button className="btn btn-blue" onClick={handleBuyClick}>Buy</button>
                <button to="" className="btn btn-grey" onClick={handleCancelClick} >Cancel</button>
            </div>
        </div>
    </div>
    );
}
export default BuyActionWindow;