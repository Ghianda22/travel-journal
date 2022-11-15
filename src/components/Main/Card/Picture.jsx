import React from "react";
import '../../../styles/compiled/picture.css';

export default function Picture(props) {
    return (
        <div className="picture">
            <img src={props.item.imageUrl} alt={props.item.title} />
        </div>
    );
}