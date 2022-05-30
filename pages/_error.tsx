import { Container } from '@mui/material';
import { PublicLayout } from 'layouts';
import { NextPageContext } from 'next';

export const getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

const Home = ({ statusCode }: any) => {
  return (
    <PublicLayout>
      <Container>
        <div className='text-center p-20'>
          <div className='font-bold text-2xl text-secondary-main'>{statusCode}</div>
          <div className='font-bold'>not found</div>
        </div>
      </Container>
    </PublicLayout>
  );
};

export default Home;
