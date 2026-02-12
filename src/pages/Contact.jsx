const Contact = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0a0a',
            color: 'white',
            textAlign: 'center',
            gap: '2rem'
        }}>
            <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: '1rem',
                filter: 'grayscale(100%) brightness(0.8)'
            }}>
                <img src="/fotos/dj-rodriz-foto.png" alt="Rodriz" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-title)' }}>BOOKINGS</h1>

            <p style={{
                fontFamily: 'var(--font-body)',
                maxWidth: '400px',
                lineHeight: '1.6',
                opacity: 0.8
            }}>
                For bookings, press inquiries, and collaborations, please contact management.
            </p>

            <a href="mailto:booking@djrodriz.com" style={{
                marginTop: '2rem',
                padding: '1rem 3rem',
                border: '1px solid #ff2b2b',
                color: 'white',
                fontFamily: 'var(--font-body)',
                letterSpacing: '2px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}>
                GET IN TOUCH
            </a>
        </div>
    );
};
export default Contact;
