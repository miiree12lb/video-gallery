import React, { useRef} from "react";
import { useMediaQuery } from "react-responsive";
import ReactPlayer from 'react-player'
// @ts-ignore
import "./css/slider.css";

function DriveVideoEmbed({ videoUrl, vertical, title, subtitle, videoId, isPlaying, onPlay, thumbnail }) {
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });
    const iframeRef = useRef(null);

    let width, height;
    if (vertical) {
        width = isDesktop ? "15vw" : "30vw";
        height = `${(parseFloat(width) * 16) / 9}vw`;
    } else {
        height = isDesktop ? "20vw" : "35vw";
        width = `${(parseFloat(height) * 16) / 9}vw`;
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
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: thumbnail ? "transparent" : "#292929",
                        backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "5px",
                    }}
                    onClick={() => onPlay(videoId)}
                >
                </div>
            ) : (
                <iframe
                    ref={iframeRef}
                    id={`iframe-${videoId}`}
                    src={videoUrl}
                    style={{
                        top: 0,
                        left: 0,
                        width:"100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "5px",
                    }}
                    allow="autoplay; encrypted-media;"
                    allowFullScreen
                    title={title}
                ></iframe>

            )}
        </div>
    );
}

export default DriveVideoEmbed;
