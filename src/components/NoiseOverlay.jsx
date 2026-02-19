const NoiseOverlay = () => {
    return (
        <div
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999,
                opacity: 0.15,
                mixBlendMode: 'overlay',
            }}
        >
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <filter id="noise-filter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
            </svg>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    filter: 'url(#noise-filter)',
                }}
            />
        </div>
    );
};

export default NoiseOverlay;
