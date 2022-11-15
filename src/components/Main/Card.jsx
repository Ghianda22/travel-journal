import React from "react";
import CardContent from "./Card/CardContent";
import Picture from "./Card/Picture";

export default function Card(props) {
    return (
        <div className="card">
            <Picture />
            <CardContent />
        </div>
    );
}