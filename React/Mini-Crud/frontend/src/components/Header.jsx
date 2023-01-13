import React from "react";

export default function Header(props) {
    return (
        <div className="container-fluid bg-primary text-center p-3">
            <h1 className="text-bg-primary ">{props.nome}</h1>
        </div>
    )
}