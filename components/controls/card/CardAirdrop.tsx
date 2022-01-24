import { Box } from "@whammytechvn/wt-components";
import Image from "next/image";
import imgAirdrop1 from "public/assets/airdrop-card-1.png";

const CardAirdrop = () => {
  return (
    <Box>
      <Box></Box>
      <Image alt="Airdrop 1" src={imgAirdrop1} />
    </Box>
  );
};

export default CardAirdrop;
