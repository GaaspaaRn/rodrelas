import SEOHead from '../components/SEOHead';

const pressJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://djrodriz.com/#person",
            "name": "DJ Rodriz",
            "alternateName": "Rodriz",
            "jobTitle": "DJ e Produtor Musical de Megafunk",
            "description": "DJ e produtor musical especialista em megafunk, baseado em Joinville, Santa Catarina. Um dos nomes mais promissores da cena do Sul do Brasil, com shows em todo o país.",
            "url": "https://djrodriz.com",
            "image": "https://djrodriz.com/fotos/dj-rodriz-foto.png",
            "knowsAbout": ["Megafunk", "DJ Set", "Produção Musical", "Funk", "Música Eletrônica"],
            "birthPlace": {
                "@type": "Place",
                "name": "Joinville, Santa Catarina, Brasil"
            },
            "workLocation": {
                "@type": "Place",
                "name": "Sul do Brasil",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Joinville",
                    "addressRegion": "SC",
                    "addressCountry": "BR"
                }
            },
            "sameAs": [
                "https://open.spotify.com/artist/DJ-Rodriz",
                "https://www.youtube.com/@djrodriz"
            ]
        },
        {
            "@type": "MusicGroup",
            "@id": "https://djrodriz.com/#musicgroup",
            "name": "DJ Rodriz",
            "genre": ["Megafunk", "Funk", "Eletrônica", "DJ Set"],
            "foundingLocation": {
                "@type": "Place",
                "name": "Joinville, Santa Catarina, Brasil"
            },
            "areaServed": [
                "Santa Catarina", "Paraná", "Rio Grande do Sul",
                "São Paulo", "Rio de Janeiro", "Minas Gerais",
                "Goiás", "Distrito Federal", "Bahia",
                "Pernambuco", "Ceará", "Brasil"
            ]
        }
    ]
};

const cidadesPorEstado = {
    "Santa Catarina": [
        "Joinville", "Blumenau", "Balneário Camboriú", "Itapema", "Itajaí",
        "Florianópolis", "São Bento do Sul", "Lages", "Canoinhas", "Rio do Sul",
        "Presidente Getúlio", "Nova Trento", "Pinhalzinho", "Mafra", "Xanxerê",
        "Porto União", "São Francisco do Sul", "Indaial", "Rio Negro",
        "Otacílio Costa", "Urubici", "Chapecó", "Criciúma", "Jaraguá do Sul",
        "Brusque", "Tubarão", "Palhoça", "São José"
    ],
    "Paraná": [
        "Curitiba", "Foz do Iguaçu", "Londrina", "Maringá", "Cascavel",
        "Ponta Grossa", "São José dos Pinhais", "Guarapuava", "Guaratuba",
        "Francisco Beltrão", "Cianorte", "Toledo", "Paranaguá",
        "Campo Mourão", "Umuarama", "Pato Branco"
    ],
    "Rio Grande do Sul": [
        "Porto Alegre", "Passo Fundo", "Erechim", "Pelotas", "Santa Maria",
        "Caxias do Sul", "Gramado", "Canela", "Novo Hamburgo",
        "São Leopoldo", "Rio Grande", "Bento Gonçalves", "Lajeado"
    ],
    "São Paulo": [
        "São Paulo", "Campinas", "Santos", "Ribeirão Preto", "Sorocaba",
        "São José dos Campos", "Guarulhos", "Osasco", "Santo André",
        "Bauru", "Piracicaba", "Jundiaí"
    ],
    "Rio de Janeiro": [
        "Rio de Janeiro", "Niterói", "Búzios", "Angra dos Reis",
        "Petrópolis", "Volta Redonda", "Campos dos Goytacazes"
    ],
    "Minas Gerais": [
        "Belo Horizonte", "Uberlândia", "Juiz de Fora", "Ouro Preto",
        "Contagem", "Betim", "Montes Claros"
    ],
    "Distrito Federal": ["Brasília", "Taguatinga", "Águas Claras"],
    "Goiás": ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Caldas Novas"],
    "Bahia": ["Salvador", "Porto Seguro", "Feira de Santana", "Ilhéus"],
    "Pernambuco": ["Recife", "Olinda", "Caruaru", "Porto de Galinhas"],
    "Ceará": ["Fortaleza", "Jericoacoara", "Juazeiro do Norte"],
    "Pará": ["Belém", "Ananindeua"],
    "Amazonas": ["Manaus"],
    "Maranhão": ["São Luís"],
    "Rio Grande do Norte": ["Natal", "Pipa"],
    "Alagoas": ["Maceió"],
    "Paraíba": ["João Pessoa"],
    "Mato Grosso do Sul": ["Campo Grande", "Bonito"],
    "Mato Grosso": ["Cuiabá"],
    "Espírito Santo": ["Vitória", "Vila Velha", "Guarapari"]
};

const showsHistorico = [
    { estado: "SC", locais: "Blumenau, Balneário Camboriú, São Bento do Sul, Lages, Canoinhas, Itapema, Presidente Getúlio, Nova Trento, Pinhalzinho, Mafra, Xanxerê, Porto União, São Francisco do Sul, Indaial, Rio Negro, Otacílio Costa, Rio do Sul, Urubici, Joinville" },
    { estado: "PR", locais: "Curitiba, Foz do Iguaçu, Cascavel, Ponta Grossa, Londrina, Maringá, São José dos Pinhais, Guarapuava, Guaratuba, Francisco Beltrão, Cianorte" },
    { estado: "RS", locais: "Porto Alegre, Passo Fundo, Erechim, Pelotas, Santa Maria" }
];

