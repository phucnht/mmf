import { Button, Flex, Heading } from '@whammytechvn/wt-components';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };

  return (
    <Flex className="flex-col items-center justify-center gap-8 min-h-[60rem]">
      <Heading as="h1" className="text-white text-4xl">
        404 - Not Found
      </Heading>
      <Button className="py-3 px-4 min-w-fit xl:min-w-[15rem]" color="primary" onClick={goHome}>
        Go Home
      </Button>
    </Flex>
  );
}
