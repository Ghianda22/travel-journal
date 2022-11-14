import React from "react";
import CardContent from "./Card/CardContent";
import Picture from "./Card/Picture";

export default function CardContentHeader(props) {
    return (
        <div className="card">
            <Picture />
            <CardContent />
        </div>
    );
}