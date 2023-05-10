/**
 * Author: Henok Tsegaye
 * version: 1.0.0
 * license: MIT
 */

import { useState, useEffect, Dispatch } from "react";

export type WindowSize = {
  width: number;
  height: number;
};

/**
 * Returns the window size
 * @returns {WindowSize | null} window size
 */
export const useWindowSize = (): WindowSize | null => {
  const [windowSize, setWindowSize] = useState<WindowSize | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
