import React from "react";
import tour from "../../assets/svg/tour.svg";
import { Link } from "react-router-dom";

export default function index() {
    return (
        <div id="tour">
            <Link to="/tour">
                <img src={tour} alt="tour 360" />
            </Link>
        </div>
    );
}
