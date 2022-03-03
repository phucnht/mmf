import { Button, Stack } from '@whammytechvn/wt-components';
import Image from 'components/display/image/Image';
import imgProcessing from '/public/assets/default/img-processing.png';

const ModalTypeProcessing = () => {
  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full] bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold gap-8">
      <Image alt="Processing" src={imgProcessing} />
      <Button className="py-4 max-w-[38rem] font-black text-white !bg-gray-400" color={'default'} disabled fullWidth>
        Processing...
      </Button>
    </Stack>
  );
};

export default ModalTypeProcessing;
