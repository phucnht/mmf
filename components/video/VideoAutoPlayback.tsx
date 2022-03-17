import { useVideoAutoPlayback } from 'hooks/useVideoAutoPlayback';
import clsxm from 'utils/clsxm';

export default function VideoAutoPlayback({
  url,
  className,
  videoClassName
}: {
  url: string;
  className?: string;
  videoClassName?: string;
}) {
  const cxSection = clsxm(className);
  const cxVideo = clsxm(videoClassName);

  const [containerRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  return (
    <section ref={containerRef} className={cxSection}>
      <video playsInline muted loop ref={videoRef} className={cxVideo}>
        <source type="video/mp4" src={url} />
      </video>
    </section>
  );
}
