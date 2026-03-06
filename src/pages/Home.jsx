import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HorizontalSection from '../components/HorizontalSection';
import VerticalSection from '../components/VerticalSection';
import VideoBlock from '../components/VideoBlock';
import LazyIframe from '../components/LazyIframe';
import SEOHead from '../components/SEOHead';

gsap.registerPlugin(ScrollTrigger);

const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "DJ Rodriz",
    "alternateName": "Rodriz",
    "jobTitle": "DJ e Produtor Musical",
    "description": "DJ e produtor musical especialista em megafunk, reconhecido como uma das revelações de 2025. Um dos nomes mais promissores da cena do Sul do Brasil.",
    "url": "https://djrodriz.com",
    "image": "https://djrodriz.com/fotos/dj-rodriz-foto.png",
    "knowsAbout": ["Megafunk", "DJ Set", "Produção Musical", "Funk"],
    "workLocation": {
        "@type": "Place",
        "name": "Sul do Brasil",
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "SC",
            "addressCountry": "BR"
        }
    }
};

const Home = () => {
    // Media Arrays
    const videosSet1 = ['/videos/rodriz.webm', '/videos/rodriz1.webm'];
    const videosSet2 = ['/videos/rodriz2.webm', '/videos/rodriz3.webm'];
    const videosSet3 = ['/videos/rodriz4.webm', '/videos/rodriz5.webm'];
    const videosSet4 = ['/videos/rodriz6.webm', '/videos/rodriz7.webm'];

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
            <SEOHead
                title="DJ e Produtor Musical | Contratar DJ Megafunk"
                description="DJ Rodriz — DJ e Produtor Musical especialista em megafunk. Contrate o melhor DJ do Sul do Brasil para suas festas e eventos em Santa Catarina, Paraná e Rio Grande do Sul. Energia de pista e impacto sonoro."
                keywords="DJ Rodriz, contratar DJ, DJ megafunk, contratar DJ Santa Catarina, contratar DJ Paraná, contratar DJ Rio Grande do Sul, DJ sul, DJ festa, DJ evento, DJ produtor musical, DJ Florianópolis, DJ Curitiba, megafunk"
                canonical="/"
                jsonLd={homeJsonLd}
            />
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
                    width="500"
                    height="281"
                    fetchPriority="high"
                    style={{
                        width: '60%',
                        maxWidth: '500px',
                        height: 'auto',
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
                       DJ Rodriz / DJ & Produtor
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
            <div id="sons" style={{ position: 'relative', zIndex: 20, background: 'radial-gradient(circle at center, #2e0909 0%, #0a0a0a 100%)' }}>
                <VerticalSection className="sons-sec">
                    <div className="content-container">
                        <h2 className="section-title">SONS</h2>
                        <div className="media-grid">
                            <LazyIframe src="https://open.spotify.com/embed/track/1T0Za0ldouSRjRMH94SwWI?utm_source=generator" title="DJ Rodriz - Faixa no Spotify" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                            <LazyIframe src="https://open.spotify.com/embed/track/6i1q1P90W9fsW6S9UMv1ay?utm_source=generator" title="DJ Rodriz - Faixa no Spotify" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                            <LazyIframe src="https://open.spotify.com/embed/track/6klY5Kay7mnIz1I2qTH3Kf?utm_source=generator" title="DJ Rodriz - Faixa no Spotify" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                            <LazyIframe src="https://open.spotify.com/embed/track/3OXMbP3WG2XVrMELZYlmG6?utm_source=generator" title="DJ Rodriz - Faixa no Spotify" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
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
            <div id="visualizer" style={{ position: 'relative', zIndex: 20, background: 'radial-gradient(circle at center, #0a0a0a 0%, #2e0909 60%, #0a0a0a 100%)' }}>
                <VerticalSection className="vis-sec">
                    <div className="content-container">
                        <h2 className="section-title">VIDEOS</h2>
                        <div className="media-grid">
                            <LazyIframe src="https://www.youtube.com/embed/G2Ez0dVPx-g?si=08jI4dI38XO8C_Gv" title="DJ Rodriz - Vídeo no YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            <LazyIframe src="https://www.youtube.com/embed/sHf7p-rlgVI?si=Pv-8OXVPBohT8XNi" title="DJ Rodriz - Vídeo no YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            <LazyIframe src="https://www.youtube.com/embed/x9mZ-fCKjLQ?si=ism9kwanJaY31uuY" title="DJ Rodriz - Vídeo no YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            <LazyIframe src="https://www.youtube.com/embed/uFLGdHyCHUc?si=MZGy6WO1e_ISjpFc" title="DJ Rodriz - Vídeo no YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
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

            {/* BLOCK 6 - Vertical (SHOWS) */}
            <div id="shows" style={{ position: 'relative', zIndex: 20, background: 'radial-gradient(circle at center, #2e0909 0%, #0a0a0a 100%)' }}>
                <VerticalSection>
                    <div className="content-container single-screen-mobile">
                        <h2 className="section-title">SHOWS</h2>

                        <div className="shows-list">
                            {[
                                { day: "07", month: "MAR", location: "CANELIHA, SC", venue: "INVICTOS CLUB" },
                                { day: "14", month: "MAR", location: "OTACILIO COSTA, SC", venue: "JET FLOREST" },
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
            <div id="contact" style={{ position: 'relative', zIndex: 20, background: 'radial-gradient(circle at center, #0a0a0a 0%, #2e0909 60%, #0a0a0a 100%)' }}>
                <VerticalSection>
                    <div className="content-container single-screen-mobile">
                        <h2 className="section-title">CONTATO</h2>
                        <div className="contact-container">
                            <div className="contact-image-wrapper">
                                <img
                                    src="/fotos/dj-rodriz-foto.png"
                                    alt="DJ Rodriz"
                                    className="contact-image"
                                    width="400"
                                    height="600"
                                    loading="lazy"
                                />
                            </div>
                            <div className="contact-content-wrapper">
                                <p className="contact-bio mobile-hidden">
                                    DJ Rodriz, é DJ e produtor musical, iniciou sua trajetória aos 16 anos, produzindo com foco em energia de pista e impacto sonoro.
                                </p>
                                <p className="contact-bio mobile-hidden">
                                    Aos 18 anos, consolidou seu nome e foi reconhecido em 2025 como uma das revelações do ano.
                                </p>
                                <p className="contact-bio">
                                    Com uma forte leitura de pista, chega em 2026 como um dos nomes mais promissores da cena em ascensão.
                                </p>

                                <a
                                    href="https://wa.me/5547991529726?text=Ol%C3%A1%2C%20tudo%20certo%3F"
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
