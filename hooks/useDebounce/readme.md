# useDebounce

debounce hook - debounce a value with a given delay

## Arguments

- value: any - the value to debounce
- delay: number - the delay in milliseconds

## dependencies

- None

## How to use

```ts
import { useDebounce } from 'hooks/useDebounce';

const example = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

 // fetch data with debouncedValue / do something with debouncedValue
 // useFetch(debouncedValue);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
};
```
