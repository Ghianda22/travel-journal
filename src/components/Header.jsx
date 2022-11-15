import React from "react";
import '../styles/header.css';


export default function Header(props) {
    return (
        <div className="header">
            
            <i className="fa-solid fa-earth-americas"></i>
            <p className="header--text">my travel journal</p>
        </div>
    );
}