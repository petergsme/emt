import React from 'react';
import './SidebarMobile.scss';
import { Link } from 'react-router-dom';
import { Icon } from '@/assets/icons/Icon';
import { Accordion } from '@/components/common/Accordion/Accordion';
import { Button } from '@/components/common/Button/Button';

interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ isOpen, onClose }) => {
   const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    const container = document.querySelector('.sidebar__container');
    if (container) {
      container.classList.add('sidebar__closing');
      setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 300); // mismo tiempo que la animación
    }
  };

  if (!isOpen && !isVisible) return null;

  return (
    <>
      <div className="sidebar__backdrop" onClick={handleClose} />
      <aside className="sidebar__container" role="dialog" aria-modal="true" aria-label="Menú">
        <div className="sidebar__header">
          <button className="sidebar__close" onClick={handleClose} aria-label="Cerrar menú">
            <Icon icon="Close" size="large" color="onbrand" />
          </button>
        </div>

        <div className="sidebar__content">
            <div className="sidebar__block sidebar__block--with-border-top">
                <Link to="/mapa" className="sidebar__link" onClick={handleClose}>Mapa</Link>
            </div>

            <div className="sidebar__block">
                <Accordion text="Títulos y tarifas" textClassName="sidebar__accordion-title" variant="onbrand" iconSize="medium">
                    <div className="sidebar__submenu">
                        <Link to="/tarjetas" className="sidebar__sublink" onClick={handleClose}>Tarjetas</Link>
                        <Link to="/consultas" className="sidebar__sublink" onClick={handleClose}>Consultas y recargas</Link>
                        <Link to="/consultas" className="sidebar__sublink" onClick={handleClose}>Registra tu tarjeta</Link>
                    </div>
                </Accordion>
            </div>

            <div className="sidebar__block sidebar__block--with-border-bottom">
                <Accordion text="Ayuda" textClassName="sidebar__accordion-title" variant="onbrand" iconSize="medium">
                    <div className="sidebar__submenu">
                        <Link to="/normativa" className="sidebar__sublink" onClick={handleClose}>Uso de bus y normativa</Link>
                        <Link to="/faq" className="sidebar__sublink" onClick={handleClose}>Preguntas frecuentes</Link>
                    </div>
                </Accordion>
            </div>
        </div>

        <div className="sidebar__footer">
          <Button
            type="button"
            style="outlined"
            color="onbrand"
            fullWidth
            onClick={() => window.location.href = '/contacto'}
          >
            Contacta con nosotros
          </Button>

          <Button
            type="button"
            style="filled"
            color="onbrand"
            fullWidth
            onClick={() => console.log('Descargar app')}
          >
            Descarga las apps
          </Button>
        </div>
      </aside>
    </>
  );
};

export default SidebarMobile;