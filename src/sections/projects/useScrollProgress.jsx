import { useState, useEffect } from "react";

export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const percent = scrollTop / (scrollHeight - clientHeight);
      setProgress(percent);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress;
}
