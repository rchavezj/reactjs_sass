import React from 'react';

const BgVideo = ({ video, webm }) => {
    return (
        <div className="bg-video">
            <video className="bg-video__content" autoplay muted loop>
                <source src={video} type="video/mp4" />
                <source src={webm} type="video/webm" />
                        Your browser is not supported!
                </video>
        </div>
    )
}

export default BgVideo;