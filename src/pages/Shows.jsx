import SEOHead from '../components/SEOHead';

const shows = [
    { date: '12 MAR', city: 'SÃO PAULO', venue: 'D-EDGE' },
    { date: '15 MAR', city: 'RIO DE JANEIRO', venue: 'ACAPULCO' },
    { date: '22 MAR', city: 'CURITIBA', venue: 'VIBE' },
    { date: '05 APR', city: 'BELO HORIZONTE', venue: 'DEPUTAMADRE' },
];

const showsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Shows DJ Rodriz",
    "itemListElement": shows.map((show, idx) => ({
        "@type": "MusicEvent",
        "position": idx + 1,
        "name": `DJ Rodriz ao vivo - ${show.venue}`,
        "performer": {
            "@type": "MusicGroup",
            "name": "DJ Rodriz"
        },
        "location": {
            "@type": "EventVenue",
            "name": show.venue,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": show.city,
                "addressCountry": "BR"
            }
        }
    }))
};

const Shows = () => {
    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: '150px',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            background: '#0a0a0a',
            color: 'white'
        }}>
            <SEOHead
                title="Shows e Agenda"
                description="Confira a agenda de shows do DJ Rodriz. Próximos eventos e festas em São Paulo, Rio de Janeiro, Curitiba, Belo Horizonte e todo o Brasil. Megafunk ao vivo."
                keywords="DJ Rodriz shows, agenda DJ Rodriz, DJ megafunk ao vivo, shows DJ sul, festas DJ Rodriz, eventos DJ, DJ Curitiba show, DJ São Paulo"
                canonical="/shows"
                jsonLd={showsJsonLd}
            />
            <h1 style={{ fontSize: '4rem', fontFamily: 'var(--font-title)', marginBottom: '4rem', color: '#ff2b2b' }}>UPCOMING SHOWS</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {shows.map((show, idx) => (
                    <div key={idx} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        padding: '2rem 0',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        alignItems: 'center',
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.2rem',
                        letterSpacing: '1px'
                    }}>
                        <div style={{ color: '#ff2b2b' }}>{show.date}</div>
                        <div>{show.city}</div>
                        <div style={{ textAlign: 'right', opacity: 0.7 }}>{show.venue}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Shows;
