import cn from 'classnames';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import { Benefits } from './Benefits/Benefits';
import { TopUp } from '@/components/common/TopUp/TopUp';
import { FAQ } from '@/components/common/FAQ/FAQ';
import { Register } from '@/components/common/Register/Register';
import { HeroSection } from './HeroSection/HeroSection';

const HomePage: React.FC = () => {
  return (
    <>
      <SingleBlock
        fullHeight={true}
        backgroundColor="dark"
        paddingSize="large"
        className={cn('container__padding--top')}
      >
        <HeroSection />
      </SingleBlock>

      <SingleBlock id="benefits" backgroundColor="light" paddingSize="special">
        <Benefits />
      </SingleBlock>

      <SingleBlock backgroundColor="light">
        <TopUp />
      </SingleBlock>

      <SingleBlock id="faq" backgroundColor="pink" paddingSize="special" gapSize="superlarge">
        <FAQ isAccordionVer={false} />
      </SingleBlock>

      <SingleBlock backgroundColor="dark" fullHeight={true} paddingSize="large">
        <Register hasImage={true} />
      </SingleBlock>
    </>
  );
};

export default HomePage;
