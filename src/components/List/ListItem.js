import React from 'react';  

const ListItem = (props) => {
    return(
        <div className="list-item" key={props.index}>
            <div className="list-content">
                <img src={props.data['links']['mission_patch']} className="img-responsive" alt={props.data['mission_name']}/>
                <p>{props.data['mission_name']}</p>
                <div>
                    <span>Mission Ids:</span>
                    <ul>
                        {props.data['mission_id'].map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
                <div className="item-sec"><span>Launch Year </span>: {props.data['launch_year']}</div>
                <div className="item-sec"><span>Successful Launch </span>: {props.data['launch_success']? "True" : "False"}</div>
                <div  className="item-sec"><span>Successful Landing </span>: {props.data['launch_landing']?"True":"False"}</div>
            </div>
        </div>
    )
}
export default ListItem;