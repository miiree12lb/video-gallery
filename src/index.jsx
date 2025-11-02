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
    const navigate = useNavigate();
    const location = useLocation();
    const viewRef = useRef(null);
    const [categories, setCategories] = useState([
        "All",
        "Travel",
        "Year Recap",
        "Coding",
        "Photo & Video Selection",
        "DIY",
        "Celebrations",
        "Software Promo"
    ]);
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

    const video2024 = { videoUrl: video2024mp4, vertical: true, title: "2024", subtitle: "Around the world", thumbnail: thumb2024 };
    const videoMenu = { videoUrl: menuMentorVideo, vertical: false, title: "MenuMentor", thumbnail: menuMentorThumb };
    const videoInterrail = { videoUrl: interrailVideo, vertical: true, title: "Interrail", subtitle: "Summer '25", thumbnail: interrailThumb };
    const videoPrettySkies = { videoUrl: prettySkiesVideo, vertical: true, title: "Pretty Skies", thumbnail: prettySkiesThumb };
    const videoMusicPlayer = { videoUrl: musicPlayerVideo, vertical: true, title: "Music Player", subtitle: "with React", thumbnail: musicPlayerThumb };
    const videoParallax = { videoUrl: parallaxEffectVideo, vertical: true, title: "Parallax Effect", subtitle: "with React", thumbnail: parallaxEffectThumb };
    const videoWave = { videoUrl: waveRepresentationVideo, vertical: true, title: "Wave Representation", subtitle: "with React", thumbnail: waveRepresentationThumb };

    const initialTravelVideos = [
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

    const initialRecapVideos = [video2024];

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
                            <Section title="Travel" videos={filterVideos(travelVideos)} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} onViewAll={() => handleViewAll("/travel")} selectedCategory={selectedCategory} />
                            <Section title="Year Recap" videos={filterVideos(recapVideos)} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} onViewAll={() => handleViewAll("/year-recap")} selectedCategory={selectedCategory} />
                            <Section title="Coding" videos={filterVideos(codingVideos)} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} onViewAll={() => handleViewAll("/coding")} selectedCategory={selectedCategory} />
                            <Section title="Photo & Video Selection" videos={filterVideos(photoAndVideoSelection)} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} onViewAll={() => handleViewAll("/photo-video")} selectedCategory={selectedCategory} />
                            <Section title="DIY" videos={filterVideos(diyVideos)} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} onViewAll={() => handleViewAll("/diy")} selectedCategory={selectedCategory} />
                            <Section title="Celebrations" videos={filterVideos(celebrationsVideos)} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} onViewAll={() => handleViewAll("/celebrations")} selectedCategory={selectedCategory} />
                            <Section title="Software Promo" videos={filterVideos(softwarePromoVideos)} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} onViewAll={() => handleViewAll("/software-promo")} selectedCategory={selectedCategory} />
                        </div>
                    }
                />

                <Route path="/travel" element={<ViewAll title="Travel" verticalVideoList={travelVideos} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} />} />
                <Route path="/year-recap" element={<ViewAll title="Year Recap" verticalVideoList={recapVideos} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} />} />
                <Route path="/coding" element={<ViewAll title="Coding" verticalVideoList={codingVideos} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} />} />
                <Route path="/photo-video" element={<ViewAll title="Photo & Video Selection" verticalVideoList={photoAndVideoSelection} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} />} />
                <Route path="/diy" element={<ViewAll title="DIY" verticalVideoList={diyVideos} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} />} />
                <Route path="/celebrations" element={<ViewAll title="Celebrations" verticalVideoList={celebrationsVideos} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} />} />
                <Route path="/software-promo" element={<ViewAll title="Software Promo" horizontalVideoList={softwarePromoVideos} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} />} />
            </Routes>

            <div id="footer">
                <Footer />
            </div>
        </>
    );
}

function Section({ title, videos, currentVideoId, setCurrentVideoId, onViewAll, selectedCategory }) {
    if (selectedCategory !== "All" && selectedCategory !== title) return;
    
    return (
        <div>
            <div className="header">
                <h2>{title}</h2>
                <p className="view-all" onClick={onViewAll}>
                    View all &#10095;
                </p>
            </div>

            <VideoSlider
                videoList={videos}
                currentVideoId={currentVideoId}
                setCurrentVideoId={setCurrentVideoId}
            />
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