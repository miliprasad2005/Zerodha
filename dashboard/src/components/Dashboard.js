import React from "react";
import WatchList from './WatchList';
import Orders from './Orders';
import Summary from './Summary';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import {Routes,Route} from 'react-router-dom';
function Dashboard(){
    return(
        <div className="dashboard-container">
            <WatchList/>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Summary/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/holding' element={<Holdings/>}/>
                    <Route path='/positions' element={<Positions/>}/>
                    <Route path='/funds' element={<Funds/>}/>
                    <Route path='/App' element={<Apps/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;
