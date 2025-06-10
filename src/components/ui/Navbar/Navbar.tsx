import emtIcon from '../../../assets/icons/assets/emt-icon.png'
import './Navbar.scss'
import { Button } from '@/components/common/Button/Button'

export const Navbar = () => {
return (
    <header className="navbar">
        <div className="navbar__logo">
            <img className="navbar__logo-image" src={emtIcon} alt="Icono EMT" />
        </div>
        <div className='navbar__buttons'>
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
    </header>
)
}