const Press = () => {
    return (
        <div className="press-page">
            <SEOHead
                title="Press Kit — DJ Rodriz | DJ Megafunk Joinville SC"
                description="Biografia, histórico de shows e press kit do DJ Rodriz. DJ e produtor musical de megafunk baseado em Joinville, Santa Catarina. O melhor DJ de megafunk do Sul do Brasil com shows em todo o país."
                keywords="DJ Rodriz press kit, DJ Rodriz biografia, DJ megafunk Joinville, DJ megafunk famoso, melhor DJ megafunk, DJ Rodriz shows, DJ megafunk Santa Catarina, DJ funk SC, DJ megafunk Itajaí, DJ megafunk Blumenau, DJ megafunk Curitiba, DJ megafunk sul do Brasil"
                canonical="/press"
                jsonLd={pressJsonLd}
            />

            <div className="press-container">
                {/* Header */}
                <header className="press-header">
                    <img
                        src="/fotos/logo-dj-rodriz.PNG"
                        alt="DJ Rodriz - Logo"
                        className="press-logo"
                        width="300"
                        height="169"
                    />
                    <h1>DJ Rodriz — DJ e Produtor Musical de Megafunk</h1>
                    <p className="press-tagline">O som que move o Sul do Brasil</p>
                </header>

                {/* Biography */}
                <section className="press-section">
                    <h2>Biografia</h2>
                    <div className="press-bio">
                        <p>
                            <strong>Rodriz</strong> é DJ e produtor musical especialista em <strong>megafunk</strong>, nascido e criado em <strong>Joinville, Santa Catarina</strong>. Com uma identidade sonora marcante e uma energia de pista inconfundível, é hoje um dos nomes mais promissores da cena de megafunk do <strong>Sul do Brasil</strong> e de todo o país.
                        </p>
                        <p>
                            Iniciou sua trajetória na música aos 16 anos, produzindo faixas com foco em impacto sonoro e leitura de pista. Rapidamente chamou atenção pela qualidade de suas produções e pela capacidade de criar atmosferas envolventes, unindo elementos de <strong>funk, megafunk e eletrônica</strong> em sets que conquistam públicos de casas noturnas, festivais e eventos por todo o Brasil.
                        </p>
                        <p>
                            Aos 18 anos, consolidou seu nome na cena e foi reconhecido em <strong>2025 como uma das revelações do ano</strong> no cenário do megafunk. Com uma forte leitura de pista e produções originais disponíveis no <strong>Spotify</strong> e todas as plataformas digitais, Rodriz chega em 2026 como referência para quem busca um <strong>DJ de megafunk profissional</strong> para qualquer tipo de evento.
                        </p>
                        <p>
                            Baseado em <strong>Joinville, SC</strong>, Rodriz atua intensamente em todo o <strong>Sul do Brasil</strong> — com shows frequentes em cidades como <strong>Blumenau, Balneário Camboriú, Itajaí, Itapema, Florianópolis, Curitiba, Londrina, Maringá, Porto Alegre, Passo Fundo</strong> e dezenas de outras cidades de <strong>Santa Catarina, Paraná e Rio Grande do Sul</strong>.
                        </p>
                        <p>
                            Sua atuação vai além da região Sul: Rodriz também tem disponibilidade para shows em <strong>São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Goiânia</strong> e capitais do <strong>Nordeste</strong>, consolidando-se como um dos <strong>DJs de megafunk revelação do sul do Brasil</strong>. Para contratar o DJ Rodriz para festas, casas noturnas, festivais, formaturas ou eventos corporativos, entre em contato pelo WhatsApp.
                        </p>
                    </div>
                </section>

                {/* Show History */}
                <section className="press-section">
                    <h2>Histórico de Shows</h2>
                    <p className="press-section-intro">
                        DJ Rodriz já se apresentou em mais de 80 casas noturnas e eventos em todo o Brasil. Confira algumas das cidades onde já tocou:
                    </p>
                    <div className="press-shows-grid">
                        {showsHistorico.map((item) => (
                            <div key={item.estado} className="press-show-state">
                                <h3>{item.estado}</h3>
                                <p>{item.locais}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Areas of Activity - Full Brazil */}
                <section className="press-section">
                    <h2>Áreas de Atuação</h2>
                    <p className="press-section-intro">
                        O DJ Rodriz atua em todo o território brasileiro. Confira as principais cidades e estados:
                    </p>
                    <div className="press-cities-grid">
                        {Object.entries(cidadesPorEstado).map(([estado, cidades]) => (
                            <div key={estado} className="press-city-group">
                                <h3>{estado}</h3>
                                <p>{cidades.join(", ")}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Press Kit Download */}
                <section className="press-section press-download">
                    <h2>Press Kit</h2>
                    <p>Baixe o press kit completo com fotos em alta resolução, rider técnico e informações para imprensa.</p>
                    <a
                        href="https://drive.google.com/drive/folders/1hUcuHI1atpZjkxFklPqpAWP13L72G_hz?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="press-download-btn"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        BAIXAR PRESS KIT
                    </a>
                </section>

                {/* Contact CTA */}
                <section className="press-section press-contact">
                    <h2>Contato</h2>
                    <p>Para booking, imprensa e colaborações:</p>
                    <a
                        href="https://wa.me/5547991529726?text=Ol%C3%A1%2C%20sou%20da%20imprensa%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20DJ%20Rodriz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="press-whatsapp-link"
                    >
                        WhatsApp: (47) 9 9152-9726
                    </a>
                </section>
            </div>
        </div>
    );
};

export default Press;
