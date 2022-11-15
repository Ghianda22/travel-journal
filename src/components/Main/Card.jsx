import React from "react";
import CardContent from "./Card/CardContent";
import Picture from "./Card/Picture";
import '../../styles/compiled/card.css';

export default function Card(props) {
    return (
        <div className="card">
            <Picture item={props.item} />
            <CardContent item={props.item} />
        </div>
    );           
}