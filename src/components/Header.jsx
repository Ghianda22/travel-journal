import React from "react";
import '../styles/compiled/header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";


export default function Header(props) {
    return (
        <div className="header">
            <div className="header--text">
                <FontAwesomeIcon className="header--icon" icon={faEarthAmericas} />
                <p>my travel journal</p>
            </div>
        </div>
    );
}