import cn from 'classnames';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import { Error } from './Error/Error';

const ErrorPage: React.FC = () => {
  return (
    <>
      <SingleBlock
        fullHeight={true}
        backgroundColor="dark"
        paddingSize="large"
        className={cn('container__padding--top', 'full-height')}
      >
        <Error />
      </SingleBlock>
    </>
  );
};

export default ErrorPage;
