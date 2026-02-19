import SEOHead from '../components/SEOHead';

const Visualizer = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0a0a',
            color: 'white'
        }}>
            <SEOHead
                title="Vídeos e Clipes"
                description="Assista aos vídeos e clipes do DJ Rodriz. Sets ao vivo, videoclipes e performances em casas noturnas e festivais."
                keywords="DJ Rodriz vídeos, clipes DJ Rodriz, DJ megafunk vídeo, sets ao vivo, performances DJ, vídeos DJ sul"
                canonical="/visualizer"
            />
            <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-title)' }}>VISUALIZER COMING SOON</h1>
        </div>
    );
};
export default Visualizer;
