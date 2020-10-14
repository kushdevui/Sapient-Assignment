import React, { useState, useEffect } from 'react';
import { api } from '../api';
import SideBar from './SideBar/SideBar';
import LaunchesList from './List/LaunchList';
import { types } from '../utils/assetUtils';
const Home = (props) => {
  const [data,setData] = useState([]);
  const [load,setLoad] = useState(false);

  useEffect(()=>{
   let query= new URLSearchParams(props.location.search)
   let params={
      launch_year: query.get(types.launch_year),
      launch_success: query.get(types.launch_success),
      land_success: query.get(types.land_success)
   }
    setLoad(true)
    api.launch.all(params).then(data=>{
      setData(data)
      setLoad(false)
    })
  },[props.location.search])
  
  return (
    <div className="launch-app">
        <div  aria-label="filter-list" className="side-bar">
          <SideBar setLoad={setLoad}/>
        </div>
        {
          <div aria-label="data-list" className={(load || data.length === 0 ) ? "launch-se" : "launch-list"}> 
          {load ? <div className="loader"></div> : (data.length > 0 ? <LaunchesList list={data}/>: <div className="no-data">No Records found</div>)}
          </div>
        }
        
    </div>
  );
};

export default Home;
