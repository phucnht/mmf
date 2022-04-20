import { Box, Button, Heading, Stack, Text } from '@whammytechvn/wt-components';
import { useState } from 'react';
import { NetworkConfigProps } from 'utils/networks';
import { ObjectProps } from 'utils/types';

export interface ModalTypeAccountProps {
  data?: ObjectProps;
}

export default function ModalTypeWrongNetwork({ data: network }: ModalTypeAccountProps) {
  const [loading, setLoading] = useState(false);

  const switchNetwork = async (network: NetworkConfigProps) => {
    try {
      setLoading(true);
      try {
        if (network.chainId !== window.ethereum.chainId)
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: network.chainId }]
          });
      } catch (error: any) {
        if (error.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [network]
          });
        }
      }
    } catch {
      //
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold">
      <Box className="bg-[url('/assets/logos/login.svg')] w-[9.1rem] h-[9.1rem] bg-auto bg-no-repeat bg-center" />
      <Heading className="!text-[3rem] font-bold uppercase text-center">WRONG NETWORK</Heading>
      <Box className="w-[35rem] text-center">
        <Text className="text-lg leading-relaxed my-12">Please switch network to continue</Text>
        <Stack className="justify-center items-center">
          <Button
            fullWidth
            onClick={() => (network ? switchNetwork(network as NetworkConfigProps) : null)}
            color={loading ? 'default' : 'secondary'}
            className="text-red-100 py-4 w-fit min-w-[15rem] disabled:bg-grey-400 disabled:cursor-not-allowed disabled:pointer-events-none"
            disabled={loading}
          >
            {network?.chainName}
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
