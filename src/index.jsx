import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import VideoSlider from "./VideoSlider.jsx";
import ViewAll from "./ViewAll.jsx";
import "@fontsource-variable/bricolage-grotesque";
import './css/theme.css';
import './css/root.css';
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Privacy from "./Privacy.jsx";

import wisconsinThumb from "./assets/thumbnails/wisconsinThumb.png";
import londonThumb from "./assets/thumbnails/londonThumb.png";
import thumb2024 from "./assets/thumbnails/2024Thumb.png";
import menuMentorThumb from "./assets/thumbnails/MenuMentorThumb.png";
import diy66Thumb from "./assets/thumbnails/diy66Thumb.png";
import interrailThumb from "./assets/thumbnails/interrail.png";
// import prettySkiesThumb from "./assets/thumbnails/prettySkiesThumb.png";
// import montainsThumb from "./assets/thumbnails/mountainsThumbs.png";
// import footballStadiumsThumb from "./assets/thumbnails/footballStadiumsThmb.png";
import colorPaletteGeneratorThumb from "./assets/thumbnails/colorPaletteGeneratorThumb.png";
// import yaya80Thumb from "./assets/thumbnails/yaya80Thumb.JPG";
import reactHowToThumb from "./assets/thumbnails/reactHowToThumb.png";
import musicPlayerThumb from "./assets/thumbnails/musicPlayerThumb.png";
import parallaxEffectThumb from "./assets/thumbnails/parallaxThumb.png";
import waveRepresentationThumb from "./assets/thumbnails/waveRepresentationThumb.png";
import mathsFunctionsViewerThumb from "./assets/thumbnails/mathsViewerThumb.jpg";
import recap2025Thumb from "./assets/thumbnails/2025Thumb.png";
// import copenhagenThumb from "./assets/thumbnails/copenhagenThumb.jpg";
// import visitedCountriesThumb from "./assets/thumbnails/visitedCountriesThumb.png";
import loadingThumb from "./assets/thumbnails/loadingThumb.png";
import introThumb from "./assets/thumbnails/introThumb.png";
import orbitThumb from "./assets/thumbnails/orbitThumb.png";4
import starThumb from "./assets/thumbnails/starThumb.png";
import packmanThumb from "./assets/thumbnails/packmanThumb.png";
import barcelonaThumb from "./assets/thumbnails/barcelonaThumb.png";
// import velerThumb from "./assets/thumbnails/velerThumb.png";
import logoThumb from "./assets/thumbnails/logoThumb.png";
import cookiesThumb from "./assets/thumbnails/cookiesThumb.png";
import backendThumb from "./assets/thumbnails/backendThumb.png";
import origensThumb from "./assets/thumbnails/origensThumb.png";
import mapsThumb from "./assets/thumbnails/mapsThumb.png";
import llmThumb from "./assets/thumbnails/llmThumb.png";
import canadaThumb from "./assets/thumbnails/canadaThumb.png";

import menuMentorVideo from "./assets/videos/MenuMentor.mp4";
import diy66Video from "./assets/videos/diy route 66.mp4";
// import prettySkiesVideo from "./assets/videos/Pretty Skies.mp4";
// import mountainsVideo from "./assets/videos/Mountains.mp4";
// import footballStadiumsVideo from "./assets/videos/Football Stadiums.mp4";
import colorPaletteGeneratorVideo from "./assets/videos/Color Palette Generator.mp4";
// import yaya80Video from "./assets/videos/Yaya 80.mp4";
import reactHowToVideo from "./assets/videos/React How To.mp4";
import musicPlayerVideo from "./assets/videos/Music Player.mp4";
import parallaxEffectVideo from "./assets/videos/Parallax Effect.mp4";
import waveRepresentationVideo from "./assets/videos/Wave Representation.mp4";
import mathsFunctionsViewerVideo from "./assets/videos/Maths Viewer.mp4";
// import visitedCountries from "./assets/videos/visited countries.mp4";
import loading from "./assets/videos/loading.mp4";
import intro from "./assets/videos/intro.mp4";
import orbit from "./assets/videos/orbit.mp4";
import star from "./assets/videos/star.mp4";
import packman from "./assets/videos/packman.mp4";
import barcelona from "./assets/videos/barcelona.mp4";
// import veler from "./assets/videos/veler.mp4";
import logo from "./assets/videos/logo.mp4";
import cookies from "./assets/videos/cookies.mp4";
import backend from "./assets/videos/backend.mp4";
import origens from "./assets/videos/origens.mp4";
import maps from "./assets/videos/maps.mp4";
import llm from "./assets/videos/llm.mp4";

