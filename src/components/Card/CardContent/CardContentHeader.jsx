import React from "react";
import Location from "./CardContentHeader/Location";
import Title from "./CardContentHeader/Title";

export default function CardContentHeader(props) {
    return (
        <div>
            <Location />
            <Title/>
        </div>
    );
}