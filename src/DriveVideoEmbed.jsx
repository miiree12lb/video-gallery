import React from "react";
// @ts-ignore
import './css/slider.css';

function DriveVideoEmbed({ videoUrl, vertical}) {
    let width, height;
	if (vertical) {
		width="15vw";
        height="26.6666666666vw";
	}
	else {
		height="15vw" 
        width="26.6666666666vw"
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
                title="Google Drive Video"
            ></iframe>
        </div>
    );
}

export default DriveVideoEmbed;
