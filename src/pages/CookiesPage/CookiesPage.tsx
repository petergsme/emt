import cn from 'classnames';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import theme from './cookiesPage.module.scss';

const cx = classNames.bind(theme);

const CookiesPage = () => {
  const { t } = useTranslation('cookies');

  return (
    <>
      <SingleBlock backgroundColor="light" paddingSize="large" className={cn('container__padding--top')}>
        <h2 className={cn('display-large', 'text__color--brand')}>{t('title')}</h2>

        <div className={cn('paragraph-small', 'text__color--onprimary', cx('text-align-left', 'cookies__info'))}>
          <p>{t('intro.acceptance')}</p>

          <p>{t('intro.experience')}</p>

          <h3 className={cn('display-medium', 'text__color--brand')}>{t('sections.whatAreCookies.title')}</h3>

          <p>{t('sections.whatAreCookies.definition')}</p>

          <p>{t('sections.whatAreCookies.importance')}</p>

          <h3 className={cn('display-medium', 'text__color--brand')}>{t('sections.whatCookiesWeUse.title')}</h3>

          <p>{t('sections.whatCookiesWeUse.introduction')}</p>

          <p>
            <strong>Cookies de sesión:</strong> permiten la navegación básica en el sitio.
          </p>

          <p>
            <strong>Cookies de preferencias:</strong> almacenan el idioma elegido por el usuario.
          </p>

          <p>
            <strong>Cookies persistentes:</strong> en el servicio de "Recarga Online", el usuario puede optar por
            recordar sus datos (nombre, teléfono y correo electrónico) para futuras recargas. Esta información se guarda
            cifrada en el dispositivo durante un año.
          </p>

          <p>
            <strong>info_paradas.</strong> Para gestionar el acceso a la información de paradas.
          </p>

          <p>
            <strong>jfcookie[lang].</strong> Para acceder a la información en el idioma elegido.
          </p>

          <p>
            <strong>EMTValenciaRecarga y EMTValenciaRecargaRecordar.</strong> Para, a solicitud del usuario, poder
            recordar en este dispositivo los datos introducidos (nombre, teléfono y email) en la compra de una recarga
            en recargas sucesivas. Expiran al cabo de un año. Los datos se guardan encriptados.
          </p>
        </div>
      </SingleBlock>
    </>
  );
};

export default CookiesPage;
