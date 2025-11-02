import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DriveVideoEmbed from "./DriveVideoEmbed.jsx";
import { useMediaQuery } from "react-responsive";
import "./css/grid.css"

function ViewAll({ title, verticalVideoList, horizontalVideoList, currentVideoId, setCurrentVideoId }) {
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });
    const [initialId, setInitialId] = useState(0);
    const navigate = useNavigate();

    function assignListIds(videos) {
        return videos.map((video, listId) => ({ ...video, listId }));
    }

    if (verticalVideoList)
        verticalVideoList = assignListIds(verticalVideoList);

    if (horizontalVideoList)
        horizontalVideoList = assignListIds(horizontalVideoList);

    const handleVideoPlay = (videoId) => {
        if (currentVideoId && currentVideoId !== videoId) {
            const currentVideo = document.getElementById(`iframe-${currentVideoId}`);
            if (currentVideo && typeof currentVideo.pause === "function") {
                currentVideo.pause();
            }
        }

        setCurrentVideoId(videoId);
    };

    return (
        <div className="view-all-container">
            <div className="view-all-title">
                <h1 onClick={() => navigate("/")}>&#10094;</h1>
                <h1>{title}</h1>
            </div>

            {verticalVideoList && <div className="vertical-grid">
                {verticalVideoList.map((video) => (
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
                        <div
                            style={{maxWidth: video.vertical ? (isDesktop ? "15vw" : "30vw") : (isDesktop ? `${(20 * 16) / 9}vw` : `${(35 * 16) / 9}vw`)}}
                        >
                            <h3>{video.title}</h3>
                            <p>{video.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>}

            {horizontalVideoList && <div className="horizontal-grid">
                {horizontalVideoList.map((video) => (
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
                        <div
                            style={{maxWidth: video.vertical ? (isDesktop ? "15vw" : "30vw") : (isDesktop ? `${(20 * 16) / 9}vw` : `${(35 * 16) / 9}vw`)}}
                        >
                            <h3>{video.title}</h3>
                            <p>{video.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    );
}

export default ViewAll;
