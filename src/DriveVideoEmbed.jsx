import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import "./css/slider.css";
// @ts-ignore
import instagramIcon from "./assets/images/socials/instagram.svg";

function DriveVideoEmbed({ videoUrl, instagramUrl, vertical, title, subtitle, videoId, isPlaying, onPlay, thumbnail }) {
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });
    const videoRef = useRef(null);

    let width, height;
    if (vertical) {
        width = isDesktop ? "15vw" : "30vw";
        height = `${(parseFloat(width) * 16) / 9}vw`;
    } else {
        height = isDesktop ? "20vw" : "35vw";
        width = `${(parseFloat(height) * 16) / 9}vw`;
    }

    const handlePlay = (id) => {
        onPlay(id);

        setTimeout(() => {
            const vid = videoRef.current;
            if (!vid) return;
            
            vid.style.objectFit = "contain";

            // Request fullscreen
            if (vid.requestFullscreen) vid.requestFullscreen();
            else if (vid.webkitEnterFullscreen) vid.webkitEnterFullscreen();
            else if (vid.msRequestFullscreen) vid.msRequestFullscreen();
        }, 300);
    };

    const thumbnailStyle = {
        width: "100%",
        height: "100%",
        position: "relative",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: thumbnail ? "transparent" : "#292929",
        backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "5px",
    };

    // Videos with licensed music are only played on Instagram, where the music licence applies.
    if (instagramUrl) {
        return (
            <div className="video-container" style={{ width, height }}>
                <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="thumbnail-overlay instagram-link"
                    aria-label={`Watch ${title}${subtitle ? " " + subtitle : ""} on Instagram (opens in a new tab)`}
                    style={{ ...thumbnailStyle, textDecoration: "none", color: "inherit" }}
                >
                    {!thumbnail && <h4>{title}</h4>}
                    {!thumbnail && <p>{subtitle}</p>}
                    <span className="instagram-badge">
                        <img src={instagramIcon} alt="" width="18" height="18" />
                        <span className="instagram-badge-text">Watch on Instagram</span>
                    </span>
                </a>
            </div>
        );
    }

    return (
        <div className="video-container"
            style={{
                width,
                height
            }}
        >
            {!isPlaying ? (
                <div
                    className="thumbnail-overlay"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: thumbnail ? "transparent" : "#292929",
                        backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "5px",
                    }}
                    onClick={() => handlePlay(videoId)}
                >
                    {!thumbnail && <h4>{title}</h4>}
                    {!thumbnail && <p>{subtitle}</p>}
                </div>
            ) : (
                <video
                    ref={videoRef}
                    id={`iframe-${videoId}`}
                    src={videoUrl}
                    autoPlay
                    controls
                    allowFullScreen
                    playsInline
                    style={{
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "5px",
                        objectFit: "cover",
                    }}
                ></video>
            )}
        </div>
    );
}

export default DriveVideoEmbed;
