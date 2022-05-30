import dynamic from 'next/dynamic';

export { default as InputNumber } from './InputNumber';
export { default as CloseButton } from './CloseButton';
export { default as Spinner } from './Spinner';
export { default as CountdownTimer } from './CountdownTimer';

export { default as PerfectScrollbar } from 'react-perfect-scrollbar';
export { default as InfiniteScroll } from 'react-infinite-scroller';
export { default as InfiniteSlider } from 'react-slick';

export { default as NextLink } from 'next/link';
export { default as NextImage } from 'next/image';

export const NetworkBar = dynamic(() => import('./NetworkBar'), { ssr: false });
