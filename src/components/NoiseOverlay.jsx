import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const NoiseOverlay = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        const loop = () => {
            const w = canvas.width;
            const h = canvas.height;

            const idata = ctx.createImageData(w, h);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;

            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    buffer32[i] = 0xff000000; // Black
                } else {
                    buffer32[i] = 0x00000000; // Transparent
                }
            }

            ctx.putImageData(idata, 0, 0);
            requestAnimationFrame(loop);
        };

        const animFrame = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animFrame);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999,
                opacity: 0.08,
                mixBlendMode: 'overlay',
            }}
        />
    );
};

export default NoiseOverlay;
