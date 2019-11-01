import React from "react";
import "./style.css";

function FriendCard({ handleClick, name, image, occupation, location }) {
    return (
        <div className="card">
            <div className="img-container">

                <img alt={name} src={image} onClick={handleClick} />

            </div>

            <div className="content">
                <ul>
                    <li><strong>Name:</strong> {name}</li>
                    <li><strong>Occupation:</strong> {occupation}</li>
                    <li><strong>Location:</strong> {location}</li>
                </ul>
            </div>
        </div >
    );
}

export default FriendCard;