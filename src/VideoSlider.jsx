import React, { useState, useRef } from "react";
import DriveVideoEmbed from "./DriveVideoEmbed.jsx";

function VideoSlider({ videoList }) {
    const [currentPosition, setCurrentPosition] = useState(0);
    const visibleVideos = 4.5;
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
            
            {videoList.length > 4 && <button className="arrows" onClick={handlePrev}>&#10094;</button>}
            
            <div className="videos-container" ref={containerRef}>
                <div
                    className="videos-slider"
                    style={{
                        transform: `translateX(-${Math.max(0, ((currentPosition * videoWidth * 4)-60))}px)`,
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
            {videoList.length > 4 && <button className="arrows" onClick={handleNext}>&#10095;</button>}
        </div>
    );
}

export default VideoSlider;
