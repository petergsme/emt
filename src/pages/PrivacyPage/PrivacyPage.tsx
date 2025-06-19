import cn from 'classnames';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import theme from './privacyPage.module.scss';

const cx = classNames.bind(theme);

const PrivacyPage = () => {
  const { t } = useTranslation('privacy');

  return (
    <>
      <SingleBlock backgroundColor="light" paddingSize="large" className={cn('container__padding--top')}>
        <h2 className={cn('display-large', 'text__color--brand')}>{t('title')}</h2>

        <div className={cn('paragraph-small', 'text__color--onprimary', cx('text-align-left', 'privacy__info'))}>
          <p>{t('intro.commitment')}</p>

          <p>{t('intro.treatment')}</p>

          <p>{t('intro.rights')}</p>

          <p>{t('intro.conservation')}</p>

          <h3 className={cn('display-medium', 'text__color--brand')}>{t('userRights.title')}</h3>

          <p>
            <strong>{t('userRights.access.label')}:</strong> {t('userRights.access.content')}
            <br />
            <br />
            <strong>{t('userRights.rectification.label')}:</strong> {t('userRights.rectification.content')}
            <br />
            <br />
            <strong>{t('userRights.deletion.label')}:</strong> {t('userRights.deletion.content')}
            <br />
            <br />
            <strong>{t('userRights.limitation.label')}:</strong> {t('userRights.limitation.content')}
            <br />
            <br />
            <strong>{t('userRights.opposition.label')}:</strong> {t('userRights.opposition.content')}
            <br />
            <br />
            <strong>{t('userRights.portability.label')}:</strong> {t('userRights.portability.content')}
            <br />
            <br />
            <strong>{t('userRights.howToExercise.label')}:</strong> {t('userRights.howToExercise.content')}
            <br />
            <br />
            <strong>{t('userRights.complaints.label')}:</strong> {t('userRights.complaints.content')}
          </p>

          <h3 className={cn('display-medium', 'text__color--brand')}>{t('sections.responsibleForTreatment.title')}</h3>
          <p>{t('sections.responsibleForTreatment.content')}</p>

          <h3 className={cn('display-medium', 'text__color--brand')}>{t('sections.treatmentPurposes.title')}</h3>
          <p>{t('sections.treatmentPurposes.content')}</p>

          <h3 className={cn('display-medium', 'text__color--brand')}>{t('sections.legitimation.title')}</h3>
          <p>{t('sections.legitimation.content')}</p>

          <h3 className={cn('display-medium', 'text__color--brand')}>{t('sections.dataConservation.title')}</h3>
          <p>{t('sections.dataConservation.content')}</p>

          <h3 className={cn('display-medium', 'text__color--brand')}>{t('sections.recipients.title')}</h3>
          <p>{t('sections.recipients.content')}</p>

          <h3 className={cn('display-medium', 'text__color--brand')}>{t('sections.contact.title')}</h3>
          <p>{t('sections.contact.content')}</p>
        </div>
      </SingleBlock>
    </>
  );
};

export default PrivacyPage;
