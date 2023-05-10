# usePersistedState
This hook is used to persist state in local storage. It is a wrapper around useState hook written in Typescript.
# Arguments
 - key: string - the key to use in local storage
 - initialValue: T - the initial value to use if no value is found in local storage
 - timeout?: number (default 500) in milliseconds - the timeout in milliseconds to use for the debounce function

# dependencies
 - None
# How to use
```ts
import usePersistedState from 'hooks/usePersistedState';

const example = () => {
  const [state, setState] = usePersistedState<string>('key', 'initialValue');
  return (
    <div>
      <input value={state} onChange={e => setState(e.target.value)} />
    </div>
  );
};
```



