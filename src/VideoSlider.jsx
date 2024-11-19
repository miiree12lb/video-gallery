import React, { useState, useRef } from "react";
import DriveVideoEmbed from "./DriveVideoEmbed.jsx";
import { useMediaQuery } from "react-responsive";

function VideoSlider({ videoList }) {
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });
    const [currentPosition, setCurrentPosition] = useState(0);
    const visibleVideos = isDesktop ? 4 : 2;
    const containerRef = useRef(null);

    const videoWidth = containerRef.current
        ? containerRef.current.offsetWidth / visibleVideos
        : 0;

    const maxPosition = Math.max(0, videoList.length - visibleVideos);

    const handleNext = () => {
        if (currentPosition < maxPosition) {
            setCurrentPosition(currentPosition + 1);
        }
    };

    const handlePrev = () => {
        if (currentPosition > 0) {
            setCurrentPosition(currentPosition - 1);
        }
    };

    return (
        <div className="arrows-videos-container">
            
            {videoList.length > visibleVideos && (
                <button
                    className="arrows"
                    onClick={handlePrev}
                    style={{
                        opacity: currentPosition === 0 ? 0.5 : 1,
                        cursor: currentPosition === 0 ? "not-allowed" : "pointer",
                        disabled: currentPosition === 0 ? "true" : "false"
                    }}
                >
                    &#10094;
                </button>
            )}
            
            <div className="videos-container" ref={containerRef}>
                <div
                    className="videos-slider"
                    style={{
                        transform: `translateX(-${isDesktop ? Math.max(0, ((currentPosition * videoWidth * visibleVideos)-60)) : (currentPosition * videoWidth * visibleVideos)}px)`,
                        transition: "transform 0.3s ease-in-out",
                        display: "flex",
                        gap: '20px'
                    }}
                >
                    {videoList.map((video, index) => (
                        <div
                            key={index}
                            className="video-item"
                        >
                            <DriveVideoEmbed
                                videoUrl={video.videoUrl}
                                vertical={video.vertical}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {videoList.length > visibleVideos && (
                <button
                    className="arrows"
                    onClick={handleNext}
                    style={{
                        opacity: currentPosition === maxPosition ? 0.5 : 1,
                        cursor: currentPosition === maxPosition ? "not-allowed" : "pointer",
                        disabled: currentPosition === maxPosition ? "true" : "false"
                    }}
                >
                    &#10095;
                </button>
            )}
        </div>
    );
}

export default VideoSlider;
