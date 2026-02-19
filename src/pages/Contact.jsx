import SEOHead from '../components/SEOHead';

const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contrate DJ Rodriz",
    "description": "Entre em contato para contratar o DJ Rodriz para festas, eventos e casas noturnas.",
    "url": "https://djrodriz.com/contact",
    "mainEntity": {
        "@type": "Organization",
        "name": "DJ Rodriz",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-47-99152-9726",
            "contactType": "booking",
            "availableLanguage": "Portuguese"
        }
    }
};

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
            <SEOHead
                title="Contato e Booking"
                description="Contrate o DJ Rodriz para sua festa ou evento. Booking para casas noturnas, festivais e eventos corporativos em Santa Catarina, Paraná, Rio Grande do Sul e todo o Brasil."
                keywords="contratar DJ Rodriz, booking DJ, contratar DJ festa, contratar DJ evento, DJ para casas noturnas, contratar DJ Santa Catarina, contratar DJ Paraná, contratar DJ sul, orçamento DJ"
                canonical="/contact"
                jsonLd={contactJsonLd}
            />
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
