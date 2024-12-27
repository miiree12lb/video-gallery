import React, { useState } from "react";
import DriveVideoEmbed from "./DriveVideoEmbed.jsx";
import { useMediaQuery } from "react-responsive";

function VideoSlider({ videoList, currentVideoId, setCurrentVideoId }) {
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });
    const vertical = videoList[0]?.vertical || false;
    const [initialId, setInitialId] = useState(0);
    const visibleVideos = isDesktop ? (vertical ? 4 : 2) : (vertical ? 2 : 1);

    function assignListIds(videos) {
        return videos.map((video, listId) => ({ ...video, listId }));
    }

    videoList = assignListIds(videoList);

    const getDisplayVideos = (startIndex) => {
        const videos = [];
        for (let i = 0; i < visibleVideos; i++) {
            const video = videoList[(startIndex + i) % videoList.length];
            if (video && video.listId !== undefined && !videos.some((v) => v.listId === video.listId)) {
                videos.push(video);
            }
        }
        return videos;
    };

    const handleNext = () => {
        setInitialId((prevId) => (prevId + visibleVideos) % videoList.length);
    };

    const handlePrev = () => {
        setInitialId((prevId) => (prevId - visibleVideos + videoList.length) % videoList.length);
    };

    const handleVideoPlay = (videoId) => {
        if (currentVideoId && currentVideoId !== videoId) {
            const currentIframe = document.getElementById(`iframe-${currentVideoId}`);
            if (currentIframe) {
                currentIframe.contentWindow.postMessage(
                    '{"event":"command","func":"pauseVideo","args":""}',
                    "*"
                );
            }
        }

        setCurrentVideoId(videoId);
    };

    if (!Array.isArray(videoList)) {
        console.error("Invalid or empty videoList:", videoList);
        return null;
    }

    if (videoList.length === 0) {
        return <p className="no-videos-message">No videos match your search.</p>;
    }

    const displayVideos = getDisplayVideos(initialId);

    return (
        <div className="video-slider">
            <div className="arrows-videos-container">
                {videoList.length > visibleVideos && (
                    <button className="arrows" id="prev" onClick={handlePrev}>
                        &#10094;
                    </button>
                )}

                <div className={`videos-container ${vertical ? "" : "horizontal"}`}>
                    {displayVideos.map((video) => (
                        <div key={video.id} className="video-item">
                            <DriveVideoEmbed
                                videoUrl={video.videoUrl}
                                vertical={video.vertical}
                                title={video.title}
                                subtitle={video.subtitle}
                                videoId={video.id}
                                isPlaying={currentVideoId === video.id}
                                onPlay={handleVideoPlay}
                                thumbnail={video.thumbnail}
                            />
                            <h3>{video.title}</h3>
                            <p>{video.subtitle}</p>
                        </div>
                    ))}
                </div>

                {videoList.length > visibleVideos && (
                    <button className="arrows" id="next" onClick={handleNext}>
                        &#10095;
                    </button>
                )}
            </div>

            <div className="dots-container">
                {Array.from({ length: videoList.length }, (_, i) => (
                    <span
                        key={i}
                        className={`dot ${displayVideos.some((v) => v.listId === i) ? "active" : ""}`}
                        onClick={() => setInitialId(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default VideoSlider;
