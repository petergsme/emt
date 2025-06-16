import './FooterMobile.scss';
import emtLogo from '../../../../assets/EMT-white.svg';
import ajuntamentLogo from '../../../../assets/Ayuntamiento-white.svg';
import { Accordion } from '@/components/common/Accordion/Accordion';
import { Button } from '@/components/common/Button/Button';
import socialIcons from '../../../../assets/Socials-white.svg';

export const FooterMobile = () => {
  return (
    <footer className="footer--mobile">
      {/* Logos */}
      <div className="footer__logos">
        <img src={emtLogo} alt="EMT Valencia" className="footer__logo" />
        <img src={ajuntamentLogo} alt="Ajuntament de València" className="footer__logo ajuntament" />
      </div>

      {/* Acordeones y bloques */}
      <div className="footer__content">
        <div className="footer__block footer__block--with-border-top">
          <a href="/mapa" className="footer__link">Mapa</a>
        </div>

        <div className="footer__block">
          <Accordion
            text="Tarifas y Títulos"
            textClassName="footer__accordion-title"
            variant="onbrand"
            iconSize="medium"
          >
            <div className="footer__submenu">
              <a href="/tarjetas" className="footer__sublink">Tarjetas</a>
              <a href="/consultas" className="footer__sublink">Consultas y recargas</a>
              <a href="/registro" className="footer__sublink">Registra tu tarjeta</a>
            </div>
          </Accordion>
        </div>

        <div className="footer__block">
          <Accordion
            text="Ayuda"
            textClassName="footer__accordion-title"
            variant="onbrand"
            iconSize="medium"
          >
            <div className="footer__submenu">
              <a href="/normativa" className="footer__sublink">Uso de bus y normativa</a>
              <a href="/faq" className="footer__sublink">Preguntas frecuentes</a>
            </div>
          </Accordion>
        </div>

        <div className="footer__block">
          <Accordion
            text="Atención Presencial"
            textClassName="footer__accordion-title"
            variant="onbrand"
            iconSize="medium"
          >
            <div className="footer__submenu">
              <p className="footer__sublink">C/ Mendoza 5, Valencia<br />L-V 9:00-19:30</p>
              <p className="footer__sublink">UPV, Pl. del Ágora<br />L-V 8:00-15:30</p>
              <p className="footer__sublink">Metro Colón<br />L-V 9:00-19:00</p>
              <p className="footer__sublink">Requiere cita previa<br /><a href="/cita-previa">Pedir cita →</a></p>
            </div>
          </Accordion>
        </div>

        <div className="footer__block">
          <Accordion
            text="Atención Telefónica"
            textClassName="footer__accordion-title"
            variant="onbrand"
            iconSize="medium"
          >
            <div className="footer__submenu">
              <p className="footer__sublink">96 315 85 15</p>
              <p className="footer__sublink">L-V 8:00 a 21:00<br />Sábados 9:00 a 14:00</p>
            </div>
          </Accordion>
        </div>

        <div className="footer__block footer__block--with-border-bottom">
          <Accordion
            text="Legal"
            textClassName="footer__accordion-title"
            variant="onbrand"
            iconSize="medium"
          >
            <div className="footer__submenu">
              <a href="/privacidad" className="footer__sublink">Política de privacidad</a>
              <a href="/cookies" className="footer__sublink">Cookies</a>
            </div>
          </Accordion>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="footer__social">
        <img className="footer__social-icon" src={socialIcons} alt="social icons" />
      </div>

      {/* Botones */}
      <div className="footer__buttons">
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
          onClick={() => console.log('Descargar apps')}
        >
          Descarga las apps
        </Button>
      </div>

      {/* Volver arriba */}
      <div className="footer__to-top">
        <a href="#">Volver arriba</a>
      </div>
    </footer>
  );
};

