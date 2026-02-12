import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection = ({ children, className, id }) => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        // Clean any previous triggers
        ScrollTrigger.getAll().forEach(t => {
            if (t.trigger === section) t.kill();
        });

        const getScrollAmount = () => {
            let trackWidth = track.scrollWidth;
            return -(trackWidth - window.innerWidth);
        };

        const ctx = gsap.context(() => {
            const tween = gsap.to(track, {
                x: getScrollAmount,
                ease: "none",
            });

            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: () => `+=${Math.abs(getScrollAmount())}`, // Exact width diff
                pin: true,
                animation: tween,
                scrub: 1, // Slight smoothing for "weight"
                invalidateOnRefresh: true,
                anticipatePin: 1
            });
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`horizontal-section ${className || ''}`}
            style={{
                height: '100vh',
                width: '100vw',
                position: 'relative',
                overflow: 'hidden' // Force hidden for GSAP
            }}
        >
            <div
                ref={trackRef}
                className="horizontal-track"
                style={{
                    display: 'flex',
                    height: '100%',
                    width: 'fit-content'
                }}
            >
                {children}
            </div>
        </section>
    );
};

export default HorizontalSection;
