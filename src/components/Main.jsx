import React from "react";
import Card from "./Main/Card";
import { data } from '../data/data';
import '../styles/compiled/main.css';

export default function Main(props) {
    const travelCards = data.map((item, i) => {
        return (
            //more futureproof to create an ID attribute in the object and use it as a key
            <div className="card-item">
                <Card item={item} key={i} />
                <div className="divider"></div>
            </div>
        )
    })
    return (
        <div className="main">
            {travelCards}
        </div>
    );
    
}