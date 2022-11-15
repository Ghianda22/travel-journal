import React from "react";
import CardContentHeader from "./CardContent/CardContentHeader";
import CardContentMain from "./CardContent/CardContentMain";

export default function CardContent(props) {
    return (
        <div>
            <CardContentHeader />
            <CardContentMain />
        </div>
    );
}