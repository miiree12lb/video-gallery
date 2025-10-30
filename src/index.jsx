import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import VideoSlider from "./VideoSlider.jsx";
import './css/root.css';
import Footer from "./Footer.jsx";
import Nabvar from "./Navbar.jsx";

import wisconsinThumb from "./assets/thumbnails/wisconsinThumb.png";
import londonThumb from "./assets/thumbnails/londonThumb.png";
import thumb2024 from "./assets/thumbnails/2024Thumb.png";
import menuMentorThumb from "./assets/thumbnails/MenuMentorThumb.png";
import diy66Thumb from "./assets/thumbnails/diy66Thumb.png";
import interrailThumb from "./assets/thumbnails/interrail.png";
import prettySkiesThumb from "./assets/thumbnails/prettySkiesThumb.png";
import montainsThumb from "./assets/thumbnails/mountainsThumbs.png";
import footballStadiumsThumb from "./assets/thumbnails/footballStadiumsThmb.png";
import colorPaletteGeneratorThumb from "./assets/thumbnails/colorPaletteGeneratorThumb.png";
import yaya80Thumb from "./assets/thumbnails/yaya80Thumb.JPG";
import reactHowToThumb from "./assets/thumbnails/reactHowToThumb.png";
import musicPlayerThumb from "./assets/thumbnails/musicPlayerThumb.png";
import parallaxEffectThumb from "./assets/thumbnails/parallaxThumb.png";
import waveRepresentationThumb from "./assets/thumbnails/waveRepresentationThumb.png";
import mathsFunctionsViewerThumb from "./assets/thumbnails/mathsViewerThumb.png";

import wisconsinVideo from "./assets/videos/Wisconsin_ Summer '24.mp4";
import londonVideo from "./assets/videos/London.mp4";
import video2024mp4 from "./assets/videos/2024 Around the world.mp4";
import menuMentorVideo from "./assets/videos/MenuMentor.mp4";
import diy66Video from "./assets/videos/diy route 66.mp4";
import interrailVideo from "./assets/videos/interrail_ summer '25.mp4";
import prettySkiesVideo from "./assets/videos/Pretty Skies.mp4";
import mountainsVideo from "./assets/videos/Mountains.mp4";
import footballStadiumsVideo from "./assets/videos/Football Stadiums.mp4";
import colorPaletteGeneratorVideo from "./assets/videos/Color Palette Generator.mp4";
import yaya80Video from "./assets/videos/Yaya 80.mp4";
import reactHowToVideo from "./assets/videos/React How To.mp4";
import musicPlayerVideo from "./assets/videos/Music Player.mp4";
import parallaxEffectVideo from "./assets/videos/Parallax Effect.mp4";
import waveRepresentationVideo from "./assets/videos/Wave Representation.mp4";
import mathsFunctionsViewerVideo from "./assets/videos/Maths Viewer.mp4";

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
    const [photoAndVideoSelection, setPhotoAndVideoSelection] = useState([]);
    const [celebrationsVideos, setCelebrationsVideos] = useState([]);
    const [codingVideos, setCodingVideos] = useState([]);

    const video2024 = {videoUrl:video2024mp4, vertical: true, title: "2024", subtitle: "Around the world", thumbnail: thumb2024};
    const videoMenu = {videoUrl: menuMentorVideo, vertical: false, title: "MenuMentor", thumbnail: menuMentorThumb};
    const videoInterrail = {videoUrl: interrailVideo, vertical: true, title: "Interrail", subtitle: "Summer '25", thumbnail: interrailThumb};
    const videoPrettySkies = {videoUrl: prettySkiesVideo, vertical: true, title: "Pretty Skies", thumbnail: prettySkiesThumb};
    const videoMusicPlayer = {videoUrl: musicPlayerVideo, vertical: true, title: "Music Player", subtitle: "with React", thumbnail: musicPlayerThumb};
    const videoParallax = {videoUrl: parallaxEffectVideo, vertical: true, title: "Parallax Effect", subtitle: "with React", thumbnail: parallaxEffectThumb};
    const videoWave = {videoUrl: waveRepresentationVideo, vertical: true, title: "Wave Representation", subtitle: "with React", thumbnail: waveRepresentationThumb};

    const initialTravelVideos = [
        videoInterrail,
        video2024,
        { videoUrl: londonVideo, vertical: true, title: "London", thumbnail: londonThumb},
        { videoUrl: wisconsinVideo, vertical: true, title: "Wisconsin", subtitle: "Summer '24", thumbnail: wisconsinThumb},
    ];

    const initialPhotoAndVideoSelection = [
        {videoUrl: footballStadiumsVideo, vertical: true, title: "Football Stadiums", thumbnail: footballStadiumsThumb},
        videoPrettySkies,
        {videoUrl: mountainsVideo, vertical: true, title: "Mountains", thumbnail: montainsThumb}
    ];

    const initialRecapVideos = [
        video2024,
    ];

    const initialSoftwarePromoVideos = [
        {videoUrl: reactHowToVideo, vertical: false, title: "React How To", thumbnail: reactHowToThumb},
        {videoUrl: colorPaletteGeneratorVideo, vertical: false, title: "Color Palette Generator", thumbnail: colorPaletteGeneratorThumb},
        videoMenu
    ];

    const initialDiyVideos = [
        videoMusicPlayer,
        {videoUrl: diy66Video, vertical: true, title: "Route 66", subtitle: "", thumbnail: diy66Thumb}
    ];

    const initialCodingVideos = [
        {videoUrl: mathsFunctionsViewerVideo, title: "Maths Viewer", vertical: true, thumbnail: mathsFunctionsViewerThumb},
        videoWave,
        videoParallax,
        videoMusicPlayer
    ]

    const initialCelebrationsVideos = [
        {videoUrl: yaya80Video, vertical: true, title: "Yaya 80", thumbnail: yaya80Thumb}
    ];

    useEffect(() => {
        const assignVideoIds = (videos) => videos.map((video) => ({ ...video, id: uuidv4() }));
        setTravelVideos(assignVideoIds(initialTravelVideos));
        setRecapVideos(assignVideoIds(initialRecapVideos));
        setSoftwarePromoVideos(assignVideoIds(initialSoftwarePromoVideos));
        setDiyVideos(assignVideoIds(initialDiyVideos));
        setPhotoAndVideoSelection(assignVideoIds(initialPhotoAndVideoSelection));
        setCelebrationsVideos(assignVideoIds(initialCelebrationsVideos));
        setCodingVideos(assignVideoIds(initialCodingVideos));
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

                {(selectedCategory === "All" || selectedCategory === "Coding") && (
                    <div>
                        <h2>Coding</h2>
                        <VideoSlider
                            videoList={filterVideos(codingVideos)}
                            currentVideoId={currentVideoId}
                            setCurrentVideoId={setCurrentVideoId}
                        />
                    </div>
                )}

                {(selectedCategory === "All" || selectedCategory === "Photo & Video Selection") && (
                    <div>
                        <h2>Photo & Video Selection</h2>
                        <VideoSlider
                            videoList={filterVideos(photoAndVideoSelection)}
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

                {(selectedCategory === "All" || selectedCategory === "Celebrations") && (
                    <div>
                        <h2>Celebrations</h2>
                        <VideoSlider
                            videoList={filterVideos(celebrationsVideos)}
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
