import cn from 'classnames';
import classNames from 'classnames/bind';
import theme from './use.module.scss';
import { useTranslation } from 'react-i18next';
import step1 from '../assets/emt_valencia_bus_stop_monochrome.webp';
import step2 from '../assets/emt_valencia_bus_interior_monochrome.webp';
import step3 from '../assets/emt_valencia_bus_exterior_monochrome.webp';

const cx = classNames.bind(theme);

export const Use = () => {
  const { t } = useTranslation('uses');
  return (
    <>
      <header className={cn('header__gap')}>
        <h3 className={cn('display-medium', 'text__color--onprimary')}>{t('header.title')}</h3>
        <h2 className={cn('display-large', 'text__color--brand')}>{t('header.subtitle')}</h2>
      </header>

      <section className={cx('use__content')}>
        <div className={cx('use__block')}>
          <img
            className={cx('use__image')}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            width={797}
            height={501}
            src={step1}
            alt={t('step1.altImage')}
          />
          <div className={cx('use__blockText')}>
            <h3 className={cn('display-medium')}>{t('step1.title')}</h3>
            <p className={cn('paragraph-small')}>{t('step1.description')}</p>
          </div>
        </div>

        <div className={cx('use__block')}>
          <img src={step2} width={795} height={501} className={cx('use__image')} alt={t('step2.altImage')} />
          <div className={cx('use__blockText')}>
            <h3 className={cn('display-medium')}>{t('step2.title')}</h3>
            <p className={cn('paragraph-small')}>{t('step2.description')}</p>
          </div>
        </div>

        <div className={cx('use__block')}>
          <img src={step3} width={795} height={501} className={cx('use__image')} alt={t('step3.altImage')} />
          <div className={cx('use__blockText')}>
            <h3 className={cn('display-medium')}>{t('step3.title')}</h3>
            <p className={cn('paragraph-small')}>{t('step3.description')}</p>
          </div>
        </div>
      </section>
    </>
  );
};
