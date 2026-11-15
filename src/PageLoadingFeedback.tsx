import { useCallback, useEffect, useRef, useState } from "react";
import type { Language } from "./content";

const showDelay = 150;
const recoveryDelay = 12000;

function isPageNavigation(event: MouseEvent) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    !(event.target instanceof Element)
  ) {
    return false;
  }

  const link = event.target.closest("a[href]");
  if (!(link instanceof HTMLAnchorElement) || link.hasAttribute("download")) {
    return false;
  }
  if (link.target && link.target.toLowerCase() !== "_self") return false;

  const { origin, pathname, search } = window.location;
  return (
    link.origin === origin && (link.pathname !== pathname || link.search !== search)
  );
}

export function usePageLoadingFeedback() {
  const [visible, setVisible] = useState(false);
  const showTimer = useRef(0);
  const recoveryTimer = useRef(0);

  const clearTimers = useCallback(() => {
    window.clearTimeout(showTimer.current);
    window.clearTimeout(recoveryTimer.current);
  }, []);

  const startLoading = useCallback(() => {
    clearTimers();
    showTimer.current = window.setTimeout(() => setVisible(true), showDelay);
    recoveryTimer.current = window.setTimeout(() => setVisible(false), recoveryDelay);
  }, [clearTimers]);

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      if (isPageNavigation(event)) startLoading();
    };
    const handlePageShow = () => {
      clearTimers();
      setVisible(false);
    };

    window.addEventListener("click", handleLinkClick);
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("pagehide", clearTimers);
    return () => {
      window.removeEventListener("click", handleLinkClick);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("pagehide", clearTimers);
      clearTimers();
    };
  }, [clearTimers, startLoading]);

  return { visible, startLoading };
}

export function PageLoadingFeedback({
  visible,
  language,
}: {
  visible: boolean;
  language: Language;
}) {
  return (
    <>
      {visible && (
        <div className="page-loading" aria-hidden="true">
          <div className="page-loading-indicator" />
        </div>
      )}
      <span className="sr-only" role="status">
        {visible ? (language === "en" ? "Loading page" : "Memuatkan halaman") : ""}
      </span>
    </>
  );
}
