import { Button, Flex, Heading } from '@whammytechvn/wt-components';
import type { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import pino from 'pino';
function Error({ statusCode, name, message }: { statusCode: number; name: string; message: string }) {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <Flex className="flex-col items-center justify-center gap-8 min-h-[60rem]">
      <Heading as="h1" className="text-white text-4xl">
        {statusCode ? `An error ${statusCode} occurred on server` : `An error occurred on client: ${name}: ${message}`}
      </Heading>
      <Button className="py-3 px-4 min-w-fit xl:min-w-[15rem]" color="primary" onClick={goHome}>
        Go Home
      </Button>
    </Flex>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  console.log(res, 'khoa');
  pino().error(`khoa ${res}`);
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  console.log(JSON.stringify(err), 'oooooooa');
  pino().error(err);
  return { statusCode, name: err?.name, message: err?.message };
};

export default Error;
