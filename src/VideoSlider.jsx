import React, { useState } from "react";
import DriveVideoEmbed from "./DriveVideoEmbed.jsx";
import { useMediaQuery } from "react-responsive";

function VideoSlider({ videoList }) {
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });
    const visibleVideos = isDesktop ? 4 : 2;
    const [initialId, setInitialId] = useState(0);

    const getDisplayVideos = (startIndex) => {
        const videos = [];
        for (let i = 0; i < visibleVideos; i++) {
            const video = videoList[(startIndex + i) % videoList.length];
            if (!videos.some((v) => v.id === video.id)) {
                videos.push(video);
            }
        }
        return videos;
    };

    const handleNext = () => {
        const newStartIndex = (initialId + visibleVideos) % videoList.length;
        setInitialId(newStartIndex);
    };

    const handlePrev = () => {
        const newStartIndex =
            (initialId - visibleVideos + videoList.length) % videoList.length;
        setInitialId(newStartIndex);
    };

    const displayVideos = getDisplayVideos(initialId);

    return (
        <div className="arrows-videos-container">
            {videoList.length > visibleVideos && (
                <button className="arrows" onClick={handlePrev}>
                    &#10094;
                </button>
            )}

            {displayVideos.map((video) => (
                <div key={video.id} className="video-item">
                    <DriveVideoEmbed
                        videoUrl={video.videoUrl}
                        vertical={video.vertical}
                        title={video.title}
                        subtitle={video.subtitle}
                    />
                    <h3>{video.title}</h3>
                    <p>{video.subtitle}</p>
                </div>
            ))}

            {videoList.length > visibleVideos && (
                <button className="arrows" onClick={handleNext}>
                    &#10095;
                </button>
            )}
        </div>
    );
}

export default VideoSlider;
