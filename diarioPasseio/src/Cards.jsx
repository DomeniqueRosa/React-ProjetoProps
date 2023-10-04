import React from "react";


export default function Cards(props){
    return(
        <div className="card">
            <div >
                <img src={props.item.imageUrl} alt="" className="card--img" />   
            </div>
            <div className="card--text">
            <div className="card--local">
                {/* <img className="card--img--local" src="./local.png" alt="" /> */}
                <h5>{props.item.location}</h5>
            </div>    
                <h1 className="card--title"> {props.item.title}</h1>
                <div className="card--date">
                    <p>{props.item.startDate}</p>
                    <p>-</p>
                    <p>{props.item.endDate}</p>
                </div>
                <p className="card--parag">{props.item.description}</p>
            </div>
        </div>
    )
}