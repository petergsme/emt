import { useState, useEffect } from 'react';
import './Footer.scss'
import { FooterMobile } from './FooterMobile/FooterMobile';
import emtQR from '../../../assets/emt-qr.svg'
import generalitatLogo from '../../../assets/generalitat-logo.svg'
import fgvLogo from '../../../assets/fgv-logo.svg'
import tramLogo from '../../../assets/tram-logo.svg'
import socialIcons from '../../../assets/icons/assets/social-icons.svg'

export const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) return <FooterMobile />;

    return (
        <footer className="footer">
            <div className='footer__main'>
                <a className='footer__title'>Volver arriba</a>
                <div className="footer__content">
                    <div className="footer__map">
                        <a className='footer__h3'>Mapa</a>
                    </div>
                    <div className="footer__fees">
                        <div className='footer__fees-content'>
                            <a href="/tarifas" className='footer__h3'>Tarifas y Títulos</a>
                            <a href="/tarjetas" className='footer__p'>Tarjetas</a>
                            <a className='footer__p'>Consultas y recargas</a>
                            <a className='footer__p'>Registra tu tarjeta</a>
                        </div>
                        <div className='footer__phone-content'>
                            <a className='footer__h3'>Atención Telefónica</a>
                            <a className='footer__p'>96 315 85 15</a>
                            <a className='footer__p'>L-V de 8:00 a 21:00<br/>Sábados de 9:00 a 14:00</a>
                        </div>
                    </div>
                    <div className="footer__help">
                        <div className='footer__help-content'>
                            <a className='footer__h3'>Ayuda</a>
                            <a className='footer__p'>Uso del bus y normativas</a>
                            <a className='footer__p'>Preguntas frecuentes</a>
                        </div>
                        <div className='footer__legal-content'>
                            <a className='footer__h3'>Legal</a>
                            <a className='footer__p'>Política de privacidad</a>
                            <a className='footer__p'>Cookies</a>
                        </div>
                    </div>
                    <div className="footer__attention">
                        <div className='footer__attention-content'>
                            <a className='footer__h3'>Atención Presencial</a>
                            <a className='footer__p'>C/ Mendoza 5, 46001, Valencia<br/>L-V de 9:00 a 19:30</a>
                            <a className='footer__p'>UPV, Pl. del Ágora<br/>L-V de 8:00 a 15:30</a>
                            <a className='footer__p'>Estación de metro-colón<br/>L-V de 9:00 a 19:00</a>
                            <a className='footer__p'>La atencion presencial requiere cita previa<br/><span>Pedir cita previa →</span></a>
                        </div>
                    </div>
                    <div className="footer__qr">
                        <div className='footer__qr-content'>
                            <img className="footer_qrcode" src={emtQR} alt="EMT QR" />
                            <a className='footer__h2'>Descarga la App</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__end'>
                <div className='footer__end__collab-logos'>
                    <img className="footer_generalitat" src={generalitatLogo} alt="logo generalitat valenciana" />
                    <img className="footer_fgv" src={fgvLogo} alt="logo fgv" />
                    <img className="footer_tram" src={tramLogo} alt="logo tram" />
                </div>
                <div className='footer__end__media-icons'>
                    <img className='footer_social' src={socialIcons} alt="social icons"></img>
                </div>
                <div className='footer__end__copyright'>
                    <a>© Copyright EMT Valencia 2025.</a>
                </div>
            </div>
        </footer>

    )
}