import arquitecteIa1 from "./assets/videos/arquitecte-ia-1.mp4";
import arquitecteIa2 from "./assets/videos/arquitecte-ia-2.mp4";
import arquitecteIa3 from "./assets/videos/arquitecte-ia-3.mp4";
import arquitecteIa1Thumb from "./assets/thumbnails/arquitecte-ia-thumb-1.png";
import arquitecteIa2Thumb from "./assets/thumbnails/arquitecte-ia-thumb-2.png";
import arquitecteIa3Thumb from "./assets/thumbnails/arquitecte-ia-thumb-3.png";

import paradigms1 from "./assets/videos/paradigmes-1.mp4";
import paradigms2 from "./assets/videos/paradigmes-2.mp4";
import paradigms3 from "./assets/videos/paradigmes-3.mp4";
import paradigms1Thumb from "./assets/thumbnails/paradigmsThumb1.png";
import paradigms2Thumb from "./assets/thumbnails/paradigmsThumb2.png";
import paradigms3Thunb from "./assets/thumbnails/paradigmsThumb3.png";

import digitalSecrets1 from "./assets/videos/secrets-digitals-1.mp4";
import digitalSecrets2 from "./assets/videos/secrets-digitals-2.mp4";
import digitalSecrets3 from "./assets/videos/secrets-digitals-3.mp4";
import digitalSecrets4 from "./assets/videos/secrets-digitals-4.mp4";
import digitalSecrets5 from "./assets/videos/secrets-digitals-5.mp4";
import digitalSecrets1Thumb from "./assets/thumbnails/digitalSecrets1Thumb.png";
import digitalSecrets2Thumb from "./assets/thumbnails/digitalSecrets2Thumb.png";
import digitalSecrets3Thumb from "./assets/thumbnails/digitalSecrets3Thumb.png";
import digitalSecrets4Thumb from "./assets/thumbnails/digitalSecrets4Thumb.png";
import digitalSecrets5Thumb from "./assets/thumbnails/digitalSecrets5Thumb.png";


// Unique ids for the video lists (replaces the uuid package)
const newId = () =>
    (typeof crypto !== "undefined" && crypto.randomUUID)
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2) + Date.now().toString(36);

