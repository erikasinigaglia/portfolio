import { useEffect, useRef } from "react";
import Hls from "hls.js";

const DEFAULT_VIDEO_POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23171717'/%3E%3Cstop offset='100%25' stop-color='%23262626'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1280' height='720' fill='url(%23g)'/%3E%3Ctext x='50%25' y='50%25' fill='%23999999' font-family='Arial, sans-serif' font-size='36' text-anchor='middle' dominant-baseline='middle'%3ELoading video...%3C/text%3E%3C/svg%3E";

function MediaRenderer({
  media,
  className = "",
  priority = "default",
  autoPlay = true
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    if (media?.type === "hls") {
      let hls;

      if (Hls.isSupported()) {
        hls = new Hls();

        hls.loadSource(media.src);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoPlay) {
            video.play().catch(() => {});
          }
        });
      } else if (
        video.canPlayType("application/vnd.apple.mpegurl")
      ) {
        // Safari
        video.src = media.src;
      }

      return () => {
        if (hls) {
          hls.destroy();
        }
      };
    }
  }, [media, autoPlay]);

  if (!media) return null;

  if (media.type === "video" || media.type === "hls") {
    return (
<video
  ref={videoRef}
  className={className}
  muted
  loop
  playsInline
  autoPlay={autoPlay}
  preload={priority === "high" ? "auto" : "metadata"}
  poster={media.poster || DEFAULT_VIDEO_POSTER}
  aria-label={media.alt || "Project video"}
  style={{ pointerEvents: "none" }}
> 
        {media.type === "video" && (
          <source src={media.src} type="video/mp4" />
        )}
      </video>
    );
  }

  return (
    <img
      className={className}
      src={media.src}
      alt={media.alt || "Project image"}
      loading={priority === "high" ? "eager" : "lazy"}
    />
  );
}

export default MediaRenderer;