/**
 * Author: Henok Tsegaye
 * Version: 1.0.0
 * license: MIT
 */
import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';

/**
 * @description This hook is used to persist state in local storage
 * @param key
 * @param initialState
 * @param timeout
 * @returns [state, setState]
 * @example
 **/

export const usePersistedState = <T,>(
  key: string,
  initialState: T,
  timeout: number = 500
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>((): T => {
    const storageValue = localStorage.getItem(key);
    try {
      if (storageValue !== null) {
        return JSON.parse(storageValue);
      }
    } catch (e) {
      console.error(e);
    }

    return initialState;
  });
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [state, key]);

  return [state, setState];
};
