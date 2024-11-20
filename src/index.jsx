import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import VideoSlider from "./VideoSlider.jsx";
// @ts-ignore
import './css/root.css';
import Footer from "./Footer.jsx";



function Root() {
    const travelVideos = [                   
        {id: 0, videoUrl:"https://drive.google.com/file/d/1MF9pskvYNstpLSs_vHGEpdLKcZDiAxYS/preview", vertical: true, title: "Wisconsin", subtitle: "Summer '24"},
        {id: 1, videoUrl:"https://drive.google.com/file/d/1MF9pskvYNstpLSs_vHGEpdLKcZDiAxYS/preview", vertical: true, title: "Wisconsin", subtitle: "Summer '24"},
        {id: 2, videoUrl:"https://drive.google.com/file/d/1MF9pskvYNstpLSs_vHGEpdLKcZDiAxYS/preview", vertical: true, title: "Wisconsin", subtitle: "Summer '24"},
        {id: 3, videoUrl:"https://drive.google.com/file/d/1MF9pskvYNstpLSs_vHGEpdLKcZDiAxYS/preview", vertical: true, title: "Wisconsin", subtitle: "Summer '24"},
        {id: 4, videoUrl:"https://drive.google.com/file/d/1MF9pskvYNstpLSs_vHGEpdLKcZDiAxYS/preview", vertical: true, title: "Wisconsin", subtitle: "Summer '24"},
        {id: 5, videoUrl:"https://drive.google.com/file/d/1MF9pskvYNstpLSs_vHGEpdLKcZDiAxYS/preview", vertical: true, title: "Wisconsin", subtitle: "Summer '24"},
        {id: 6, videoUrl:"https://drive.google.com/file/d/1MF9pskvYNstpLSs_vHGEpdLKcZDiAxYS/preview", vertical: true, title: "Wisconsin", subtitle: "Summer '24"}
    ]

    return (
        <BrowserRouter>
            <div id="view">
                <h1>Video Gallery</h1>
                <h2>Travel</h2>
                <div>
                    <VideoSlider videoList={travelVideos}/>
                </div>
            </div>

            <div id="footer">
                <Footer />
            </div>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<Root />);
}
