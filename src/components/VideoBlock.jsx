import { useRef, useEffect } from 'react';

const VideoBlock = ({ src, className }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Ensure video plays
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.log("Autoplay blocked", e));
        }
    }, []);

    return (
        <div
            className={className}
            style={{
                width: '100vw',
                height: '100vh',
                flexShrink: 0,
                position: 'relative',
                background: 'black',
                overflow: 'hidden'
            }}
        >
            <video
                ref={videoRef}
                src={src}
                autoPlay
                muted
                loop
                playsInline
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.8 // Slightly darken for texture visibility
                }}
            />
            {/* Grain/Texture logic can be handled globablly or here if specific per video */}
        </div>
    );
};

export default VideoBlock;
