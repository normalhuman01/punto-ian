import React from "react";

export default function SectionTittle({ tittle }) {
    return (
        <div className="box">
            <div className="title">
                <span className="block"></span>
                <h1>
                    {tittle}
                    <span></span>
                </h1>
            </div>

            <div className="role">
                <div className="block"></div>
                <div>
                    <hr />
                </div>
            </div>
        </div>
    );
}
