import { useState } from 'react';
import SEOHead from '../components/SEOHead';

const faqData = [
    {
        question: "Como contratar o DJ Rodriz?",
        answer: "Para contratar o DJ Rodriz, entre em contato diretamente pelo WhatsApp (47) 9 9152-9726 ou envie uma mensagem pelo formulário de contato do site. Nossa equipe de booking responde em até 24 horas com disponibilidade de agenda e valores."
    },
    {
        question: "Quanto custa contratar um DJ de megafunk?",
        answer: "O valor para contratar o DJ Rodriz varia de acordo com o tipo de evento, localização, duração do show e estrutura necessária. Entre em contato pelo WhatsApp para receber um orçamento personalizado para sua festa ou evento."
    },
    {
        question: "Em quais cidades o DJ Rodriz toca?",
        answer: "O DJ Rodriz atua em todo o Brasil, com base em Joinville, Santa Catarina. Toca frequentemente em cidades como Blumenau, Balneário Camboriú, Itajaí, Florianópolis, Curitiba, Londrina, Maringá, Porto Alegre, São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Goiânia e capitais do Nordeste."
    },
    {
        question: "O que é megafunk?",
        answer: "Megafunk é um gênero musical brasileiro que combina elementos de funk com batidas eletrônicas potentes. Caracterizado por drops intensos, bases pesadas e energia contagiante, o megafunk é um dos estilos mais populares em casas noturnas e festivais do Sul do Brasil. O DJ Rodriz é especialista neste gênero e um dos principais nomes da cena."
    },
    {
        question: "O DJ Rodriz toca em festas privadas e formaturas?",
        answer: "Sim! O DJ Rodriz aceita shows para festas privadas, formaturas, aniversários, casamentos, eventos corporativos e confraternizações. Cada evento recebe um set list personalizado de megafunk e funk para garantir a melhor experiência para os convidados."
    },
    {
        question: "Qual o estilo musical do DJ Rodriz?",
        answer: "O DJ Rodriz é especialista em megafunk, mas também transita por funk, eletrônica e DJ sets ecléticos. Seu som é reconhecido pela energia de pista, drops impactantes e produções originais disponíveis no Spotify e plataformas digitais."
    },
    {
        question: "Como funciona o contrato de um show?",
        answer: "Após o contato inicial via WhatsApp, nossa equipe verifica a disponibilidade na agenda, alinha detalhes técnicos (equipamentos, horários, rider técnico) e envia a proposta comercial. Com o contrato assinado e o sinal confirmado, a data fica reservada na agenda do DJ Rodriz."
    }
];

const faqJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            }))
        },
        {
            "@type": "Service",
            "name": "Contratação DJ Rodriz - DJ de Megafunk",
            "description": "Contrate o DJ Rodriz para seu evento. DJ e produtor musical especialista em megafunk, disponível para shows em casas noturnas, festivais, festas privadas, formaturas e eventos corporativos em todo o Brasil.",
            "provider": {
                "@type": "Person",
                "name": "DJ Rodriz",
                "url": "https://djrodriz.com"
            },
            "areaServed": {
                "@type": "Country",
                "name": "Brasil"
            },
            "serviceType": "DJ para eventos e festas"
        },
        {
            "@type": "LocalBusiness",
            "name": "DJ Rodriz - Contratação de DJ Megafunk",
            "description": "Contrate o melhor DJ de megafunk do Sul do Brasil. Shows em Santa Catarina, Paraná, Rio Grande do Sul, São Paulo, Rio de Janeiro, Minas Gerais e todo o Brasil.",
            "url": "https://djrodriz.com/contrate",
            "telephone": "+55-47-99152-9726",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Joinville",
                "addressRegion": "SC",
                "addressCountry": "BR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-26.3044",
                "longitude": "-48.8487"
            },
            "areaServed": [
                "Santa Catarina", "Paraná", "Rio Grande do Sul",
                "São Paulo", "Rio de Janeiro", "Minas Gerais",
                "Goiás", "Distrito Federal", "Bahia",
                "Pernambuco", "Ceará", "Brasil"
            ],
            "priceRange": "$$"
        }
    ]
};

const tiposEvento = [
    { nome: "Casas Noturnas", desc: "Sets de megafunk que lotam pistas em clubes de todo o Brasil" },
    { nome: "Festivais", desc: "Shows com estrutura profissional para grandes públicos" },
    { nome: "Festas Privadas", desc: "Aniversários, confraternizações e celebrações exclusivas" },
    { nome: "Formaturas", desc: "Energia e megafunk para a melhor formatura da sua turma" },
    { nome: "Eventos Corporativos", desc: "Entretenimento premium para empresas e marcas" },
    { nome: "Beach Clubs", desc: "Sets ao ar livre com a vibe ideal para o litoral" }
];

