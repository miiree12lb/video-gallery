import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import VideoSlider from "./VideoSlider.jsx";
// @ts-ignore
import './css/root.css';
import Footer from "./Footer.jsx";
import Nabvar from "./Navbar.jsx";

function Root() {
    const viewRef = useRef(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    let travelVideos = [
        { videoUrl: "https://drive.google.com/file/d/1MF9pskvYNstpLSs_vHGEpdLKcZDiAxYS/preview", vertical: true, title: "Wisconsin", subtitle: "Summer '24" }
    ];

    function assignVideoIds(videos) {
        return videos.map((video, id) => ({ ...video, id }));
    }

    travelVideos = assignVideoIds(travelVideos);

    useEffect(() => {
        if (viewRef.current) {
            const h2Elements = viewRef.current.querySelectorAll("h2");
            const h2Text = Array.from(h2Elements).map((h2) => h2.textContent);
            setCategories(["All", ...h2Text]);
        }
    }, []);

    return (
        <BrowserRouter>
            <Nabvar 
                categories={categories} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
            />

            <div id="view" ref={viewRef}>
                {selectedCategory === "All" || selectedCategory === "Travel" ? (
                    <div>
                        <h2>Travel</h2>
                        <VideoSlider videoList={travelVideos} />
                    </div>
                ) : null}
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
