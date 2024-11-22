import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import VideoSlider from "./VideoSlider.jsx";
// @ts-ignore
import './css/root.css';
import Footer from "./Footer.jsx";
import Nabvar from "./Navbar.jsx";

import wisconsinThumb from "./assets/thumbnails/wisconsinThumb.png";

function Root() {
    const viewRef = useRef(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentVideoId, setCurrentVideoId] = useState(null);

    const [travelVideos, setTravelVideos] = useState([]);

    const initialTravelVideos = [
        { videoUrl: "https://drive.google.com/file/d/1MF9pskvYNstpLSs_vHGEpdLKcZDiAxYS/preview", vertical: true, title: "Wisconsin", subtitle: "Summer '24", thumbnail: wisconsinThumb},
    ];

    useEffect(() => {
        const assignVideoIds = (videos) => videos.map((video) => ({ ...video, id: uuidv4() }));
        setTravelVideos(assignVideoIds(initialTravelVideos));
    }, []);

    useEffect(() => {
        if (viewRef.current) {
            const h2Elements = viewRef.current.querySelectorAll("h2");
            const h2Text = Array.from(h2Elements).map((h2) => h2.textContent);
            setCategories(["All", ...h2Text]);
        }
    }, []);

    const filterVideos = (videos) => {
        if (!searchQuery) return videos;
        return videos.filter(
            (video) =>
                video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                video.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    return (
        <BrowserRouter>
            <Nabvar
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setSearchQuery={setSearchQuery}
            />

            <div id="view" ref={viewRef}>
                {(selectedCategory === "All" || selectedCategory === "Travel") && (
                    <div>
                        <h2>Travel</h2>
                        <VideoSlider
                            videoList={filterVideos(travelVideos)}
                            currentVideoId={currentVideoId}
                            setCurrentVideoId={setCurrentVideoId}
                        />
                    </div>
                )}
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
