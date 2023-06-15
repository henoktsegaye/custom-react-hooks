/**
 * Author: Henok Tsegaye
 * version: 1.0.0
 * license: MIT
 */

import { useCallback, useEffect, useState } from 'react';

type Props = {
  watch?: true;
};
export const usePreferredColorScheme = ({
  watch = true,
}: Props): 'light' | 'dark' => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  const setColorSchemeFromMediaQuery = useCallback(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setColorScheme(isDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    setColorSchemeFromMediaQuery();
    if (watch) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', setColorSchemeFromMediaQuery);
    }
    return () => {
      if (watch) {
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeEventListener('change', setColorSchemeFromMediaQuery);
      }
    };
  }, []);

  return colorScheme;
};
