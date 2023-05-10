/**
 * Author: Henok Tsegaye
 * version: 1.0.0
 * license: MIT
 */

import { useEffect, useState, useRef } from 'react';

export type Size = {
  width: number;
  height: number;
};

/**
 * Returns the size of an element
 * @returns { size: Size | null, ref: React.RefObject<T> }
 * */
export const useElementSize = <T extends HTMLElement>(): {
  size: Size | null;
  ref: React.RefObject<T>;
} => {
  const [size, setSize] = useState<Size | null>(null);
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleResize = (): void => {
      if (ref.current === null) {
        return;
      }
      setSize({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { size, ref };
};
