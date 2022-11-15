import React from "react";
import Location from "./CardContentHeader/Location";
import Title from "./CardContentHeader/Title";
import '../../../../styles/compiled/card-content-header.css';

export default function CardContentHeader(props) {
    return (
        <header className="card-content-header">
            <Location
                location={props.item.location} googleMapsUrl={props.item.googleMapsUrl}
            />
            <Title title = {props.item.title} />
        </header>
    );
}