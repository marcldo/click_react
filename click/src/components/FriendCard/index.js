import React from "react";
import "./style.css";

function FriendCard({ handleClick, name, image }) {
    return (
        <div className="card">
            <div className="img-container">

                <img alt={name} src={image} onClick={handleClick} />

            </div>
        </div >
    );
}

export default FriendCard;