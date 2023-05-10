# useWindowSize
This hook is used to get the current window size ( listens to window size change as well). It is a wrapper around useState hook written in Typescript.

# Arguments

 - None

# dependencies

 - None

# How to use

```ts
import useWindowSize from 'hooks/useWindowSize';

const example = () => {
  const [width, height] = useWindowSize();
  return (
    <div>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </div>
  );
};
```