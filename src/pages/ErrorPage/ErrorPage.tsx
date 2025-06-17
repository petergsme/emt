import cn from 'classnames';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import { HeroSection } from '../HomePage/HeroSection/HeroSection';

const ErrorPage: React.FC = () => {
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
    </>
  );
};

export default ErrorPage;
