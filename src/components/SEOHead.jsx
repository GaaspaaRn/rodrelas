import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'DJ Rodriz';
const SITE_URL = 'https://www.djrodriz.com';
const DEFAULT_IMAGE = `${SITE_URL}/fotos/rodriz-opengraph.jpg`;
const DEFAULT_DESCRIPTION = 'DJ Rodriz — DJ e Produtor Musical especialista em megafunk. Contrate o melhor DJ do Sul do Brasil para festas e eventos em Santa Catarina, Paraná e Rio Grande do Sul.';

const SEOHead = ({
    title,
    description = DEFAULT_DESCRIPTION,
    keywords = '',
    canonical = '',
    ogImage = DEFAULT_IMAGE,
    ogType = 'website',
    jsonLd = null
}) => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Contratar DJ Megafunk - Sul do Brasil`;
    const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content={ogType} />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:site_name" content={SITE_NAME} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
