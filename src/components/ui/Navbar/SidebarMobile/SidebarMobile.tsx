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
  if (!isOpen) return null;

  return (
    <>
      <div className="sidebar__backdrop" onClick={onClose} />
      <aside className="sidebar__container" role="dialog" aria-modal="true" aria-label="Menú">
        <div className="sidebar__header">
          <button className="sidebar__close" onClick={onClose} aria-label="Cerrar menú">
            <Icon icon="Close" size="large" color="onbrand" />
          </button>
        </div>

        <div className="sidebar__content">
          <Link to="/mapa" className="sidebar__link" onClick={onClose}>Mapa</Link>

          <Accordion text="Títulos y tarifas" textClassName="sidebar__accordion-title" variant="onbrand" iconSize="medium">
            <div className="sidebar__submenu">
              <Link to="/tarjetas" className="sidebar__sublink" onClick={onClose}>Tarjetas</Link>
              <Link to="/consultas" className="sidebar__sublink" onClick={onClose}>Consultas y recargas</Link>
              <Link to="/consultas" className="sidebar__sublink" onClick={onClose}>Registra tu tarjeta</Link>
            </div>
          </Accordion>

          <Accordion text="Ayuda" textClassName="sidebar__accordion-title" variant="onbrand" iconSize="medium">
            <div className="sidebar__submenu">
              <Link to="/normativa" className="sidebar__sublink" onClick={onClose}>Uso de bus y normativa</Link>
              <Link to="/faq" className="sidebar__sublink" onClick={onClose}>Preguntas frecuentes</Link>
            </div>
          </Accordion>
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