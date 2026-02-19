import { useRef, useState, useEffect } from 'react';

const LazyIframe = ({ src, title, width = '100%', height = 352, style = {}, allow = '', ...props }) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Normalize height to a valid CSS value
    const cssHeight = typeof height === 'number' ? `${height}px`
        : /^\d+$/.test(height) ? `${height}px`
            : height;

    return (
        <div
            ref={containerRef}
            style={{
                width,
                height: cssHeight,
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#1a1a1a',
                ...style,
            }}
        >
            {isVisible ? (
                <iframe
                    src={src}
                    title={title}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow={allow}
                    loading="lazy"
                    style={{ border: 'none', borderRadius: '12px' }}
                    {...props}
                />
            ) : (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#555',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-body)',
                    }}
                    aria-label={title || 'Conteúdo carregando'}
                >
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default LazyIframe;
