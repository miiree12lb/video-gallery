import React, { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
// @ts-ignore
import "./css/slider.css";

function DriveVideoEmbed({ videoUrl, vertical, title, subtitle, videoId, isPlaying, onPlay, thumbnail }) {
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });
    const iframeRef = useRef(null);

    // Determine dimensions based on layout (desktop/mobile and vertical orientation)
    let width, height;
    if (vertical) {
        width = isDesktop ? "15vw" : "30vw";
        height = `${(parseFloat(width) * 16) / 9}vw`;
    } else {
        height = "15vw";
        width = "26.6666666666vw";
    }

    // useEffect(() => {
    //     // Post message to iframe for autoplay or pause based on `isPlaying`
    //     if (iframeRef.current && isPlaying) {
    //         iframeRef.current.contentWindow.postMessage(
    //             '{"event":"command","func":"playVideo","args":""}',
    //             "*"
    //         );
    //     } else if (iframeRef.current && !isPlaying) {
    //         iframeRef.current.contentWindow.postMessage(
    //             '{"event":"command","func":"pauseVideo","args":""}',
    //             "*"
    //         );
    //     }
    // }, [isPlaying]);

    // Construct iframe URL with `enablejsapi=1` for control and autoplay setup
    // const embedUrl = `${videoUrl}?enablejsapi=1&autoplay=${isPlaying ? 1 : 0}&mute=1`;

    return (
        <div className="video-container">
            {!isPlaying ? (
                <div
                    className="thumbnail-overlay"
                    style={{
                        width,
                        height,
                        position: "relative",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: thumbnail ? "transparent" : "#292929", // Fallback color
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
                        width,
                        height,
                        border: "none",
                        borderRadius: "5px",
                    }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={title}
                ></iframe>
            )}
        </div>
    );
}

export default DriveVideoEmbed;
