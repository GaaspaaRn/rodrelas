import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const SidebarMenu = ({ isOpen, onClose }) => {
    const menuRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const menu = menuRef.current;
        const overlay = overlayRef.current;

        if (isOpen) {
            gsap.to(overlay, { duration: 0.5, opacity: 1, pointerEvents: 'auto', ease: 'power2.out' });
            gsap.to(menu, { duration: 0.5, x: 0, ease: 'power2.out' });
        } else {
            gsap.to(overlay, { duration: 0.5, opacity: 0, pointerEvents: 'none', ease: 'power2.in' });
            gsap.to(menu, { duration: 0.5, x: '-100%', ease: 'power2.in' });
        }
    }, [isOpen]);

    const links = [
        { name: 'HOME', path: '/' },
        { name: 'SONS', path: '/sons' },
        { name: 'VISUALIZER', path: '/visualizer' },
        { name: 'SHOWS', path: '/shows' },
        { name: 'CONTATO', path: '/contact' },
    ];

    return (
        <>
            <div
                ref={overlayRef}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(8px)',
                    opacity: 0,
                    pointerEvents: 'none',
                    zIndex: 9998,
                }}
            />
            <div
                ref={menuRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    maxWidth: '400px',
                    height: '100vh',
                    backgroundColor: '#0a0a0a',
                    zIndex: 9999,
                    transform: 'translateX(-100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '3rem',
                    borderRight: '1px solid #333'
                }}
            >
                {links.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        onClick={onClose}
                        style={{
                            fontFamily: 'var(--font-title)',
                            fontSize: '2.5rem',
                            color: '#fff',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        className="menu-link"
                    >
                        {item.name}
                    </Link>
                ))}

                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '2rem',
                        right: '2rem',
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)'
                    }}
                >
                    FECHAR
                </button>
            </div>
        </>
    );
};

export default SidebarMenu;
