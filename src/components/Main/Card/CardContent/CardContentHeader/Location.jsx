import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Location(props) {
    return (
        <div className="location">
            <FontAwesomeIcon className="location--icon" icon={faLocationDot} />
            <p className="location--title">{props.location}</p>
            <a className="location--url" href={props.googleMapsUrl}>View on Google Maps</a >
        </div>
    );
}