import { Flex, Heading } from '@whammytechvn/wt-components';

export default function Custom500() {
  return (
    <Flex className="items-center justify-center min-h-[60rem]">
      <Heading as="h1" className="text-white text-4xl">
        500 - Server-side error occurred
      </Heading>
    </Flex>
  );
}
