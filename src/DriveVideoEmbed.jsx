import React from "react";
import { useMediaQuery } from "react-responsive";
// @ts-ignore
import './css/slider.css';

function DriveVideoEmbed({ videoUrl, vertical, title, subtitle}) {
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });

    let width, height;
	if (vertical) {
        if (isDesktop) {
            width="15vw";
        }
        else {
            width="30vw";
        }
		
        height = `${(parseFloat(width) * 16) / 9}vw`;
	}
	else {
		height="15vw";
        width="26.6666666666vw";
	}
	
	return (
        <div>
            <iframe
                src={videoUrl}
                style={{

                    top: 0,
                    left: 0,
                    width: width,
                    height: height,
                    border: "none",
                }}
                allow="autoplay"
                allowFullScreen
                title="Google Drive Video"
            ></iframe>
        </div>
    );
}

export default DriveVideoEmbed;
