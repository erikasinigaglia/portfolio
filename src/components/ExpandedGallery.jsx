import { useEffect, useLayoutEffect, useRef, useState } from "react";
import MediaRenderer from "./MediaRenderer";

const EXIT_DURATION_MS = 0;

function ExpandedGallery({
  project,
  currentIndex,
  originRect,
  onPrevious,
  onNext,
  onClose
}) {
  const panelRef = useRef(null);
  const mediaFrameRef = useRef(null);
  const closeTimerRef = useRef(null);
  const [isEntering, setIsEntering] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [entryTransform, setEntryTransform] = useState("");
  const currentMedia = project.gallery[currentIndex];

  useLayoutEffect(() => {
    if (!originRect || !mediaFrameRef.current) {
      setEntryTransform("");
      const frame = window.requestAnimationFrame(() => setIsEntering(false));
      return () => window.cancelAnimationFrame(frame);
    }

    const panelBounds = mediaFrameRef.current.getBoundingClientRect();
    const scale = Math.min(
      originRect.width / panelBounds.width,
      originRect.height / panelBounds.height
    );

    setEntryTransform(`scale(${scale})`);

    const frame = window.requestAnimationFrame(() => setIsEntering(false));
    return () => window.cancelAnimationFrame(frame);
  }, [originRect]);

  useEffect(() => {
    panelRef.current?.focus();
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    function onPointerDown(event) {
      if (!panelRef.current) return;
      if (panelRef.current.contains(event.target)) return;
      requestClose();
    }

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") requestClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, onNext, onPrevious]);
  
  function onPanelClick(event) {
    if (event.target.tagName === "VIDEO") return;
  
    const bounds = event.currentTarget.getBoundingClientRect();
    const isLeft = event.clientX - bounds.left < bounds.width / 2;
  
    if (isLeft) onPrevious();
    else onNext();
  }

  function requestClose() {
    if (isExiting) return;

    setIsExiting(true);
    closeTimerRef.current = window.setTimeout(() => {
      onClose();
    }, EXIT_DURATION_MS);
  }

  return (
    <div
      ref={panelRef}
      tabIndex={-1}
      className="expanded-panel"
      onClick={(event) => event.stopPropagation()}
    >
      <div
        ref={mediaFrameRef}
        className="expanded-media-hitarea"
        style={
          isEntering
            ? {
                transform: entryTransform || "scale(1)"
              }
            : isExiting
              ? {
                  transform: entryTransform || "scale(1.3)",
                  // transitionTimingFunction: "cubic-bezier(0.4, 0, 0.85, 0.25)"
                }
            : undefined
        }
        onClick={onPanelClick}
        role="button"
        tabIndex={0}
        aria-label="Navigate gallery"
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onNext();
          }
        }}
      >
        <MediaRenderer
          media={currentMedia}
          className="expanded-media"
          priority="high"
        />
      </div>

      <div className="expanded-meta">
        <span className="gallery-counter">
          {currentIndex + 1}/{project.gallery.length}
        </span>
        <button type="button" className="expanded-close" onClick={requestClose}>
          close
        </button>
      </div>
    </div>
  );
}

export default ExpandedGallery;
