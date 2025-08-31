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
import londonThumb from "./assets/thumbnails/londonThumb.png";
import thumb2024 from "./assets/thumbnails/2024Thumb.png";
import menuMentorThumb from "./assets/thumbnails/MenuMentorThumb.png";
import diy66Thumb from "./assets/thumbnails/diy66Thumb.png";
import interrailThumb from "./assets/thumbnails/interrail.png";

function Root() {
    const viewRef = useRef(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentVideoId, setCurrentVideoId] = useState(null);

    const [travelVideos, setTravelVideos] = useState([]);
    const [recapVideos, setRecapVideos] = useState([]);
    const [softwarePromoVideos, setSoftwarePromoVideos] = useState([]);
    const [diyVideos, setDiyVideos] = useState([]);

    const video2024 = {videoUrl:"https://drive.google.com/file/d/14uKQ0Nq3MBlLWa8zzSmk5BSUv9N0VmyQ/preview", vertical: true, title: "2024", subtitle: "Around the world", thumbnail: thumb2024};
    const videoMenu = {videoUrl: "https://drive.google.com/file/d/1t5o0a813PEGNkQIZODBMwaUzxciKhZDD/preview", vertical: false, title: "MenuMentor", thumbnail: menuMentorThumb};
    const videoInterrail = {videoUrl: "https://drive.google.com/file/d/1uJKRYwIljFQI15nSXulzhGS_1jLb6Snj/preview", vertical: true, title: "Interrail", subtitle: "Summer '25", thumbnail: interrailThumb}

    const initialTravelVideos = [
        { videoUrl: "https://drive.google.com/file/d/1MF9pskvYNstpLSs_vHGEpdLKcZDiAxYS/preview", vertical: true, title: "Wisconsin", subtitle: "Summer '24", thumbnail: wisconsinThumb},
        { videoUrl: "https://drive.google.com/file/d/1K-53KMVX9t_6k7_impheHPYGNb1K2jjO/preview", vertical: true, title: "London", thumbnail: londonThumb},
        video2024,
        videoInterrail
    ];

    const initialRecapVideos = [
        video2024,
    ]

    const initialSoftwarePromoVideos = [
        videoMenu
    ]

    const initialDiyVideos = [
        {videoUrl: "https://drive.google.com/file/d/1xlbhUee4FI3shYgSoUOgnxNeKHCgxQ1w/preview", vertical: true, title: "Route 66", subtitle: "", thumbnail: diy66Thumb}
    ]


    useEffect(() => {
        const assignVideoIds = (videos) => videos.map((video) => ({ ...video, id: uuidv4() }));
        setTravelVideos(assignVideoIds(initialTravelVideos));
        setRecapVideos(assignVideoIds(initialRecapVideos));
        setSoftwarePromoVideos(assignVideoIds(initialSoftwarePromoVideos));
        setDiyVideos(assignVideoIds(initialDiyVideos));
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
                (video.title !== undefined && video.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (video.subtitle !== undefined && video.subtitle.toLowerCase().includes(searchQuery.toLowerCase()))
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

                {(selectedCategory === "All" || selectedCategory === "DIY") && (
                    <div>
                        <h2>DIY</h2>
                        <VideoSlider
                            videoList={filterVideos(diyVideos)}
                            currentVideoId={currentVideoId}
                            setCurrentVideoId={setCurrentVideoId}
                        />
                    </div>
                )}

                {(selectedCategory === "All" || selectedCategory === "Year Recap") && (
                    <div>
                        <h2>Year Recap</h2>
                        <VideoSlider
                            videoList={filterVideos(recapVideos)}
                            currentVideoId={currentVideoId}
                            setCurrentVideoId={setCurrentVideoId}
                        />
                    </div>
                )}

                {(selectedCategory === "All" || selectedCategory === "Software Promo") && (
                    <div>
                        <h2>Software Promo</h2>
                        <VideoSlider
                            videoList={filterVideos(softwarePromoVideos)}
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
