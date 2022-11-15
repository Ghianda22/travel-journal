import React from "react";
import CardContentHeader from "./CardContent/CardContentHeader";
import CardContentMain from "./CardContent/CardContentMain";

export default function CardContent(props) {
    return (
        <div className="card-content">
            <CardContentHeader item={props.item} />
            <CardContentMain item={props.item} />
        </div>
    );
}