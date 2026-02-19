import { useRef, useEffect, useState } from 'react';

const VideoBlock = ({ src, className }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const video = videoRef.current;
                if (!video) return;

                if (entry.isIntersecting) {
                    if (!isLoaded) {
                        video.src = src;
                        setIsLoaded(true);
                    }
                    video.play().catch(() => { });
                } else {
                    if (isLoaded) {
                        video.pause();
                    }
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [src, isLoaded]);

    return (
        <div
            ref={containerRef}
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
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.8
                }}
            />
        </div>
    );
};

export default VideoBlock;
