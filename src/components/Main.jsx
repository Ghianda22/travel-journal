import React from "react";
import Card from "./Main/Card";
import {data} from '../data/data';

export default function Main(props) {
    const travelCards = data.map((item, i) => {
        return (
            //more futureproof to create an ID attribute in the object and use it as a key
            <Card item={item} key={i} />
        )
    })
    return (
        <div className="main">
            {travelCards}
        </div>
    );
    
}