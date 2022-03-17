import { useRef, useEffect } from 'react';

const useVideoAutoPlayback = (options: any) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const cb = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) videoRef.current?.play();
    else videoRef.current?.pause();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, videoRef];
};

export { useVideoAutoPlayback };
