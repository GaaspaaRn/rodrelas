const Shows = () => {
    const shows = [
        { date: '12 MAR', city: 'SÃO PAULO', venue: 'D-EDGE' },
        { date: '15 MAR', city: 'RIO DE JANEIRO', venue: 'ACAPULCO' },
        { date: '22 MAR', city: 'CURITIBA', venue: 'VIBE' },
        { date: '05 APR', city: 'BELO HORIZONTE', venue: 'DEPUTAMADRE' },
    ];

    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: '150px',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            background: '#0a0a0a',
            color: 'white'
        }}>
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