const cidadesAtuacao = {
    "Santa Catarina": "Joinville, Blumenau, Balneário Camboriú, Itajaí, Itapema, Florianópolis, São Bento do Sul, Lages, Chapecó, Criciúma, Jaraguá do Sul, Brusque, Canoinhas, Rio do Sul, Xanxerê, Mafra, Indaial, Tubarão, Palhoça, São José",
    "Paraná": "Curitiba, Foz do Iguaçu, Londrina, Maringá, Cascavel, Ponta Grossa, São José dos Pinhais, Guarapuava, Guaratuba, Francisco Beltrão, Cianorte, Toledo, Paranaguá, Campo Mourão, Umuarama, Pato Branco",
    "Rio Grande do Sul": "Porto Alegre, Passo Fundo, Erechim, Pelotas, Santa Maria, Caxias do Sul, Gramado, Canela, Novo Hamburgo, São Leopoldo, Rio Grande, Bento Gonçalves, Lajeado",
    "São Paulo": "São Paulo, Campinas, Santos, Ribeirão Preto, Sorocaba, São José dos Campos, Guarulhos, Osasco, Santo André, Bauru, Piracicaba, Jundiaí",
    "Rio de Janeiro": "Rio de Janeiro, Niterói, Búzios, Angra dos Reis, Petrópolis, Volta Redonda",
    "Minas Gerais": "Belo Horizonte, Uberlândia, Juiz de Fora, Ouro Preto, Contagem, Betim, Montes Claros",
    "Centro-Oeste": "Brasília, Goiânia, Aparecida de Goiânia, Anápolis, Caldas Novas, Campo Grande, Cuiabá, Bonito",
    "Nordeste": "Salvador, Recife, Fortaleza, Natal, João Pessoa, Maceió, São Luís, Porto Seguro, Olinda, Jericoacoara, Porto de Galinhas, Pipa",
    "Norte": "Belém, Manaus"
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`faq-item ${isOpen ? 'faq-open' : ''}`}>
            <button
                className="faq-question"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const Contrate = () => {
    return (
        <div className="contrate-page">
            <SEOHead
                title="Contratar DJ Megafunk SC | DJ Rodriz - Joinville, Sul do Brasil"
                description="Contrate o DJ Rodriz, o melhor DJ de megafunk de Joinville e do Sul do Brasil. Shows em Santa Catarina, Paraná, Rio Grande do Sul, São Paulo, Rio de Janeiro e todo o Brasil. Festas, casas noturnas, festivais, formaturas e eventos corporativos."
                keywords="contratar DJ megafunk, contratar DJ megafunk SC, contratar DJ Santa Catarina, contratar DJ Paraná, contratar DJ Rio Grande do Sul, contratar DJ funk SC, contratar DJ Joinville, contratar DJ Itajaí, contratar DJ Blumenau, contratar DJ Curitiba, contratar DJ sul do Brasil, contrate DJ, DJ megafunk famoso, melhor DJ megafunk, DJ funk, DJ para festa, DJ para evento, DJ para formatura, DJ megafunk preço"
                canonical="/contrate"
                jsonLd={faqJsonLd}
            />

            <div className="contrate-container">
                {/* Hero */}
                <header className="contrate-header">
                    <img
                        src="/fotos/logo-dj-rodriz.PNG"
                        alt="DJ Rodriz - Logo"
                        className="contrate-logo"
                        width="250"
                        height="141"
                    />
                    <h1>Contratar DJ Megafunk — DJ Rodriz</h1>
                    <p className="contrate-subtitle">
                        Contrate o melhor DJ de megafunk do Sul do Brasil para sua festa, evento ou casa noturna.
                        DJ Rodriz atua em <strong>Joinville, Santa Catarina</strong> e em todo o Brasil.
                    </p>

                    <a
                        href="https://wa.me/5547991529726?text=Ol%C3%A1%2C%20quero%20contratar%20o%20DJ%20Rodriz%20para%20um%20evento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contrate-cta contact-btn"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        CONTRATAR AGORA
                    </a>
                </header>

                {/* Event Types */}
                <section className="contrate-section">
                    <h2>Tipos de Evento</h2>
                    <p className="contrate-section-intro">
                        O DJ Rodriz está disponível para diferentes tipos de eventos e festas em todo o Brasil.
                        Megafunk, funk e sets personalizados para cada ocasião.
                    </p>
                    <div className="contrate-events-grid">
                        {tiposEvento.map((tipo) => (
                            <div key={tipo.nome} className="contrate-event-card">
                                <h3>{tipo.nome}</h3>
                                <p>{tipo.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Areas */}
                <section className="contrate-section">
                    <h2>Onde o DJ Rodriz Toca</h2>
                    <p className="contrate-section-intro">
                        O DJ Rodriz atua em todo o território brasileiro, com base em <strong>Joinville, Santa Catarina</strong>.
                        Confira as principais cidades e regiões atendidas para contratação de shows de megafunk:
                    </p>
                    <div className="contrate-cities-grid">
                        {Object.entries(cidadesAtuacao).map(([regiao, cidades]) => (
                            <div key={regiao} className="contrate-city-group">
                                <h3>{regiao}</h3>
                                <p>{cidades}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="contrate-section">
                    <h2>Perguntas Frequentes</h2>
                    <div className="contrate-faq">
                        {faqData.map((item, idx) => (
                            <FAQItem key={idx} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="contrate-section contrate-final-cta">
                    <h2>Pronto para Contratar?</h2>
                    <p>
                        Entre em contato agora pelo WhatsApp e reserve sua data.
                        O DJ Rodriz e sua equipe de booking respondem em até 24 horas.
                    </p>
                    <a
                        href="https://wa.me/5547991529726?text=Ol%C3%A1%2C%20quero%20contratar%20o%20DJ%20Rodriz%20para%20um%20evento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contrate-cta contact-btn"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        FALAR NO WHATSAPP
                    </a>
                </section>
            </div>
        </div>
    );
};

export default Contrate;
