import React from "react";

export default function Foooter(){
    let date = new Date()
    let year = date.getFullYear();
    return (
        <>
        <footer>
            <p>copyright © {year}</p>
        </footer>
        </>
    )
}