import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Button } from '@/components/common/Button/Button';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import { Benefits } from './Benefits/Benefits';
import { TopUp } from '@/components/common/TopUp/TopUp';
import { FAQ } from '@/components/common/FAQ/FAQ';
import { Register } from '@/components/common/Register/Register';

const HomePage: React.FC = () => {
  const { i18n } = useTranslation('faq');

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div>
        <Button type="button" style="filled" color="onprimary" onClick={() => handleLanguageChange('ca')}>
          valenciano
        </Button>
        <Button type="button" style="filled" color="onprimary" onClick={() => handleLanguageChange('en')}>
          ingles
        </Button>
      </div>

      <SingleBlock backgroundColor="light" paddingSize="special" className={cn('container__padding--top')}>
        <Benefits />
      </SingleBlock>

      {/* Tendrás que quitarle esa clase y pasarsela al hero cuando lo metas */}

      <SingleBlock backgroundColor="light">
        <TopUp />
      </SingleBlock>

      <SingleBlock backgroundColor="pink" paddingSize="special" gapSize="superlarge">
        <FAQ isAccordionVer={false} />
      </SingleBlock>

      <SingleBlock backgroundColor="dark" fullHeight={true} paddingSize="large">
        <Register hasImage={true} />
      </SingleBlock>
    </>
  );
};

export default HomePage;
