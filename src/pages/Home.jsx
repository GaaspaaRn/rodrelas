import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HorizontalSection from '../components/HorizontalSection';
import VerticalSection from '../components/VerticalSection';
import VideoBlock from '../components/VideoBlock';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    // Media Arrays
    // Media Arrays
    const videosSet1 = ['/videos/rodriz.mp4', '/videos/rodriz1.mp4'];
    const videosSet2 = ['/videos/rodriz2.mp4', '/videos/rodriz3.mp4'];
    const videosSet3 = ['/videos/rodriz4.mp4', '/videos/rodriz5.mp4'];
    const videosSet4 = ['/videos/rodriz6.mp4', '/videos/rodriz7.mp4'];

    useEffect(() => {
        const uiElements = document.querySelectorAll(".side-nav, .social-sidebar, footer, .app-header-logo, .desktop-hero-logo, .scroll-indicator");
        const sectionsToHideUI = ['#sons', '#visualizer', '#shows'];

        const ctx = gsap.context(() => {
            sectionsToHideUI.forEach(id => {
                ScrollTrigger.create({
                    trigger: id,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => gsap.to(uiElements, { autoAlpha: 0, duration: 0.5, ease: 'power2.out' }),
                    onLeave: () => gsap.to(uiElements, { autoAlpha: 1, duration: 0.5, ease: 'power2.in' }),
                    onEnterBack: () => gsap.to(uiElements, { autoAlpha: 0, duration: 0.5, ease: 'power2.out' }),
                    onLeaveBack: () => gsap.to(uiElements, { autoAlpha: 1, duration: 0.5, ease: 'power2.in' })
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            {/* Hero Overlay - Desktop Only */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 10,
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img
                    className="desktop-hero-logo"
                    src="/fotos/logo-dj-rodriz.PNG"
                    alt="DJ RODRIZ"
                    style={{
                        width: '60%',
                        maxWidth: '500px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.4))'
                    }}
                />
                <div className="hero-subtitle-container" style={{
                    marginTop: '0',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    pointerEvents: 'auto', textAlign: 'center'
                }}>
                    <p className="hero-subtitle" style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.9rem', letterSpacing: '6px',
                        color: 'white', opacity: 0.9, textTransform: 'uppercase', margin: 0,
                        mixBlendMode: 'difference'
                    }}>
                        DJ & Produtor
                    </p>
                </div>

                <div className="scroll-indicator">
                    <span>SCROLL</span>
                    <div className="arrow-down"></div>
                </div>
            </div>

            {/* BLOCK 1 - Horizontal Videos */}
            <HorizontalSection id="home">
                {videosSet1.map((vid, index) => (
                    <VideoBlock key={`h1-${index}`} src={vid} />
                ))}
            </HorizontalSection>

            {/* BLOCK 2 - Vertical (Sons) */}
            <div id="sons" style={{ position: 'relative', zIndex: 20, background: '#0a0a0a' }}>
                <VerticalSection className="sons-sec">
                    <div className="content-container">
                        <h2 className="section-title">SONS</h2>
                        <div className="media-grid">
                            <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/1T0Za0ldouSRjRMH94SwWI?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/6i1q1P90W9fsW6S9UMv1ay?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/6klY5Kay7mnIz1I2qTH3Kf?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/3OXMbP3WG2XVrMELZYlmG6?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </VerticalSection>
            </div>

            {/* BLOCK 3 - Horizontal Videos */}
            <HorizontalSection>
                {videosSet2.map((vid, index) => (
                    <VideoBlock key={`h2-${index}`} src={vid} />
                ))}
            </HorizontalSection>

            {/* BLOCK 4 - Vertical (Visualizer -> VIDEOS) */}
            <div id="visualizer" style={{ position: 'relative', zIndex: 20, background: '#0a0a0a' }}>
                <VerticalSection className="vis-sec">
                    <div className="content-container">
                        <h2 className="section-title">VIDEOS</h2>
                        <div className="media-grid">
                            <iframe width="100%" height="352" style={{ borderRadius: '12px' }} src="https://www.youtube.com/embed/G2Ez0dVPx-g?si=08jI4dI38XO8C_Gv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe width="100%" height="352" style={{ borderRadius: '12px' }} src="https://www.youtube.com/embed/sHf7p-rlgVI?si=Pv-8OXVPBohT8XNi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe width="100%" height="352" style={{ borderRadius: '12px' }} src="https://www.youtube.com/embed/x9mZ-fCKjLQ?si=ism9kwanJaY31uuY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe width="100%" height="352" style={{ borderRadius: '12px' }} src="https://www.youtube.com/embed/uFLGdHyCHUc?si=MZGy6WO1e_ISjpFc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </VerticalSection>
            </div>

            {/* BLOCK 5 - Horizontal Videos */}
            <HorizontalSection>
                {videosSet3.map((vid, index) => (
                    <VideoBlock key={`h3-${index}`} src={vid} />
                ))}
            </HorizontalSection>

            {/* BLOCK 6 - Vertical (SHOWS) - 1 Screen Mobile/1 Screen Desktop */}
            <div id="shows" style={{ position: 'relative', zIndex: 20, background: '#0a0a0a' }}>
                <VerticalSection>
                    {/* Removed single-screen-mobile centering force to match Visualizers top spacing */}
                    <div className="content-container single-screen-mobile">
                        <h2 className="section-title">SHOWS</h2>

                        <div className="shows-list">
                            {[
                                { day: "06", month: "FEV", location: "CURITIBA, PR", venue: "LEVEL CLUB" },
                                { day: "07", month: "FEV", location: "FLORIANOPOLIS, SC", venue: "P12 BEACH CLUB" },
                                { day: "13", month: "FEV", location: "JOINVILLE, SC", venue: "SQUARE GARDEN" },
                                { day: "14", month: "FEV", location: "PORTO BELO, SC", venue: "SURF CLUB" }
                            ].map((show, index) => (
                                <div key={index} className="show-item">
                                    <div className="show-date">
                                        <span className="day">{show.day}</span>
                                        <span className="month">{show.month}</span>
                                    </div>
                                    <div className="show-separator"></div>
                                    <div className="show-info">
                                        <span className="location">{show.location}</span>
                                        <span className="venue">{show.venue}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </VerticalSection>
            </div>

            {/* BLOCK 6.5 - Horizontal Videos (New) */}
            <HorizontalSection>
                {videosSet4.map((vid, index) => (
                    <VideoBlock key={`h4-${index}`} src={vid} />
                ))}
            </HorizontalSection>

            {/* BLOCK 7 - Vertical (Contact / End) */}
            <div id="contact" style={{ position: 'relative', zIndex: 20, background: '#0a0a0a' }}>
                <VerticalSection>
                    <div className="content-container single-screen-mobile">
                        <h2 className="section-title">CONTATO</h2>
                        <div className="contact-container">
                            <div className="contact-image-wrapper">
                                <img src="/fotos/dj-rodriz-foto.png" alt="DJ Rodriz" className="contact-image" />
                            </div>
                            <div className="contact-content-wrapper">
                                <p className="contact-bio mobile-hidden">
                                    Rodriz, DJ e produtor musical, iniciou sua trajetória aos 16 anos, produzindo com foco em energia de pista e impacto sonoro.
                                </p>
                                <p className="contact-bio mobile-hidden">
                                    Aos 18 anos, consolidou seu nome e foi reconhecido em 2025 como uma das revelações do ano.
                                </p>
                                <p className="contact-bio">
                                    Com uma forte leitura de pista, chega em 2026 um dos nomes mais promissores da cena em ascensão.
                                </p>

                                <a
                                    href="https://wa.me/5547991498083?text=Ol%C3%A1%2C%20tudo%20certo%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-btn"
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    CONTRATE UM SHOW
                                </a>
                            </div>
                        </div>
                    </div>
                </VerticalSection>
            </div>
        </div>
    );
};

export default Home;
