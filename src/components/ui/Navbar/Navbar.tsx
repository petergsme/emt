import emtIcon from '../../../assets/emt-icon.png'
import { useEffect, useState } from 'react';
import './Navbar.scss'
import { Button } from '@/components/common/Button/Button'
import dropdown from '../../../assets/dropdown-button.svg'
import SidebarMobile from './SidebarMobile/SidebarMobile';

export const Navbar = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 700);
        };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

return (
    <header className="navbar">
        <div className="navbar__mobile-wrapper">
            <div className="navbar__logo">
                <img className="navbar__logo-image" src={emtIcon} alt="Icono EMT" />
            </div>

            {isMobile && (
                <button
                    className="navbar__hamburger"
                    onClick={() => setIsSidebarOpen(true)}
                    aria-label="Abrir menú"
                >
                    <img className="navbar__hamburguer-icon" src={dropdown} alt="dropdown button" />
                </button>
            )}
        </div>

        {isMobile ? (
            <SidebarMobile isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        ) : (
            <div className="navbar__buttons">
                <nav className="navbar__nav">
                    <a href="/mapa" className="navbar__link">Mapa</a>
                    <a href="/tarifas" className="navbar__link">Títulos y tarifas</a>
                    <a href="/ayuda" className="navbar__link">Ayuda</a>
                </nav>
                <div className="navbar__cta">
                    <Button
                    type="button"
                    style="filled"
                    color="onbrand"
                    onClick={() => {
                        window.location.href = '/contacto';
                    }}
                >
                CONTACTO
            </Button>
        </div>
    </div>
    )}
    </header>
    )
}