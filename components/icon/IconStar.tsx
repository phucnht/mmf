import { Center } from '@whammytechvn/wt-components';

export function IconStar({}) {
  return (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 0.969678L15.5215 6.82122L15.6307 7.00272L15.8371 7.05051L22.4905 8.59144L18.0135 13.7488L17.8747 13.9088L17.893 14.1198L18.4835 20.9237L12.195 18.2596L12 18.177L11.805 18.2596L5.51654 20.9237L6.10703 14.1198L6.12534 13.9088L5.98648 13.7488L1.50954 8.59144L8.1629 7.05051L8.36926 7.00272L8.47849 6.82122L12 0.969678Z"
        fill="#FFD600"
        stroke="black"
      />
    </svg>
  );
}

export function IconStarRounded({}) {
  return (
    <Center className="flex justify-center items-center rounded-full w-[4.4rem] h-[4.4rem] bg-[#6DA900] p-4">
      <IconStar />
    </Center>
  );
}
