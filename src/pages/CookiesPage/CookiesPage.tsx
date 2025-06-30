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
            <strong>{t('sections.whatCookiesWeUse.types.session').split(':')[0]}:</strong>{' '}
            {t('sections.whatCookiesWeUse.types.session').split(':')[1]}
          </p>

          <p>
            <strong>{t('sections.whatCookiesWeUse.types.preferences').split(':')[0]}:</strong>{' '}
            {t('sections.whatCookiesWeUse.types.preferences').split(':')[1]}
          </p>

          <p>
            <strong>{t('sections.whatCookiesWeUse.types.persistent').split(':')[0]}:</strong>{' '}
            {t('sections.whatCookiesWeUse.types.persistent').split(':')[1]}
          </p>

          <p>
            <strong>{t('sections.whatCookiesWeUse.specificCookies.infoParadas').split('.')[0]}.</strong>{' '}
            {t('sections.whatCookiesWeUse.specificCookies.infoParadas').split('.')[1]}
          </p>

          <p>
            <strong>{t('sections.whatCookiesWeUse.specificCookies.jfcookieLang').split('.')[0]}.</strong>{' '}
            {t('sections.whatCookiesWeUse.specificCookies.jfcookieLang').split('.')[1]}
          </p>

          <p>
            <strong>{t('sections.whatCookiesWeUse.specificCookies.emtRecarga').split('.')[0]}.</strong>{' '}
            {t('sections.whatCookiesWeUse.specificCookies.emtRecarga').split('.')[1]}
          </p>
        </div>
      </SingleBlock>
    </>
  );
};

export default CookiesPage;
