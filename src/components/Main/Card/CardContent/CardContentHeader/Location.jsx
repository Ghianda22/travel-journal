import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Location(props) {
    return (
        <div>
            <FontAwesomeIcon icon={faLocationDot} />
           
            <a href="bubu">View on Google Maps</a>
        </div>
    );
}