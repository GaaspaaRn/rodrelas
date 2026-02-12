import HorizontalSection from '../components/HorizontalSection';
import VerticalSection from '../components/VerticalSection';
import VideoBlock from '../components/VideoBlock';

const Sons = () => {
    // Placeholder data
    const horizontalVideos1 = [
        '/videos/rodriz.mp4',
        '/videos/rodriz1.mp4'
    ];

    const horizontalVideos2 = [
        '/videos/rodriz2.mp4',
        '/videos/rodriz3.mp4'
    ];

    return (
        <div className="sons-page">
            {/* SECTION 1 - Horizontal */}
            <HorizontalSection className="section-1">
                {horizontalVideos1.map((vid, i) => (
                    <VideoBlock key={i} src={vid} />
                ))}
                <div style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#111'
                }}>
                    <h1 style={{ fontSize: '5rem', color: 'white' }}>END OF HORIZONTAL 1</h1>
                </div>
            </HorizontalSection>

            {/* SECTION 2 - Vertical */}
            <VerticalSection className="section-2">
                <div style={{ padding: '4rem 2rem', minHeight: '100vh', background: '#0a0a0a' }}>
                    <h2 style={{ fontSize: '4rem', marginBottom: '2rem', color: '#ff2b2b' }}>SONS</h2>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
                        <button style={{ background: 'transparent', border: '1px solid white', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '20px' }}>ALL</button>
                        <button style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '0.5rem 1.5rem', borderRadius: '20px' }}>SINGLES</button>
                        <button style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '0.5rem 1.5rem', borderRadius: '20px' }}>ALBUMS</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} style={{ aspectRatio: '1/1', backgroundColor: '#1a1a1a', borderRadius: '12px' }}>
                                {/* Spotify Embed Placeholder */}
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>
                                    Spotify Embed {item}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </VerticalSection>

            {/* SECTION 3 - Horizontal */}
            <HorizontalSection className="section-3">
                <div style={{
                    width: '50vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#222'
                }}>
                    <h2 style={{ fontSize: '3rem' }}>NEXT HORIZONTAL BLOCK</h2>
                </div>
                {horizontalVideos2.map((vid, i) => (
                    <VideoBlock key={i} src={vid} />
                ))}
            </HorizontalSection>

            {/* SECTION 4 - Vertical */}
            <VerticalSection className="section-4">
                <div style={{ padding: '6rem 2rem', background: '#050505', minHeight: '80vh' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>MORE RELEASES</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        <div style={{ height: '80px', background: '#111', borderRadius: '8px' }}></div>
                        <div style={{ height: '80px', background: '#111', borderRadius: '8px' }}></div>
                        <div style={{ height: '80px', background: '#111', borderRadius: '8px' }}></div>
                    </div>
                </div>
            </VerticalSection>
        </div>
    );
};

export default Sons;
