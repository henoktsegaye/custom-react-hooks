# useElementSize
This hook is used to get the size of an element. It also watches for size changes and updates the size accordingly, written in Typescript.

# Arguments

- None

# dependencies

- None

# How to use

```ts
import useElementSize from 'hooks/useElementSize';

const example = () => {
  const { ref , size} = useElementSize();
  return (
    <div ref={ref}>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </div>
  );
};
```

