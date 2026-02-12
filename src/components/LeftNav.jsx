import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const LeftNav = ({ className }) => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('home');

    const links = [
        { name: 'HOME', path: '#home', id: 'home' },
        { name: 'SONS', path: '#sons', id: 'sons' },
        { name: 'VIDEOS', path: '#visualizer', id: 'visualizer' }, // Renamed from Visualizer, existing ID
        { name: 'SHOWS', path: '#shows', id: 'shows' },
        { name: 'CONTATO', path: '#contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3; // Trigger earlier

            for (const link of links) {
                const element = document.getElementById(link.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(link.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`left-nav-container ${className || ''}`}>
            {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                    <a
                        key={link.name}
                        href={link.path}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                        {link.name}
                    </a>
                );
            })}
        </nav>
    );
};

export default LeftNav;
