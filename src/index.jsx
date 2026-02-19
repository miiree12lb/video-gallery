import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import VideoSlider from "./VideoSlider.jsx";
import ViewAll from "./ViewAll.jsx";
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
import mathsFunctionsViewerThumb from "./assets/thumbnails/mathsViewerThumb.jpg";
import recap2025Thumb from "./assets/thumbnails/2025Thumb.png";
import copenhagenThumb from "./assets/thumbnails/copenhagenThumb.jpg";
import visitedCountriesThumb from "./assets/thumbnails/visitedCountriesThumb.png";
import loadingThumb from "./assets/thumbnails/loadingThumb.png";
import introThumb from "./assets/thumbnails/introThumb.png";
import orbitThumb from "./assets/thumbnails/orbitThumb.png";

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
import recap2025video from "./assets/videos/2025.mp4";
import copenhagen from "./assets/videos/copenhagen.mp4";
import visitedCountries from "./assets/videos/visited countries.mp4";
import loading from "./assets/videos/loading.mp4";
import intro from "./assets/videos/intro.mp4";
import orbit from "./assets/videos/orbit.mp4";

function Root() {
    const navigate = useNavigate();
    const location = useLocation();
    const viewRef = useRef(null);
    const [categories, setCategories] = useState([
        "All",
        "Travel",
        "En Català",
        "Year Recap",
        "Coding",
        "Animations",
        "Photo & Video Selection",
        "DIY",
        "Celebrations",
        "Software Promo"
    ]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentVideoId, setCurrentVideoId] = useState(null);

    const [catalaVideos, setCatalaVideos] = useState([]);
    const [travelVideos, setTravelVideos] = useState([]);
    const [recapVideos, setRecapVideos] = useState([]);
    const [softwarePromoVideos, setSoftwarePromoVideos] = useState([]);
    const [diyVideos, setDiyVideos] = useState([]);
    const [photoAndVideoSelection, setPhotoAndVideoSelection] = useState([]);
    const [celebrationsVideos, setCelebrationsVideos] = useState([]);
    const [codingVideos, setCodingVideos] = useState([]);
    const [animationVideos, setAnimationVideos] = useState([]);

    const video2024 = { videoUrl: video2024mp4, vertical: true, title: "2024", subtitle: "Around the world", thumbnail: thumb2024 };
    const videoMenu = { videoUrl: menuMentorVideo, vertical: false, title: "MenuMentor", thumbnail: menuMentorThumb };
    const videoInterrail = { videoUrl: interrailVideo, vertical: true, title: "Interrail", subtitle: "Summer '25", thumbnail: interrailThumb };
    const videoPrettySkies = { videoUrl: prettySkiesVideo, vertical: true, title: "Pretty Skies", thumbnail: prettySkiesThumb };
    const videoMusicPlayer = { videoUrl: musicPlayerVideo, vertical: true, title: "Music Player", subtitle: "with React", thumbnail: musicPlayerThumb };
    const videoParallax = { videoUrl: parallaxEffectVideo, vertical: true, title: "Parallax Effect", subtitle: "with React", thumbnail: parallaxEffectThumb };
    const videoWave = { videoUrl: waveRepresentationVideo, vertical: true, title: "Wave Representation", subtitle: "with React", thumbnail: waveRepresentationThumb };
    const video2025 = {videoUrl: recap2025video, vertical: true, title: "2025", thumbnail: recap2025Thumb};

    const initialCatalaVideos = [
        video2025,
        videoPrettySkies
    ];

    const initialAnimationVideos = [
        {videoUrl: orbit, vertical: false, title: "Orbit", thumbnail: orbitThumb},
        {videoUrl: intro, vertical: false, title: "Intro", thumbnail: introThumb},
        {videoUrl: loading, vertical: false, title: "Loading", thumbnail: loadingThumb}
    ];

    const initialTravelVideos = [
        {videoUrl: visitedCountries, vertical: true, title: "Visited Countries", subtitle: "15/02/2026", thumbnail: visitedCountriesThumb},
        { videoUrl: copenhagen, vertical: true, title: "Copenhagen", thumbnail: copenhagenThumb },
        videoInterrail,
        video2024,
        { videoUrl: londonVideo, vertical: true, title: "London", thumbnail: londonThumb },
        { videoUrl: wisconsinVideo, vertical: true, title: "Wisconsin", subtitle: "Summer '24", thumbnail: wisconsinThumb },
    ];

    const initialPhotoAndVideoSelection = [
        { videoUrl: footballStadiumsVideo, vertical: true, title: "Football Stadiums", thumbnail: footballStadiumsThumb },
        videoPrettySkies,
        { videoUrl: mountainsVideo, vertical: true, title: "Mountains", thumbnail: montainsThumb }
    ];

    const initialRecapVideos = [
        video2025,
        video2024
    ];

    const initialSoftwarePromoVideos = [
        { videoUrl: reactHowToVideo, vertical: false, title: "React How To", thumbnail: reactHowToThumb },
        { videoUrl: colorPaletteGeneratorVideo, vertical: false, title: "Color Palette Generator", thumbnail: colorPaletteGeneratorThumb },
        videoMenu
    ];

    const initialDiyVideos = [
        videoMusicPlayer,
        { videoUrl: diy66Video, vertical: true, title: "Route 66", subtitle: "", thumbnail: diy66Thumb }
    ];

    const initialCodingVideos = [
        { videoUrl: mathsFunctionsViewerVideo, title: "Maths Viewer", vertical: true, thumbnail: mathsFunctionsViewerThumb },
        videoWave,
        videoParallax,
        videoMusicPlayer
    ];

    const initialCelebrationsVideos = [
        { videoUrl: yaya80Video, vertical: true, title: "Yaya 80", thumbnail: yaya80Thumb }
    ];

    useEffect(() => {
        const assignVideoIds = (videos) => videos.map((video) => ({ ...video, id: uuidv4() }));
        setAnimationVideos(assignVideoIds(initialAnimationVideos));
        setCatalaVideos(assignVideoIds(initialCatalaVideos));
        setTravelVideos(assignVideoIds(initialTravelVideos));
        setRecapVideos(assignVideoIds(initialRecapVideos));
        setSoftwarePromoVideos(assignVideoIds(initialSoftwarePromoVideos));
        setDiyVideos(assignVideoIds(initialDiyVideos));
        setPhotoAndVideoSelection(assignVideoIds(initialPhotoAndVideoSelection));
        setCelebrationsVideos(assignVideoIds(initialCelebrationsVideos));
        setCodingVideos(assignVideoIds(initialCodingVideos));
    }, []);

    const filterVideos = (videos) => {
        if (!searchQuery) return videos;
        return videos.filter(
            (video) =>
                (video.title && video.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (video.subtitle && video.subtitle.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    };

    const handleViewAll = (path) => {
        navigate(path);
    };

    const isHomePage = location.pathname === "/";

    const sections = [
        {title: "Travel", videos: travelVideos, link: "/travel"},
        {title: "En Català", videos: catalaVideos, link: "/catala"},
        {title: "Year Recap", videos: recapVideos, link: "/year-recap"},
        {title: "Coding", videos: codingVideos, link: "/coding"},
        {title: "Animations", videos: animationVideos, link: "/animations"},
        {title: "Photo & Video Selection", videos: photoAndVideoSelection, link: "/photo-video"},
        {title: "DIY", videos: diyVideos, link: "/diy"},
        {title: "Celebrations", videos: celebrationsVideos, link: "/celebrations"},
        {title: "Software Promo", videos: softwarePromoVideos, link: "/software-promo"},
    ];

    return (
        <>
            {isHomePage && (
                <Nabvar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    setSearchQuery={setSearchQuery}
                />
            )}

            <Routes>
                <Route
                    path="/"
                    element={
                        <div id="view" ref={viewRef}>
                            {sections.map((s) => (
                                <Section title={s.title} videos={filterVideos(s.videos)} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} onViewAll={() => handleViewAll(s.link)} selectedCategory={selectedCategory} />
                            ))}
                        </div>
                    }
                />

                {sections.map((s) => (
                    <Route path={s.link} element={<ViewAll title={s.title} videos={s.videos} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} />} />
                ))}                
            </Routes>

            <div id="footer">
                <Footer />
            </div>
        </>
    );
}

function Section({ title, videos, currentVideoId, setCurrentVideoId, onViewAll, selectedCategory }) {
    if (selectedCategory !== "All" && selectedCategory !== title) return;

    if (videos.length === 0) return (
        <div>
            <div className="header">
                <h2>{title}</h2>
                <p className="view-all" onClick={onViewAll}>
                    View all &#10095;
                </p>
            </div>
            <p>No videos match your search.</p>
        </div>
    )

    const verticalVideos = videos.filter((v) => v.vertical === true);
    const horziontalVideos = videos.filter((v) => v.vertical === false);

    return (
        <div>
            <div className="header">
                <h2>{title}</h2>
                <p className="view-all" onClick={onViewAll}>
                    View all &#10095;
                </p>
            </div>

            {verticalVideos.length > 0 && <VideoSlider
                videoList={verticalVideos}
                currentVideoId={currentVideoId}
                setCurrentVideoId={setCurrentVideoId}
            />}

            {horziontalVideos.length > 0 && <VideoSlider
                videoList={horziontalVideos}
                currentVideoId={currentVideoId}
                setCurrentVideoId={setCurrentVideoId}
            />}
        </div>
    );
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    );
}