function Root() {
    const navigate = useNavigate();
    const location = useLocation();
    const viewRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [theme, setTheme] = useState(() => {
        try { return localStorage.getItem("theme") || "dark"; } catch (e) { return "dark"; }
    });

    // Same theme handling as miiree12lb.site
    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark-mode", theme === "dark");
        root.classList.toggle("light-mode", theme === "light");
        root.setAttribute("data-theme", theme);
        try { localStorage.setItem("theme", theme); } catch (e) { /* storage unavailable */ }
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
    const [currentVideoId, setCurrentVideoId] = useState(null);

    const [catalaVideos, setCatalaVideos] = useState([]);
    const [travelVideos, setTravelVideos] = useState([]);
    const [recapVideos, setRecapVideos] = useState([]);
    const [softwarePromoVideos, setSoftwarePromoVideos] = useState([]);
    const [diyVideos, setDiyVideos] = useState([]);
    // const [photoAndVideoSelection, setPhotoAndVideoSelection] = useState([]);
    // const [celebrationsVideos, setCelebrationsVideos] = useState([]);
    const [codingVideos, setCodingVideos] = useState([]);
    const [animationVideos, setAnimationVideos] = useState([]);
    const [arquitecteIaVideos, setArquitecteIaVideos] = useState([]);
    const [paradigmsVideos, setParadigmsVideos] = useState([]);
    const [digitalSecretsVideos, setDigitalSecretsVideos] = useState([]);

    const video2024 = { instagramUrl: "https://www.instagram.com/reel/DEQDLqCuPom/", vertical: true, title: "2024", subtitle: "Around the world", thumbnail: thumb2024 };
    const videoMenu = { videoUrl: menuMentorVideo, vertical: false, title: "MenuMentor", thumbnail: menuMentorThumb };
    const videoInterrail = { instagramUrl: "https://www.instagram.com/reel/DOAykh5jNUN/", vertical: true, title: "Interrail", subtitle: "Summer '25", thumbnail: interrailThumb };
    // const videoPrettySkies = { videoUrl: prettySkiesVideo, vertical: true, title: "Pretty Skies", thumbnail: prettySkiesThumb };
    const videoMusicPlayer = { videoUrl: musicPlayerVideo, vertical: true, title: "Music Player", subtitle: "with React", thumbnail: musicPlayerThumb };
    const videoParallax = { videoUrl: parallaxEffectVideo, vertical: true, title: "Parallax Effect", subtitle: "with React", thumbnail: parallaxEffectThumb };
    const videoWave = { videoUrl: waveRepresentationVideo, vertical: true, title: "Wave Representation", subtitle: "with React", thumbnail: waveRepresentationThumb };
    const video2025 = {instagramUrl: "https://www.instagram.com/reel/DS7R1dqDDot/", vertical: true, title: "2025", thumbnail: recap2025Thumb};
    // const videoVeler = {videoUrl: veler, vertical: false, title: "Veler", thumbnail: velerThumb};
    const videoCookies = {videoUrl: cookies, vertical: true, title: "Galetes", subtitle: "Cookies", thumbnail: cookiesThumb};
    const videoBackend = {videoUrl: backend, vertical: true, title: "Backend", thumbnail: backendThumb}

    const initialAnimationVideos = [
        {videoUrl: logo, vertical: true, title: "Logo", thumbnail: logoThumb},
        // videoVeler,
        {videoUrl: barcelona, vertical: true, title: "Panot", thumbnail: barcelonaThumb},
        {videoUrl: packman, vertical: false, title: "Packman", thumbnail: packmanThumb},
        {videoUrl: orbit, vertical: false, title: "Orbit", thumbnail: orbitThumb},
        {videoUrl: star, vertical: false, title: "Star", thumbnail: starThumb},
        {videoUrl: intro, vertical: false, title: "Intro", thumbnail: introThumb},
        {videoUrl: loading, vertical: false, title: "Loading", thumbnail: loadingThumb}
    ];

    const initialTravelVideos = [
        {instagramUrl: "https://www.instagram.com/reel/DZTrUW2OQMK/", vertical: true, title: "Canada", thumbnail: canadaThumb},
        // Hidden for now:
        // {videoUrl: visitedCountries, vertical: true, title: "Visited Countries", subtitle: "10/06/2026", thumbnail: visitedCountriesThumb},
        // Hidden for now (highlight link opens the first story on phones):
        // { instagramUrl: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTkxMTg0OTI4NzU1Mjcy?story_media_id=3826008991638235916_1590241605", vertical: true, title: "Copenhagen", thumbnail: copenhagenThumb },
        videoInterrail,
        video2024,
        { instagramUrl: "https://www.instagram.com/reel/DCzGUtdtAWT/", vertical: true, title: "London", thumbnail: londonThumb },
        { instagramUrl: "https://www.instagram.com/reel/C_n4IA9NZic/", vertical: true, title: "Wisconsin", subtitle: "Summer '24", thumbnail: wisconsinThumb },
    ];

    // Hidden for now: Photo & Video Selection
    // const initialPhotoAndVideoSelection = [
        // { videoUrl: footballStadiumsVideo, vertical: true, title: "Football Stadiums", thumbnail: footballStadiumsThumb },
        // videoPrettySkies,
        // { videoUrl: mountainsVideo, vertical: true, title: "Mountains", thumbnail: montainsThumb }
    // ];

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
        {videoUrl: llm, title: "LLM", vertical: true, thumbnail: llmThumb},
        {videoUrl: maps, title: "Maps", subtitle: "Dijkstra i A*", vertical: true, thumbnail: mapsThumb},
        {videoUrl: origens, title: "Programació i Dona", vertical: true, thumbnail: origensThumb},
        videoBackend,
        videoCookies,
        { videoUrl: mathsFunctionsViewerVideo, title: "Maths Viewer", vertical: true, thumbnail: mathsFunctionsViewerThumb },
        videoWave,
        videoParallax,
        videoMusicPlayer
    ];

    // Hidden for now: Celebrations
    // const initialCelebrationsVideos = [
        // { videoUrl: yaya80Video, vertical: true, title: "Yaya 80", thumbnail: yaya80Thumb }
    // ];

    const initialArquitecteIaVideos= [
        {videoUrl: arquitecteIa3, vertical: true, title: "Low-Code", subtitle: "Part 3", thumbnail: arquitecteIa3Thumb},
        {videoUrl: arquitecteIa2, vertical: true, title: "Validation", subtitle: "Part 2", thumbnail: arquitecteIa2Thumb},
        {videoUrl: arquitecteIa1, vertical: true, title: "Prompts", subtitle: "Part 1", thumbnail: arquitecteIa1Thumb}
    ];

    const initialParadigmsVideos = [
        {videoUrl: paradigms3, vertical: true, title: "Functional Programming", subtitle: "Part 3", thumbnail: paradigms3Thunb},
        {videoUrl: paradigms2, vertical: true, title: "Object-Oriented Programming", subtitle: "Part 2", thumbnail: paradigms2Thumb},
        {videoUrl: paradigms1, vertical: true, title: "Imperative vs Declarative", subtitle: "Part 1", thumbnail: paradigms1Thumb}
    ];

    const initialDigitalSecretsVideos = [
        {videoUrl: digitalSecrets5, vertical: true, title: "Quantum Threat", subtitle: "Part 5", thumbnail: digitalSecrets5Thumb},
        {videoUrl: digitalSecrets4, vertical: true, title: "HTTPS", subtitle: "Part 4", thumbnail: digitalSecrets4Thumb},
        {videoUrl: digitalSecrets3, vertical: true, title: "Hashing", subtitle: "Part 3", thumbnail: digitalSecrets3Thumb},
        {videoUrl: digitalSecrets2, vertical: true, title: "Asymetric Cryptography", subtitle: "Part 2", thumbnail: digitalSecrets2Thumb},
        {videoUrl: digitalSecrets1, vertical: true, title: "Caesar Code", subtitle: "Part 1", thumbnail: digitalSecrets1Thumb},
    ];

    useEffect(() => {
        const assignVideoIds = (videos) => videos.map((video) => ({ ...video, id: newId() }));
        setAnimationVideos(assignVideoIds(initialAnimationVideos));
        setTravelVideos(assignVideoIds(initialTravelVideos));
        setRecapVideos(assignVideoIds(initialRecapVideos));
        setSoftwarePromoVideos(assignVideoIds(initialSoftwarePromoVideos));
        setDiyVideos(assignVideoIds(initialDiyVideos));
        // setPhotoAndVideoSelection(assignVideoIds(initialPhotoAndVideoSelection));
        // setCelebrationsVideos(assignVideoIds(initialCelebrationsVideos));
        setCodingVideos(assignVideoIds(initialCodingVideos));
        setArquitecteIaVideos(assignVideoIds(initialArquitecteIaVideos));
        setParadigmsVideos(assignVideoIds(initialParadigmsVideos));
        setDigitalSecretsVideos(assignVideoIds(initialDigitalSecretsVideos));
    }, []);

    const sections = [
        {title: "Travel", videos: travelVideos, link: "/travel"},
        {title: "Year Recap", videos: recapVideos, link: "/year-recap"},
        {title: "Digital Secrets", videos: digitalSecretsVideos, link: "/digital-secrets"},
        {title: "Programming Paradigms", videos: paradigmsVideos, link: "/programming-paradigms"},
        {title: "AI Architect", videos: arquitecteIaVideos, link: "/ai-architect"},
        {title: "Coding", videos: codingVideos, link: "/coding"},
        {title: "Animations", videos: animationVideos, link: "/animations"},
        // {title: "Photo & Video Selection", videos: photoAndVideoSelection, link: "/photo-video"},
        {title: "DIY", videos: diyVideos, link: "/diy"},
        // {title: "Celebrations", videos: celebrationsVideos, link: "/celebrations"},
        {title: "Software Promo", videos: softwarePromoVideos, link: "/software-promo"},
    ];

    const [categories, setCategories] = useState(["All"].concat(sections.map((s) => s.title)));

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
            <Navbar
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                showFilters={isHomePage}
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <main id="route">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div id="view" ref={viewRef}>
                            {sections.map((s) => (
                                <Section key={s.title} title={s.title} videos={filterVideos(s.videos)} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} onViewAll={() => handleViewAll(s.link)} selectedCategory={selectedCategory} />
                            ))}
                        </div>
                    }
                />

                <Route path="/privacy" element={<Privacy />} />

                {sections.map((s) => (
                    <Route key={s.link} path={s.link} element={<ViewAll title={s.title} videos={s.videos} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} />} />
                ))}                
            </Routes>
            </main>

            <Footer />
        </>
    );
}

function Section({ title, videos, currentVideoId, setCurrentVideoId, onViewAll, selectedCategory }) {
    if (selectedCategory !== "All" && selectedCategory !== title) return;

    if (videos.length === 0) return (
        <div>
            <div className="header">
                <h2>{title}</h2>
                <button type="button" className="text-link view-all" onClick={onViewAll} aria-label={`View all ${title} videos`}>
                    View all →
                </button>
            </div>
            <p className="section-empty">No videos match your search.</p>
        </div>
    )

    const verticalVideos = videos.filter((v) => v.vertical === true);
    const horziontalVideos = videos.filter((v) => v.vertical === false);

    return (
        <div>
            <div className="header">
                <h2>{title}</h2>
                <button type="button" className="text-link view-all" onClick={onViewAll} aria-label={`View all ${title} videos`}>
                    View all →
                </button>
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