import React from 'react';  
import ListItem from "./ListItem";
import './listing.scss';

const Listing = (props) => {
    if (props.list) { 
        return props.list.map((item,index) =>{
            return <ListItem  key={index} data={item}/>
        })
    }
    return ;
   
}
export default Listing;