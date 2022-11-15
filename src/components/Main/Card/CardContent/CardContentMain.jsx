import React from "react";

export default function CardContentMain(props) {
    return (
        <div className="card-content-main">
            <div className="card-content--date">
                <p>{props.item.startDate} - {props.item.endDate}</p>
            </div>
            <div className="card-content--text">
                <p>{props.item.description}</p>
            </div>
        </div>
    );
}