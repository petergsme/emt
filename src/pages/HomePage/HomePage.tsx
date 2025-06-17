import cn from 'classnames';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import { Benefits } from './Benefits/Benefits';
import { TopUp } from '@/components/common/TopUp/TopUp';
import { FAQ } from '@/components/common/FAQ/FAQ';
import { Register } from '@/components/common/Register/Register';

const HomePage: React.FC = () => {
  return (
    <>
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
