/**
 * Author: Henok Tsegaye
 * Version: 1.0.0
 * license: MIT
 */
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

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
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key);
    return storageValue ? (JSON.parse(storageValue) as T) : initialState;
  });
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [key, state]);

  return [state, setState];
};
